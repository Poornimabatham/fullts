// when we use a function again and again  when we pass any input then check ki what type of input is the give the output so we dont need to define the datatype here
// Programmme 
function usercase1(data) {
    return data;
}
console.log(usercase1({ firstname: "poornima batham", age: '30', active: true
}).age);
console.log(usercase1({ firstname: "poornima batham", age: '30', active: true
}));
// function getItems(items: any[] ) : any[] {  
//     return new Array().concat(items);  
// }  
// let myNumArr = getItems([10, 20, 30]);  
// let myStrArr = getItems(["Hello", "JavaTpoint"]);  
// myNumArr.push(40); // Correct  
// myNumArr.push("Hello TypeScript"); // Correct  
// myStrArr.push("Hello SSSIT"); // Correct  
// myStrArr.push(40); // Correct  
// console.log(myNumArr); // [10, 20, 30, 40, "Hello TypeScript"]  
// console.log(myStrArr); // ["Hello", "JavaTpoint", "Hello SSSIT", 4
