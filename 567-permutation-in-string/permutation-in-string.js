/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map = new Map();
    for(let c of s1){
        if(!map.has(c)) map.set(c,0) //* if not there char then it will return 0
        map.set(c,map.get(c)+1); //* if it is there then return by +1   
    }

    let n = s1.length;
    let m = s2.length;

    for(let i=0; i<= m-n;i++){
        let temp = new Map(map);
        let j = 0;
        for(j=i;j<i+n;j++){
            let c = s2[j]
            if(temp.has(c) && temp.get(c) >0){
                temp.set(c,temp.get(c)-1);    
            }
            else break;
        }
        if(j == i+n) return true
    }
    return false
};