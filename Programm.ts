// var msg:string = "hello"+"world" 
// console.log(msg);

// var m = 90;
// var num = "str";
// if(m==9  && num == "str"){
//     console.log("this");

// }
// else{

//     console.log("that");
// }



// // example 2

var num:number = 2 
var result = num > 0 ?"positive":"non-positive" 
console.log(result)

var num = 12 ;

console.log(num);  


var str = 1;
var str2 = str; //str is now of type number 
console.log(typeof (str2));


let m:number = 6;
let star = "";
for (let i = 1; i <= m; i++) {
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);



let n:number = 5; // height of pattern
let number = "";
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    number += j;
  }
  number += "\n";
}
console.log(number);





                // let user = prompt('Enter your name?');

                // console.log(user);