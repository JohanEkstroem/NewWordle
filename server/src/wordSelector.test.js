import { expect, jest, test } from '@jest/globals';
import wordSelector from './wordSelector';

test('Given a list and a int(7) should return "SABATON"', () => {
  const input = ['SNÖ', 'APAN', 'KAFFE', 'SABATON'];
  const result = 'SABATON';
  const output = wordSelector(input, 7, false);

  expect(output).toEqual(result);
});

test('Given a list, an int(4) and isUnique true should return "EPAN"', () => {
  const input = ['SNÖ', 'APAN', 'EPAN', 'KAFFE', 'SABATON'];
  const result = 'EPAN';
  const output = wordSelector(input, 4, true);

  expect(output).toEqual(result);
});
