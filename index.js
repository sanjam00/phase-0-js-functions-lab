// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax(amount) {
    let newAmount = amount * .10;
    // console.log(newAmount);
    return newAmount;
}

function convertToUpperCase(text) {
    const upperCase = text.toUpperCase();
    console.log(upperCase);
    return upperCase;
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else if (num1 === num2) {
        return num1; // or return [num1, num2] if you want both
    }
}

function isPalindrome(word) {
    const reversed = word.split("").reverse().join("");
    if (word === reversed){
        return true;
    } else if (word !== reversed) {
        return false;
    } else if (reversed === " ") {
        return true; 
    }
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountAmount = originalPrice * (discountPercentage / 100);
    let finalPrice = originalPrice - discountAmount;
    if (discountPercentage === 0) {
        return originalPrice;
    } else if (discountPercentage === 100) {
        return 0;
    } else if (discountPercentage > 100) {
        return finalPrice;
    } else {
        return finalPrice;
    }
}