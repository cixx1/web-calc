import { fizzBuzz } from './fizzbuzz.js';
import test from 'node:test';
import assert from 'node:assert';

test('1 er "1"', () => {
  assert.strictEqual(fizzBuzz(1), "1");
});

test('3 er "Fizz"', () => {
  assert.strictEqual(fizzBuzz(3), "Fizz");
});

test('5 er "Buzz"', () => {
  assert.strictEqual(fizzBuzz(5), "Buzz");
});

test('15 er "FizzBuzz"', () => {
  assert.strictEqual(fizzBuzz(15), "FizzBuzz");
});
