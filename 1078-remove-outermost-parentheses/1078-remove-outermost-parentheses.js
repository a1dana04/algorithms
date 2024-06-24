/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = '';
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            
            if (stack.length > 0) {
                result += s[i];
            }
        
            stack.push('(');
        } else {
           
            stack.pop();
           
            if (stack.length > 0) {
                result += s[i];
            }
        }
    }

    return result;
};