const expect = require("chai").expect;

describe("Testing async behaviour", function(){
  this.timeout(5000);  
  var foo = false;
  before(function(done){
    setTimeout(function(){
      foo = true;
      console.log("new LINEEEEEEEEEEEEE**********************************************************************************************")
      done();  
    }, 1000);
    
  });
  it("passing", function(){
    expect(foo).to.equal(true);
  });
});