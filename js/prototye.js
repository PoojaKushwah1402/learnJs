Object is the main object in javascript.
it has one property known as prototype which is always inherited to other objects we create in js.this property prototype has all the methods that needs to be inherit.
eg : toSting, constructor etc.
other properties are not accessable because they are not inherited.
eh : keys, is etc.
 
 similarly when we create an object all the inherited properties came at __proto__. and all properties that we need to share we can put in object.prototype .
 and later any object created with syntax var newobj = Object.create(oldObj) should have all the properties which we initialized in oldObj.prototype.

 difference b/w __proto__ and prototype

 Why we have prototype property in functions.

 arrow functions dont have prototye property.

 var o = {a: 1};

// o ---> Object.prototype ---> null

var b = ['yo', 'whadup', '?'];

// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}

// f ---> Function.prototype ---> Object.prototype ---> null

var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype

hasOwnProperty is the only thing in JavaScript which deals with properties and does not traverse the prototype chain.

You probably already noticed that our function A has a special property called prototype. This special property works with the JavaScript new operator. T

If, in the example above, you do var a1 = new A(); var a2 = new A(); then a1.doSomething would actually refer to Object.getPrototypeOf(a1).doSomething, which is the 
same as the A.prototype.doSomething you defined, i.e. Object.getPrototypeOf(a1).doSomething == Object.getPrototypeOf(a2).doSomething == A.prototype.doSomething.