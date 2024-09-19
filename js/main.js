// let ism = "Xayrulloh";

// let person = {
//   ism,
//   name: "Abdulloh",
//   surname: "Solikhov",
//   age: 25,
//   height: 167,
//   weight: 65,
//   univercity:{
//     course : 5,
//     gpa : 4.8,

//   }
// };

// // console.log(person);

// delete person.surname

// console.log(person.univercity ["course"]);

// let count = 0
// function calcSum(Obj) {
//   for (a in Obj) {

//       return Object.values(Obj).reduce((total, value) => total + value, 0)

// }
// }

// let Obj = {
//     John: 100,

//     Ann: 160,

//     Pete:130,
// }

// console.log(calcSum(Obj));

// for(i in Obj){

//     count += Obj[i]

//     // console.log(Obj[key])
// }

// console.log(count);

// const dasturchi = {
//     ism:'ulug',
//     yosh:25,
//     sal: function(){
//         console.log('salomat'+this.ism);

//     }
// }
// // console.log(dasturchi['ism']);
// // console.log(dasturchi.sal());
// console.log(Object.values(dasturchi));
// console.log(Object.entries(dasturchi));

//  age = 34;
// let user = {
//     age:3,
//     name : 'anaba'

// }
// console.log(user.work)

//     console.log(this);

// homework start

// 1-masala

// function sum(num){

//     let sum = 0;

//     for (let i in num) {
//         sum += num[i];
//     }

//     return sum;

// }
// let num = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// console.log(sum(num));

//2-masala

// function sum(num){

//     for(let i in num){
//         console.log(i);

//     }

// }

// let num = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// sum(num);

//3-masala

//  function sum(num){

//     for(let i in num){
//         console.log(num[i]);

//     }

// }

// let num = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// sum(num);

// 4- masala

// function haskey(obj,key){
//     if(key in obj){
//         return console.log(true)
//     }
//         return console.log(false);
// }

// let num = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// haskey(num, "d");
// haskey(num, "a");

// 5-masala

// let num1 = {
//     a: 1,
//     b: 2,
// }
// let num2 = {
//   b: 3,
//   c: 4,
// };

// let sum = Object.assign({},num1,num2)

// console.log(sum);

//6-masala

// let num = {
//   a: "hello",
//   b: "salom",
//   c: 4,
//   d: 2,
//   e: false,
//   f: true,
// };

// countType(num)

// function countType (num){

// let count = 0;

// let count2 = 0;

// let count3 = 0;

// for(let i in num){
//     if(!isNaN(num[i]) && typeof num[i] === 'number'){
//         count++;
//     }else if (typeof num[i] === 'string'){
//         count2++
//     }else if (typeof num[i] === 'boolean'){
//         count3++
//     }

// }
// console.log(count + " ta number bor");
// console.log(count2 + " ta string bor ");
// console.log(count3 + " ta boolean bor ");
// }

//7-masala

// function addObject(num){
//     num.c = 3;
//     console.log(num);

// }

// let num = {
//   a: 1,
//   b: 2,
// };

// addObject(num)

//8-masala

// function searchkey(obj, value) {
//   for (let i in obj) {
//     if (obj[i] === value) {
//       return i;
//     }
// }
// return null;
// }

// let car = {
//   model: "gentra",
//   color: "black",
//   year: 2016,
// };

// console.log(searchkey(car, 2016));
