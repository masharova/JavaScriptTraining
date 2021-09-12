Array.prototype.without = function(... values){
    return this.filter(item => !values.includes(item)) 
}
console.log([2, 1, 2, 3].without(1, 2));


   

