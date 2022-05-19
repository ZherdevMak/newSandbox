'use strict';
function findOutlier(integers){
    let odd = 0;
    let even = 0;
    let sumodd = 0;
    let  sumeven = 0;
    integers.map(item => {
        if (item%2 == 0 || item === 0) {
            sumeven += item;
            even += 1;
        } else {
            sumodd +=item
            odd += 1;
        }
    })
    if (odd == 1) {return sumodd} else {
        return sumeven
    }
}