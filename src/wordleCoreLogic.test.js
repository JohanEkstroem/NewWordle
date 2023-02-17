import { expect, jest, test } from '@jest/globals';
import wordleCore from './wordleCoreLogic';

test('Given AA returns an array with all correct letters', () => {
  const input = 'AA';
  const correct = 'AA';
  const result = [
    { letter: 'A', result: 'correct' },
    { letter: 'A', result: 'correct' },
  ];
  const output = wordleCore(correct, input);

  expect(output).toEqual(result);
});

test('Given AB returns incorrect', () => {
  const input = 'AB';
  const correct = 'AA';
  const result = [
    { letter: 'A', result: 'correct' },
    { letter: 'B', result: 'incorrect' },
  ];
  const output = wordleCore(correct, input);

  expect(output).toEqual(result);
});

test('Given cykla should return incorrect L', () => {
  const correct = 'CYkLA';
  const input = 'HALLÅ';
  const result = [
    { letter: 'H', result: 'incorrect' },
    { letter: 'A', result: 'misplaced' },
    { letter: 'L', result: 'incorrect' },
    { letter: 'L', result: 'correct' },
    { letter: 'Å', result: 'incorrect' },
  ];
  const output = wordleCore(correct, input);

  expect(output).toEqual(result);
});
