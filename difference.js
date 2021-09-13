function difference(array, values) {
    array = array.filter(a => values.indexOf(a) < 0);
    return array;
}
console.log(difference([1, 2, 3, 4, 5, 6], [3, 4, 5]));