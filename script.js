// data types in javascript
// primitive data types
//STRINGS
var str = "Harish Sharma";
var str2 = 'Harish Sharma';



// NUMBER DATA TYPES

var x;
var y = 4.3;



// BIGINT

var bigInt = 1713948173290578172309710297369017293075172371273897512903750917283979102735;

// BOOLEAN
var a=true;
var b=3;
var c=4;
// console.log(typeof a, a==b);
// console.log(typeof b, c==c);

// UNDEFINED
var val = 23;
var val = undefined;


// NULL

var val = null;

// SYMBOL

var val = Symbol('Symbol');
//NON PRIMITIVE DATA TYPES
// OBJECTS IS USED TO STORE KEY-VALUE PAIRS

var val = {
    x:43,
    y:"hello World",
    z:function(){
        return "this.x;"
    }
}

//ARRAYS COLLECTION OF DATA IN ORDERED LIST

var val = [2,true,"hello World",undefined,null]


//console.log("typeof val is: " + typeof val, ", " + "value of val: " + val)

//27-Jan-21 Wednesday
// Type coercion in javascript
// string coercion
// Example 1
var val =2
var val1 = "2"
var val2 = val + val1;
//example 2
var val =23;
var val1 = "hello World";
var val2 = val + val1; // returns string 23hello World
// Example 3;
var val = "John";
var val1 = "Doe";
var val2 = val + val1; // returns string John Doe
//example 4
var val =23;
var val1 = "23";
var val2 = val - val1; // returns number 0 , when - operator is used string type converted to number.

// Boolean Coercion
// Boolean coercion takes place when using logical operators, ternary operators, if statements and loop
// checks. To understand boolean coercion in if statements and operators, we need to understand truthy and
// falsy values.
// Truthy values are those which will be converted (coerced) to true . Falsy values are those which will be
// converted to false .
//All values except 0, 0n, -0, “”, null, undefined and NaN are truthy values. 

var val = 0;
var val1 = 23;

// if(x){
//     console.log(val);// The code inside this block will not run since the value of x is 0(Falsy)
// }
// if(y){console.log(val1)} // The code inside this block will run since the value of y is 23 (Truthy) 

// Logical coercion
var x = 220;
var y = "Hello";
var z = undefined

// console.log(x||y);
// console.log(y||z);
// console.log(x&&y);
// console.log(y&&z);

// if(x&&y){console.log("code runs")}
// if(x||Z){console.log("code runs")}

// immediately invoked functions.

// (function (){
//     //do something;
// })();

// Higher order functions operate on other functions, either by taking them as arguments or by returning
//them, are called higher-order functions.

// function higherOrder(fn){
//     fn();
// }
// higherOrder(function(){console.log("Hello World!")})

// function higherOrder2(){
//     return function(){
//         return "do something";
//     }
// }
// var x = higherOrder2()

// console.log(x());

//The “this” keyword refers to the object that the function is a property of. 
//What is currying in JavaScript?
// Currying is an advanced technique to transform a function of arguments n, to n functions of one or
// less arguments. 
// function add (a) {
//     return function(b){
//     return a + b;
//     }
//    }
//   console.log(add(3)(4))

  var globalVariable = "Hello world";
  function sendMessage(){
   return globalVariable; // can access globalVariable since it's written in global space
  }
  function sendMessage2(){
   return sendMessage(); // Can access sendMessage function since it's written in global space
  }
  sendMessage2(); // Returns “Hello world”
  