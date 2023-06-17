class stars{ 
    check(p)
 {

 
    let c:number = p;
    let stars = "";
    for (let i = 1; i <= c; i++) {
      for (let j = 0; j < i; j++) {
        stars += "*";
      }
      stars += "\n";
    }
    console.log(stars);
    }
}
let b  = new stars();
b.check(6);






// Function Based Star pattern


//  function check(p)
//  {

 
// let c:number = p;
// let stars = "";
// for (let i = 1; i <= c; i++) {
//   for (let j = 0; j < i; j++) {
//     stars += "*";
//   }
//   stars += "\n";
// }
// console.log(stars);
// }

// check(6);