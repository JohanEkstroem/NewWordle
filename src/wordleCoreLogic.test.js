import { expect, jest, test } from '@jest/globals';
import apa from './wordleCoreLogic';

test('the best flavor is grapefruit', () => {
  expect(apa()).toBe('gris');
});
