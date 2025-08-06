const{calculateTotal} = require('../utils/calculate.utils');
describe('Calculate Utils', () => {

    test('calculateTotal function calculates total after discount correctly', () => {
        expect(calculateTotal(100, 10)).toBe(90);
        expect(calculateTotal(200, 20)).toBe(160);
        expect(calculateTotal(50, 0)).toBe(50);
        expect(calculateTotal(100, 100)).toBe(0);
    });

    test('calculateTotal function throws error for invalid inputs', () => {
        expect(() => calculateTotal(-100, 10)).toThrow("Invalid input values");
        expect(() => calculateTotal(100, -10)).toThrow("Invalid input values");
        expect(() => calculateTotal(100, 110)).toThrow("Invalid input values");
    });
});