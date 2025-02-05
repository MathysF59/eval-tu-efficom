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