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
var num = 2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result);
var num = 12;
console.log(num);
var str = 1;
var str2 = str; //str is now of type number 
console.log(typeof (str2));
var m = 6;
var star = "";
for (var i = 1; i <= m; i++) {
    for (var j = 0; j < i; j++) {
        star += "*";
    }
    star += "\n";
}
console.log(star);
var n = 5; // height of pattern
var number = "";
// External loop
for (var i = 1; i <= n; i++) {
    // Internal loop
    for (var j = 1; j <= i; j++) {
        number += j;
    }
    number += "\n";
}
console.log(number);
// let user = prompt('Enter your name?');
// console.log(user);
