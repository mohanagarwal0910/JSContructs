function isPalindrome(num) {
    let original = num.toString();
    let reversed = original.split('').reverse().join('');
    return original === reversed;
}

// Example usage
const num1 = 121;
const num2 = 123;

console.log(`${num1} is a palindrome: ${isPalindrome(num1)}`);
console.log(`${num2} is a palindrome: ${isPalindrome(num2)}`);
