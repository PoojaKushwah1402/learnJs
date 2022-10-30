closour.js
-------------------------------
temp

TO understand closoure, we first need to knoe the concept of scoping/lexical scoping in javascript.

lexical scoping in JavaScript means that a variable defined outside a function can be accessible inside another function defined after 
the variable declaration. But the opposite is not true. the variables defined inside a function will not be accessible outside that function.

var outside = 10;

function scoping() {
  
    var inside =20;
    console.log(inside);
    console.log(outside)

}

console.log(inside);
console.log(outside)


Initaially it was true for all the variables decleared in javascript, 
but now we hav let and cont keywords which dont have lexical scoping instead they have block level scoping, i.e they could be accessable within a curly brackets either it will be of function or any conditional or simply a brackets, they could not be accessable outside of that.

code


When comes to closoure, we always use clousoures either knowingly or unknowingly. even if unknowing it works fine in most of the cases. But knowing closure will provide better control over the code when using them.

function clousoure() {
  var a=10;
    
  return( function () {return a} ); 
}

let c = clousoure()
c();

var add = c() +1;



As we know in javascript everything is object which has some properties.clousoure is one of the property of object in javascipt which preserve the variable's value outside of its scope.

In the above code in function clousoure() the value of a should be accessible only within that function but with the help of closoure we can use it outside of function clousoure.
the function clousoure() is returning a function which returns the value of variable a, which is defined inside function clousoure. later we are storing the result of function closoure() in variable c, late whenever we are executing c(), it is returing the value of variable a. i.e we are using the varable a outside of its scope which is nothing but clousoure.

if you want to check the clousoure inside a function, check it with console.dir(function_name).
eg.

photo.

you can see function stored in variable C has one property clousoure and it has value of variable a inside it.


function printString() {
  var a=10;
    
  return( function () {return 'No Clousoure'} ); 
}

let print = printString()
print();


If you are thinking here also you will get property clousoure with variable a, then check below console.

photo

No we are not getting closoure here, because printString function is returning a function which is not using any of its variables, therefore it has no closoure of its outside function. we get closoure only when we use the properties or variables of outside function.

closoure can absolutely work fine with let and const.

function sub() {
  let b=10;
    
  return( function (c) {return c+b} ); 
}
let k = sub()


in the above code we will get the closoure in function stored in variable k.
closoure of b, because it is using the variable b which is declared in its outside function, i.e in function sub().

photo
-------------------------------------

JavaScript variables can belong to the local or global scope.

A function can access all variables defined inside the function, like this:

function myFunction() {
  var a = 4;
  return a * a;
}

But a function can also access variables defined outside the function, like this:



var a = 4;
function myFunction() {
  return a * a;
}

In the last example, a is a global variable.

In a web page, global variables belong to the window object.

Global variables can be used (and changed) by all scripts in the page (and in the window).

In the first example, a is a local variable.

A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.

Global and local variables with the same name are different variables. Modifying one, does not modify the other.

Variable Lifetime
Global variables live until the page is discarded, like when you navigate to another page or close the window.

Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.


A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after 
the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.