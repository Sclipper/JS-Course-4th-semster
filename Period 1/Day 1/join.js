var all= ["Lars", "Peter", "Jan", "Bo"];

let joined = all.join();

console.log(joined);

const reducer = (accumulator, currentValue) => accumulator + currentValue;

var numbers = [2, 3, 67, 33]; 

console.log(numbers.reduce(reducer));

var average = function(accumulator, member,index,arr ){

    if(index !== arr.length - 1){
        return accumulator + member ;

    }
    return (accumulator + member) / arr.length;
   } 

let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ];

   console.log(members.map(member => member.age).reduce(average));
   