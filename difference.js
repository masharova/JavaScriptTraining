function difference(array, ...values) {
    for (let i = 0; i < values.length; i++) {
        array = array.filter(a => values[i].indexOf(a) < 0);
    }
    return array;
}
console.log(difference([1, 2, 3, 4, 5, 6], [3, 4, 5], [7, 1, 8]));