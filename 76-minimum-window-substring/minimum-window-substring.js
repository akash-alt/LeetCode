/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
    //* M-1 *//
//   let map = new Map();
//   for (let letter of t) {
//     if (!map.has(letter)) {
//       map.set(letter, 1);
//     } else {
//       map.set(letter, map.get(letter) + 1);
//     }
//   }

//   let left = 0;
//   let right = 0;
//   let len = Infinity;
//   let count = map.size;
//   let minWindow = ""; //* substring ont get then return ""

//   while (right < s.length) {
//     let rLetter = s[right];
//     if (map.has(rLetter)) {
//       map.set(rLetter, map.get(rLetter) - 1);
//       if (map.get(rLetter) === 0) count--;
//     }
//     right++;

//     while (count === 0) {
//       if (right - left < len) {
//         len = right - left;
//         minWindow = s.slice(left, right);
//       }
//       let lLetter = s[left];
//       if (map.has(lLetter)) {
//         map.set(lLetter, map.get(lLetter) + 1);
//         if (map.get(lLetter) > 0) count++;
//       }
//       left++;
//     }
//   }
//   return minWindow;


//* M-2 *//
    if (t.length > s.length) return '';
    const neededChars = {};
    for (let char of t) {
        neededChars[char] = (neededChars[char] || 0) + 1;
    }
    
    let left = 0;
    let right = 0;
    let neededLength = Object.keys(neededChars).length;
    let substring = '';
    
    while (right < s.length) {
        const rightChar = s[right];
        neededChars[rightChar]--;
        if (neededChars[rightChar] === 0) neededLength--;
        
        while (neededLength === 0) {
            if (!substring || substring.length > right - left + 1) {
                substring = s.slice(left, right + 1);
            }
            const leftChar = s[left];
            // If the leftChar in charMap is at exactly 0 before being 
            // incremented, we now need more leftChars so that its count
            // in charMap goes down to exactly 0
            if (neededChars[leftChar] === 0) {
                neededLength++;
            }
            neededChars[leftChar]++;
            left++;       
        }
        right++;
    }
    return substring;
};