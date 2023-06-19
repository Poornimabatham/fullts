interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string | number ,
 
 } 
 
 var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi()
    {return 8 } 
 } 
 
 console.log("Customer Object ") 
 console.log(customer.firstName) 
 console.log(customer.lastName) 
 console.log(customer.sayHi())  
 
 var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi(){return "Hello!!!"} 
 } 
   
 console.log("Employee  Object ") 
 console.log(employee.firstName);
 console.log(employee.lastName);


//  The example defines an interface. The customer object is of the type IPerson. Hence, 
//  it will now be binding on the object to define all properties as specified by the interface.



type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
};

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car2: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

console.log(car2.year);
console.log(car2.type);
console.log(car2.model);

// Example4k
 interface Rectangle{
    height:number,
    width
 }