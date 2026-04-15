import { fakultet } from './fakultet.js';
import test from 'node:test';
import assert from 'node:assert';

test('fakultet av 5 er 120', () => {
  assert.strictEqual(fakultet(5), 120);
});

test('fakultet av 0 er 1', () => {
  assert.strictEqual(fakultet(0), 1);
});

test('fakultet av 3 er 6', () => {
  assert.strictEqual(fakultet(3), 6);
});
