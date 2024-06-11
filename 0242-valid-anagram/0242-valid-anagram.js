/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length == !t.length) {
    return false;
  } else {
    let anogram = s
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
    let anogram1 = t
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
    return anogram === anogram1;
  }
};