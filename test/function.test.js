const { isEven, calculateTotalPrice, processPurchase, sendNotification, generatePassword } = require("./../src/function.js");

describe('isEven', () => {
    test('should return true for even numbers', () => {
        expect(isEven(2)).toBe(true);
    });

    test('should return false for odd numbers', () => {
        expect(isEven(3)).toBe(false);
    });

    test('should throw an error for non-number input', () => {
        expect(() => isEven("2")).toThrowError('Input must be a number');
    });
});

describe('calculateTotalPrice', () => {
    test('should return total price with tax', () => {
        expect(calculateTotalPrice([10, 20, 30], 0.2)).toBe(72);
    });

    test('should throw an error for non-array prices', () => {
        expect(() => calculateTotalPrice(10, 0.2)).toThrowError('Prices must be an array');
    });

    test('should throw an error for non-number tax rate', () => {
        expect(() => calculateTotalPrice([10, 20, 30], "0.2")).toThrowError('Tax rate must be a number');
    });

    test('should throw an error for negative price', () => {
        expect(() => calculateTotalPrice([10, -20, 30], 0.2)).toThrowError('Each price must be a non-negative number');
    });
});
