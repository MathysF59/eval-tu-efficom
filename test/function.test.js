const { isEven, calculateTotalPrice, processPurchase, sendNotification, generatePassword } = require("./../src/function.js");

describe('When I check if a number is even or odd', () => {
    test('if the parameter is not a number, then I should get an error', () => {
        try{
            let result = isEven("t");
        }
        catch(e){
            expect(e).not.toBeNull(); 
            expect(e.message).toBe("Input must be a number");
        }
    });
    test('if the number is an integer, positive and even', () => {
        expect(isEven(4)).toEqual(true);
    });
    test('if the number is an integer, positive, odd', ()=> {
        expect(isEven(7)).toEqual(false);
    });
    test('if the number is an integer, negative, even', () =>{
        expect(isEven(-4)).toEqual(true);
    });
    test('if the number is an integer, negative, odd', () =>{
        expect(isEven(-7)).toEqual(false);
    });
});

describe('When I calculate the total price of a cart, with tax added', () => {
    test('if the cart is not an array, then I should get an error', () => {
        try{
            let result = calculateTotalPrice(4, 0.2);
        }
        catch(e){
            expect(e).not.toBeNull(); 
            expect(e.message).toBe("Prices must be an array");
        }
    });
    test('if the tax rate is not a number, then I should get an error', () => {
        try{
            let result = calculateTotalPrice([4, 5], "t");
        }
        catch(e){
            expect(e).not.toBeNull(); 
            expect(e.message).toBe("Tax rate must be a number");
        }
    });
    test('if the price is not a number, then I should get an error', () => {
        try{
            let result = calculateTotalPrice([4, "t"], 0.2);
        }
        catch(e){
            expect(e).not.toBeNull(); 
            expect(e.message).toBe("Each price must be a non-negative number");
        }
    });
    test('if the price is negative, then I should get an error', () => {
        try{
            let result = calculateTotalPrice([4, -5], 0.2);
        }
        catch(e){
            expect(e).not.toBeNull(); 
            expect(e.message).toBe("Each price must be a non-negative number");
        }
    });
    test('if the price is an integer, positive', () => {
        expect(calculateTotalPrice([4, 5], 0.2)).toEqual(10.8);
    });
});