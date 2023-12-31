/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // let charSet = new Set();
    // for(let i = 0; i < s.length; i++) {
    //     if (charSet.has(s[i])) {
    //         return true;
    //     }
    //     console.log(charSet.add(s[i]));
    // }
    // return false;

//* M-2

// let stack = [];
// let parentheses = "([{";
// let closingParentheses = ")]}";

// for (let i = 0; i < s.length; i++) {
//   let char = s[i];

//   if (parentheses.includes(char)) {
//     stack.push(char);
//   } else if (closingParentheses.includes(char)) {
//     if (stack.length === 0) {
//       return false; // No matching opening parenthesis found
//     }

//     let top = stack.pop();
//     if (
//       (char === ")" && top !== "(") ||
//       (char === "}" && top !== "{") ||
//       (char === "]" && top !== "[")
//     ) {
//       return false; // Mismatched parentheses
//     }
//   }
// }
// return stack.length === 0; // Check if all parentheses are balanced


//* M-3
//  s = s.split("");
//     let stack = [];
//     for (let z of s) {
//         if (z === "(" || z === "{" || z === "[") {
//             stack.push(z);
//         } else {
//             let top = stack[stack.length - 1];  //* this is showing top of the length 
//             if (z === ")" && top === "(" || z === "]" && top === "[" || z === "}" && top === "{")
//                 stack.pop();
//             else
//                 return false;
//         }
//     }
//     return stack.length === 0;


//*************   M-4   **************//

    let stack = [];

    for(let i=0; i<s.length;i++){
        let top = stack[stack.length -1]
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i])
        }
        else if(s[i] === ")" && top === "(" || s[i] === "}" && top === "{" || s[i] === "]" && top === "[" ){
            stack.pop(s[i])    
        } else{
            return false
        }
    }
    if(stack.length === 0){
        return true;
    }
    if(stack.length !== 0){
        return false
    }

};
