let arr = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function map(array, callback) {
    let newArr = [];
    array.forEach(element => {
        newArr.push(callback(element))
    });
    return newArr;
}

let mapNames = map(arr, name => name.toUpperCase())
console.log(mapNames);
