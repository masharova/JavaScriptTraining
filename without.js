function without(array, val) {
    array = array.filter(item => !val.includes(item));
    return array;
}
console.log(without([2, 1, 2, 3], [1, 2]));
