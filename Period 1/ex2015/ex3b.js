var counter = {
    count: 0,
    inc: function () {
        this.count++;
        console.log(this === counter)
    }
}
var func = counter.inc;
func();
console.log(counter.count);
counter.inc();
console.log(counter.count);
counter.inc();
console.log(counter.count);
counter.inc();
console.log(counter.count);

var counter = {
    count: 0,
    inc: () => {
        this.count++;
        console.log(this === counter)
    }
}
var func = counter.inc;
func();
console.log(counter.count);
counter.inc();
console.log(counter.count);
counter.inc();
console.log(counter.count); 
