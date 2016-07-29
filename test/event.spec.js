
var assert = require("chai").assert,
  monitor = require("..");

function fib(x){
  if (x===1){
    return x;
  } else{
    return x * fib(x-1);
  }
}

describe("When event loop is monitored", function(){
  it("should return a number > 0.0001", function(done){
    monitor(function(t){
        assert.isAtLeast(t, 0.0001, "The event loop should be blocked by at least a nano second");
        done();
    });
  });

  it("should return a number > 10", function(done){
    var res = 0;
    monitor(function(t){
      assert.isAtLeast(t, 10, "Event loop should be blocked");
      done();
    });
    for (var j=0; j<100; j++){
      for (var i=0; i<100; i++){
        res = fib(1000);
      }
    }
  });
});
