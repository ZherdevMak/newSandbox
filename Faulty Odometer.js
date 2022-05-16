function faultyOdometer(n) {
    let arr = Array.from(n.toString())
    let sum = 0
    let arrZero = [1, 0, 0, 0, 0, 0, 0, 0, 0]
    let subresult = 1
    let arrSubresult =[]
    arrSubresult.push(1)
    for (let i = 1; i < 11; i++) {
        subresult +=Math.pow(10, i) + arrSubresult[i-1] * 8
        arrSubresult.push(subresult)
    }
    let arrResult = []
    function pop () {
        let i = arr.length - 1;
        if (arr[i] > 4) {
            arrResult.push(1)
        } else {arrResult.push(0)}
    }
    pop();

    for (let i = 1; i < arr.length; i++) {

        if (+arr[arr.length - (i + 1)] > 4) {
            arrResult.push(Math.pow(10, i) + (arr[arr.length - (i + 1)] - 1) * arrSubresult[i - 1])
        } else {
            arrResult.push((arr[arr.length - (i + 1)]) * arrSubresult[i - 1])
        }
    }
    sum = arrResult.reduce((sum, current) => sum + current, 0);
    let result = n - sum
    return result
}