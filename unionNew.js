function union(...args) {
    let allArgs = [];

    for (let i = 0; i < args.length; i++) {
        allArgs = allArgs.concat(args[i])
    }

    let set = new Set(allArgs);

    return Array.from(set);
}

console.log(union([1, 2], [3, 2], [2, 2]));

