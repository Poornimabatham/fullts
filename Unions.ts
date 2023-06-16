function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  
  printStatusCode(404);
  printStatusCode('404');


//   example 2
  function printCode(type: boolean | number |string) {
    console.log(`My status code is ${type}.`)
  }
  
  printCode(false);
  printCode('404');