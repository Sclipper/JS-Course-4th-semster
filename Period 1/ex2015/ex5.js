function f(x, y, a, b, c, d, e, f) {
    return `
    Sum: ${x+y} 
    Rest Value 1 is a ${a.constructor.name} 
    Rest Value 2 is a ${b.constructor.name} 
    Rest Value 3 is a ${c.constructor.name} 
    Rest Value 4 is a ${d.constructor.name} 
    Rest Value 5 is a ${e.constructor.name} 
    Rest Value 6 is a ${f.constructor.name} 
    `;
}
console.log(f(5,2,true,2,"hello World",[1,2,3],new Date(),{}))
module.exports = {
    f}