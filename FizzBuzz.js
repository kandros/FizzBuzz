
var arg = process.argv[2];

function FizzBuzz(n) {

  var result;
  function multipleOf(num){
    return n % num === 0;
  }

  function stringFactory() {

    var firstGameNamePart = "Fizz";
    var secondGameNamePart = "Buzz";
    var gameName = firstGameNamePart + secondGameNamePart;

    if (multipleOf(3) && multipleOf(5)) {
      result = gameName;
    } else if (multipleOf(3)) {
      result = firstGameNamePart;
    } else if (multipleOf(5))  {
      result = secondGameNamePart;
    } else {
      result = n;
    }
  } 
  stringFactory();
  console.log(result);
}

FizzBuzz(arg);