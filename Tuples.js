// tuple is a typed array with a pre-defined length and types for each index
// define our tuple = limit kar deta hai length ko or first kis type ka hoga so on
// let ourTuple: [number, boolean, string?];
// // initialize correctly
// ourTuple = [5, false];
// ourTuple.push('Coding God was here');
// // ourTuple[0]="hyyy"; can't define
// console.log(ourTuple);
// class car {
//     name: string;
//     number:number; 
//     owner:string;
//   }
//   const model = new car();
//   model.name = "kia";
//   model.number=9889;
//   model.owner = "poornima batham"
//   console.log(model);
// class Employee{
//   name:'';
//   email:'';
//   adduser(details){
//       return `Ubitech Welcome you ${details}`
//   }
//   emai(el){
//     return `Your email is ${el}`
//   }
// }
// let User2 = new Employee;
// let result =  User2.adduser("poornima batham");
// let email_address = User2.emai("pbatham21@gmail.com");
// console.log(result);
// console.log(email_address );
var human = /** @class */ (function () {
    function human() {
        this.name = "";
        this.number = "";
    }
    human.prototype.set = function (name, number) {
        this.name = name;
        this.number = number;
        this.getname_length();
    };
    human.prototype.dis = function () {
        console.log(this.name);
        console.log(this.number);
    };
    human.prototype.getname_length = function () {
        console.log(this.name.length);
    };
    return human;
}());
var v = new human;
v.set("poo", 987);
// v.name="lalit"; error
// v.name="shivam"; error
// v.getname_length()
v.dis();
