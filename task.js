'use strict';
function digital_root(n) {
    if (n == 0) {return n}
    let arr = [];
    reduce();
    return arr;
        function reduce() {
            arr = Array.from(String(n));
            for (let i = 0; arr.length > 1; i++) {
            arr = arr.reduce((sum, current) => sum + +current, 0);
            }
            n = arr;
            if (n > 9) {reduce()} else {return arr}
                }
}
alert(digital_root(456))