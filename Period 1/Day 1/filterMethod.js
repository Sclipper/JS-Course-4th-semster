let arr = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function filter(array, callback) {
let newArr = [];
    array.forEach(element => {
        if (callback(element)) {
            newArr.push(element);
        };
    });
    return newArr;
}

let filters = filter(arr, name => name.length <= 3);
console.log(filters);

