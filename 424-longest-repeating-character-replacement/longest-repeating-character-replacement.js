/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
//    let max = 0;
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++) {
//             const subString = s.substring(i, j + 1);
//             const replacement = countReplacements(subString);
//             if (replacement <= k) {
//                 max = Math.max(max, subString.length);
//             }
//         }
//     }
//     return max;

//     function countReplacements(subString) {
//     const charCount = {};
//     let maxCount = 0;

//     for (let i = 0; i < subString.length; i++) {
//         const char = subString[i];
//         charCount[char] = (charCount[char] || 0) + 1;
//         maxCount = Math.max(maxCount, charCount[char]);
//     }

//     return subString.length - maxCount;
// }

//**************************************************************** *//

    // let res = 0;
    // let count = new Map();
    // let l = 0;
    // for (let r = 0; r < s.length; r++) {
    //     let len  = r - l + 1
    //     count.set(s[r], 1 + (count.get(s[r]) || 0))
    //     if ((len - Math.max(...count.values())) > k) {
    //         count.set(s[l], count.get(s[l]) - 1)
    //         l++;
    //     }
    //     len = r - l + 1;
    //     res = Math.max(res, len)
    // }
    // return res;


    //********************************************** *//

    let l=0, r=0;
    let obj = {};
    let maxCount = 0;
    for( r=0;r<s.length;r++){
//* here frequency will show if already   exist then obj[s[r]]+1 or not then 1
        obj[s[r]] = obj[s[r]]+1 || 1;
        maxCount = Math.max(maxCount,obj[s[r]])
        if(r-l+1-maxCount >k){
            obj[s[l]]-- // decreasing values and increasing with r++
            l++
        }
    }
    return r-l


};