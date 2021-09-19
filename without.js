function without(array, val) {
    return array.filter(item => !val.includes(item));
}
console.log(without([2, 1, 2, 3], [1, 2]));
