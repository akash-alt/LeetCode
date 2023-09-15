/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // let objOp = [
    //     "+","-","*","/"
    // ]

    let stack = new Array();
    for(let e of tokens){
        if(e.match(/[0-9]/)){
            stack.push(parseInt(e))
        }
        else{
            let b = stack.pop();
            let a = stack.pop();
            let c = 0;

            if(e == "+") c = a+b;
            else if(e === "-") c = a-b;
            else if(e === "*") c = a*b;
            else c = parseInt(a/b)
            console.log(a,b,c,e)
            stack.push(c)
            
        }
        console.log(stack)
    }
    return stack.pop()
};