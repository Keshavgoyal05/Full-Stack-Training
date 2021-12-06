function generatePrime(l, r) {
    var flag = true;
    var arr = new Array();
    for (var n = l; n <= r; n++) {
        for (var i = 2; i < n; i++) {
            if (n != 2 && n % i == 0) {
                flag = false;
                break;
            }
        }
        if (flag)
            arr.push(n);
        flag = true;
    }
    return arr;
}
console.log('prime nuber between 10 and 20 are :' + generatePrime(10, 20));
