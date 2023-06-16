"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function add(n1,n2){
//     return n1+n2;
// }
// let result = add(9,80);  89
// let result = add("op",89)op89
// console.log(result);
// solve the concad error
// function add(n1:number,n2){
//         return n1+n2;
//     }
//     let out = add(9,89)
//     console.log(out);
// function dummy(a:number){
//     return a; 
// }
// let out4 = dummy(false);
// console.log(out4);
// function multiply(a: number, b) {
//     var c  =  a * b;
//      console.log(c);
//    }
//    multiply(3,"ytuy"); 
// output is NaN
function multiply(a, b) {
    var c = a * b;
    var d = a + b;
    console.log(c);
    console.log(d);
}
multiply(3, "ytuy");
