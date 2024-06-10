/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = [];
    const mapping = {')': '(', '}': '{', ']': '['};
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in mapping) {
            const topEl = arr.pop() || '#';
            if (mapping[char] !== topEl) {
                return false;
            }
        } else {
            arr.push(char);
        }
    }
    return arr.length === 0;
};


