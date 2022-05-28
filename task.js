'use strict';
function numberOfPairs(gloves) {
        //My hands are freezing
    let arr = []
    arr.push(...gloves)
    arr.sort()
    let sum=0
    for (let i = 0; i<arr.length; ++i)  {
        if (arr[i] === arr[i + 1] ) {
            i++;
            ++sum;
        }
    }
    return sum
}
alert(numberOfPairs(['gray','black','purple','purple','gray','black']))
