"use strict";
// when we have so many files then we have so many functions and class there there is a complication arises
// then we use module here
Object.defineProperty(exports, "__esModule", { value: true });
var techer_1 = require("./techer");
var student_1 = require("./student");
var techer = new techer_1.default();
console.log(techer.data);
var student = new student_1.default();
console.log(student.data);
