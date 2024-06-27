/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ""
    }
    return strs.reduce((acc,el)=> {
        while (el.indexOf(acc) !==0) {
            acc = acc.substring(0, acc.length -1)
            if (acc === "") {
                return ""
            }

        }
        return acc 
    })
};
// console.log(longestCommonPrefix(["flower","flow","flight"]))