interface myFunc {
    (
        firstargument: String,
        secondArgument: String,
        thirdArgument: String
    ): Array<String>
}

let implementInterfaceToFunction: myFunc = function (firstargument: String, secondargument: String, thirdArgument: String) {

    let array: Array<String> = [];
    array.push(firstargument);
    array.push(secondargument);
    array.push(thirdArgument);
    return array.map(x => x.toUpperCase());

}

let f2 = function logger(f1: myFunc) {
    let [a, b, c] = ["A", "B", "C"];
    console.log(f1(a, b, c));
}
f2(implementInterfaceToFunction)
console.log(implementInterfaceToFunction('a', 'g', 'f'))