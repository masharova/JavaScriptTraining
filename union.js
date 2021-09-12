function unionArr(x, y) {
    let obj = {};
    for (var i = x.length - 1; i >= 0; --i)
        obj[x[i]] = x[i];
    for (var i = y.length - 1; i >= 0; --i)
        obj[y[i]] = y[i];
    let res = []
    for (var k in obj) {
        res.push(obj[k]);
    }
    return res;
}
console.log(unionArr([1, 2, 3], [4, 2]));
