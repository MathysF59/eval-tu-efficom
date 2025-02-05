/**
 * Check if number is even or odd
 * @param {Number} number number to check
 * @returns {Boolean} true if number is even
 */
function isEven(number) {
    if (typeof number !== 'number') {
        throw new Error('Input must be a number');
    }
    return number % 2 === 0;
}

/**
 * Calculate total price of a cart, with tax added
 * @param {Number[]} cart array of price
 * @param {Number} taxRate rate of taxes
 * @returns {Number} total price
 */
function calculateTotalPrice(cart, taxRate) {
    if (!Array.isArray(cart)) {
        throw new Error('Prices must be an array');
    }
    if (typeof taxRate !== 'number') {
        throw new Error('Tax rate must be a number');
    }
    const total = cart.reduce((sum, price) => {
        if (typeof price !== 'number' || price < 0) {
            throw new Error('Each price must be a non-negative number');
        }
        return sum + price;
    }, 0);
    return total + total * taxRate;
}

/**
 * Send a notification in the console
 * @param {String} message message to notificate
 */
function sendNotification(message) {
    console.log(`Notification envoyée : ${message}`);
    return `Notification envoyée : ${message}`;
}

/**
 * Process purchase of cart after calculating total price and notificate it in the console.
 * @param {Number[]} cart array of price
 * @param {Number} taxRate rate of taxes
 * @returns {Number} total price 
 */
function processPurchase(cart, taxRate) {
    const totalPrice = calculateTotalPrice(cart, taxRate);
    sendNotification(`Votre total est de ${totalPrice.toFixed(2)} €`);
    return totalPrice;
}

/**
 * Generate a random password based on length and complexity required
 * @param {Number} length length of password to generate
 * @param {{ uppercase: true, numbers: true, specialChars: true }} options complexity for password (uppercase, numbers, specialChars)
 * @returns {String} generated password
 */
function generatePassword(length, options = { uppercase: true, numbers: true, specialChars: true }) {
    if (typeof length !== 'number' || length < 6) {
        throw new Error('Length must be a number greater than or equal to 6');
    }
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let charPool = lowercaseChars;
    if (options.uppercase) charPool += uppercaseChars;
    if (options.numbers) charPool += numberChars;
    if (options.specialChars) charPool += specialChars;
    
    if (charPool.length === 0) {
        throw new Error('At least one character type must be enabled');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }
    return password;
}

module.exports = { isEven, calculateTotalPrice, processPurchase, sendNotification, generatePassword };