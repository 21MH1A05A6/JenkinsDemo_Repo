const {add,subtract} = require('../utils/math.utils');
describe('Math Utils', () => {
  test('add function adds two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, -1)).toBe(-2);
    expect(add(0, 0)).toBe(0);
    expect(add(1.5, 2.5)).toBe(4);
  });

  test('subtract function subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(-1, -1)).toBe(0);
  });

})