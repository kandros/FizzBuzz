// Get argument passed while executing the program with Node.js, as actual arguments are from 3rd ownard
var arg = process.argv[2];


function FizzBuzz(number) {

  var result = "";
  var knownNumberStringPairs = new Map([
    ["3","Fizz"],
    ["5","Buzz"],
    ["7","Mezz"],
    ["22","Lotzz"],
  ]);

  function multipliedByParser(){
    var map = knownNumberStringPairs;
    for (var key of map.keys()) {
      var keyN = Number(key);
      if (multipleOf(keyN)) {
        result += map.get(key);
      }
    }
  }


  function multipleOf(num){
    return number % num === 0;
  }
  
  multipliedByParser();
  result = result.length ? result : number;
  console.log(result);
}

FizzBuzz(arg);
