let arr = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

// Filter

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

// Map

function map(array, callback) {
    let newArr = [];
    array.forEach(element => {
        newArr.push(callback(element))
    });
    return newArr;
}

let mapNames = map(arr, name => name.toUpperCase())
console.log(mapNames);

// Prototype

Array.prototype.filter = function (callback) {
    let newArr = [];
    this.forEach(element => {
        if (callback(element)) {
            newArr.push(element);
        };
    });
    return newArr;
};
let protoFilter = arr.filter(name => name.length <= 3);
console.log(protoFilter);

Array.prototype.map = function (callback) {
    let newArr = [];
    this.forEach(element => {
        newArr.push(callback(element))
    });
    return newArr;
};
let protoMap = arr.map(name => name.toUpperCase());
console.log(protoMap);

// HTML

var bigArr = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];

var tableNames = '<table><thead><tr><th>Name</th><th>Phone</th></thead><tbody>' +
    bigArr.map(name => '<tr><td>' + name.name + '</td><td>' + name.phone + '</td></tr>').join('')
    + '</tbody></table>';

document.getElementById('names').innerHTML = tableNames;