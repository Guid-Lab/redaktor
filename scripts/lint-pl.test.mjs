import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { lint, GENRES } from "./lint-pl.mjs";

const CLI = fileURLToPath(new URL("./lint-pl.mjs", import.meta.url));
const ids = (r, id) => r.hits.filter(h => h.id === id);
const frags = (r, id) => ids(r, id).map(h => h.frag);

test("polskie litery na brzegu słowa: posiada, dedykowany", () => {
  const r = lint("Firma posiada dedykowany zespół.");
  assert.deepEqual(frags(r, "KALKA/wata").sort(), ["dedykowany", "posiada"]);
});

test("formy fleksyjne z diakrytykiem: posiadać, dokonać, dedykowaną", () => {
  const r = lint("Chcemy posiadać dedykowaną linię.");
  assert.deepEqual(frags(r, "KALKA/wata").sort(), ["dedykowaną", "posiadać"]);
  assert.equal(frags(lint("Trzeba dokonać wyboru."), "PERYFRAZA-analityczna")[0], "dokonać");
});

test("metryka który liczy którą i których", () => {
  const r = lint("Firma, którą znam. Ludzie, których lubię.");
  assert.equal(r.metrics.ktoryPer100, (2 / 6) * 100);
});

test("Title Case w nagłówku z polską literą", () => {
  const r = lint("# Łódź Jest Piękna");
  assert.equal(ids(r, "TITLE-CASE-naglowek").length, 1);
});

test("cyrylica to BŁĄD-HARD", () => {
  const r = lint("Słowo z literą а w środku.");
  assert.equal(ids(r, "CYRYLICA")[0].cls, "BŁĄD-HARD");
});

test("em-dash to TYPO", () => {
  assert.equal(ids(lint("To jest — wtrącenie."), "EM-DASH")[0].cls, "TYPO");
});

test("zakres z półpauzą bez spacji nie jest flagowany", () => {
  assert.equal(ids(lint("Wojna 1939–1945 i godziny 9.00–17.00."), "EN-DASH-jako-mysl").length, 0);
  assert.equal(ids(lint("Tekst – i tyle."), "EN-DASH-jako-mysl").length, 1);
});

test("gatunek legal pomija peryfrazy, doc je zgłasza", () => {
  const t = "Strony dokonać mogą zmiany umowy.";
  assert.equal(ids(lint(t, "legal"), "PERYFRAZA-analityczna").length, 0);
  assert.equal(ids(lint(t, "doc"), "PERYFRAZA-analityczna").length, 1);
  assert.equal(lint(t, "legal").metrics.ktoryThreshold, GENRES.legal.ktoryThreshold);
});

test("nieznany gatunek rzuca", () => {
  assert.throws(() => lint("x", "poezja"), /Nieznany gatunek/);
});

test("CLI --json zwraca poprawny JSON", () => {
  const out = execFileSync("node", [CLI, "--text", "Firma posiada zespół.", "--genre", "ui", "--json"], { encoding: "utf8" });
  const r = JSON.parse(out);
  assert.equal(r.genre, "ui");
  assert.equal(r.byClass.STYL, 1);
  assert.equal(r.metrics.ktoryThreshold, 1);
  assert.equal(r.metrics.paragraphs, null);
});

test("CLI z nieznanym gatunkiem kończy się kodem 1", () => {
  assert.throws(() => execFileSync("node", [CLI, "--text", "x", "--genre", "nope"], { stdio: "pipe" }), /status: 1|Nieznany/);
});

test("tekst bez trafień daje 0 hits", () => {
  const r = lint("Kupiłem chleb i masło. Było smacznie.");
  assert.equal(r.hits.length, 0);
  assert.deepEqual(r.byClass, {});
});
