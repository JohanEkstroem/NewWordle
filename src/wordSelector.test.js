import { expect, jest, test } from '@jest/globals';
import wordSelector from './wordSelector';

test('Given a list of words then returns a string', () => {
  const input = [];
  const result = 'WORD';
  const output = wordSelector(input);

  expect(output).toEqual(result);
});
