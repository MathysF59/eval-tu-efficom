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
        expect(calculateTotalPrice([4, 5], 1.4)).toEqual(21.6);
    });
});

describe('When I send a notification in the console', () => {
    test('if I send a notification "Hello" in the console, then I should see "Notification envoyée : Hello" in the console', () => {
        console.log = jest.fn();
        sendNotification("Hello");
        expect(console.log).toHaveBeenCalledWith("Notification envoyée : Hello");
    });
});

describe('When I process purchase of cart after calculating total price and notificate it in the console', () => {
    test('if the cart is a array of positive prices and the taxRate is postive, then I should get the total price and a notification in the console', () => {
        console.log = jest.fn();
        expect(processPurchase([4, 5], 1.4)).toEqual(21.6);
        expect(console.log).toHaveBeenCalledWith("Notification envoyée : Votre total est de 21.60 €");
    });

    test('if the cart is not an array, then I should get an error', () => {
        try{
            let totalPrice = calculateTotalPrice(4, 0.2);
        }
        catch(e){
            expect(e).not.toBeNull(); 
            expect(e.message).toBe("Prices must be an array");
        }
    });
    test('if the tax rate is not a number, then I should get an error', () => {
        try{
            let totalPrice = calculateTotalPrice([4, 5], "t");
        }
        catch(e){
            expect(e).not.toBeNull(); 
            expect(e.message).toBe("Tax rate must be a number");
        }
    });
    test('if the price is not a number, then I should get an error', () => {
        try{
            let totalPrice = calculateTotalPrice([4, "t"], 0.2);
        }
        catch(e){
            expect(e).not.toBeNull(); 
            expect(e.message).toBe("Each price must be a non-negative number");
        }
    });
    test('if the price is negative, then I should get an error', () => {
        try{
            let totalPrice = calculateTotalPrice([4, -5], 0.2);
        }
        catch(e){
            expect(e).not.toBeNull(); 
            expect(e.message).toBe("Each price must be a non-negative number");
        }
    });
});

describe('When I generate a random password based on length and complexity required', () => {
    test('if the length is not a number, then I should get an error', () => {
        try{
            let result = generatePassword("t", {uppercase: true, numbers: false, specialChars: true});
        }
        catch(e){
            expect(e).not.toBeNull(); 
            expect(e.message).toBe("Length must be a number greater than or equal to 6");
        }
    });
    
    test('if the length is less than 6, then I should get an error', () => {
        try{
            let result = generatePassword(4, {uppercase: true, numbers: false, specialChars: true});
        }
        catch(e){
            expect(e).not.toBeNull(); 
            expect(e.message).toBe("Length must be a number greater than or equal to 6");
        }
    });
    
    test('if all the options are disabled, then I should get an error', () => {
        try{
            let result = generatePassword(6, {uppercase: false, numbers: false, specialChars: false});
        }
        catch(e){
            expect(e).not.toBeNull(); 
            expect(e.message).toBe("At least one character type must be enabled");
        }
    });
    
    test('if I generate a password with a lenght equal or superior to 6, with at least one option activated, then I should get a password', () => {
        let result = generatePassword(41, {uppercase: true, numbers: false, specialChars: true});
        expect(result).not.toBeNull();
    });
});