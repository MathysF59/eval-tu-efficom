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

describe('When I calculate the total price of a cart', () => {
    test('if the cart is not an array, then I should get an error', () => {
        try{
            let result = calculateTotalPrice(5, 0.2);
        }
        catch(e){
            expect(e).not.toBeNull();
            expect(e.message).toBe("Prices must be an array");
        }
    });
    test('if the tax rate is not a number, then I should get an error', () => {
        try{
            let result = calculateTotalPrice([5, 10], "t");
        }
        catch(e){
            expect(e).not.toBeNull();
            expect(e.message).toBe("Tax rate must be a number");
        }
    });
    test('if the price is not a number, then I should get an error', () => {
        try{
            let result = calculateTotalPrice([5, "t"], 0.2);
        }
        catch(e){
            expect(e).not.toBeNull();
            expect(e.message).toBe("Each price must be a non-negative number");
        }
    });
    test('if the price is negative, then I should get an error', () => {
        try{
            let result = calculateTotalPrice([5, -10], 0.2);
        }
        catch(e){
            expect(e).not.toBeNull();
            expect(e.message).toBe("Each price must be a non-negative number");
        }
    });
    test('if the cart is an array of prices and the tax rate is a number', () => {
        expect(calculateTotalPrice([5, 10], 0.2)).toEqual(18);
    });
});

describe('When I process the purchase of a cart', () => {
    test('if the cart is not an array, then I should get an error', () => {
        try{
            let result = processPurchase(5, 0.2);
        }
        catch(e){
            expect(e).not.toBeNull();
            expect(e.message).toBe("Prices must be an array");
        }
    });
    test('if the tax rate is not a number, then I should get an error', () => {
        try{
            let result = processPurchase([5, 10], "t");
        }
        catch(e){
            expect(e).not.toBeNull();
            expect(e.message).toBe("Tax rate must be a number");
        }
    });
    test('if the price is not a number, then I should get an error', () => {
        try{
            let result = processPurchase([5, "t"], 0.2);
        }
        catch(e){
            expect(e).not.toBeNull();
            expect(e.message).toBe("Each price must be a non-negative number");
        }
    });
    test('if the price is negative, then I should get an error', () => {
        try{
            let result = processPurchase([5, -10], 0.2);
        }
        catch(e){
            expect(e).not.toBeNull();
            expect(e.message).toBe("Each price must be a non-negative number");
        }
    });
    test('if the cart is an array of prices and the tax rate is a number', () => {
        expect(processPurchase([5, 10], 0.2)).toEqual(18);
    });
});

describe('When I send a notification', () => {
    test('if the message is a string, then I should get a notification', () => {
        expect(sendNotification("Hello")).toBe("Notification envoyée : Hello");
    });
});

describe('When I generate a password', () => {
    test('if the length is not a number, then I should get an error', () => {
        try{
            let result = generatePassword("t", { uppercase: true, numbers: true, specialChars: true });
        }
        catch(e){
            expect(e).not.toBeNull();
            expect(e.message).toBe("Length must be a number greater than or equal to 6");
        }
    });
    test('if the options are not an object, then I should get an error', () => {
        try{
            let result = generatePassword(8, "t");
        }
        catch(e){
            expect(e).not.toBeNull();
            expect(e.message).toBe("Options must be an object");
        }
    });
    test('if the length is a number and the options are an object', () => {
        expect(generatePassword(8, { uppercase: true, numbers: true, specialChars: true })).not.toBeNull();
    });
});