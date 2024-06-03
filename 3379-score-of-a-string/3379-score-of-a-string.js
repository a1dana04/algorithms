/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
        let sum = 0;
    
    for (let i = 0; i < s.length - 1; i++) {
        const num1 = s.charCodeAt(i);
        const num2 = s.charCodeAt(i + 1);
        const result = Math.abs(num1 - num2);
        sum += result;
    }
    
    return sum;
    
};