function union(...args) {
    let set = new Set(args[0]);
    for (let index = 1; index < args.length; index++) {
        for (let i = 0; i < args[index].length; i++) {
            set.add(args[index][i]);
        }
    }

    return Array.from(set);
}

console.log(union([1, 2], [3, 2], [2, 2]));

