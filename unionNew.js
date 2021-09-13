function union() {
    let set = new Set(arguments[0]);
    for (let index = 1; index < arguments.length; index++) {
        for (let i = 0; i < arguments[index].length; i++) {
            set.add(arguments[index][i]);
        }
    }

    return Array.from(set);   
}

console.log(union([1, 2], [3, 2], [2, 2]));

