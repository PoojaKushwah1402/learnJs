let myEmail = 'niki@gmail.com'
 
 let CheckEmail = function(myString){
 if((myString.includes(123@)) && (myString.length > 6)) {
 return true
 }
 return false
 }
 
 console.log(CheckEmail(myEmail));
-------------------------

 function findIt(written, word) {
 var whatiswritten = word.match(new RegExp('b'+written+'b', 'ig'));
 console.log(whatiswritten);
 }
 findIt('Nineteen', 'He went to buy bread but had forgotten his credit card.');

---------------------------------------
const myPromise = Promise.resolve(Promise.resolve('Promise!'));
 
 function funcOne() {
 myPromise.then(res => res).then(res => console.log(res));
 setTimeout(() => console.log('Timeout!'));
 console.log('Last line!');
 }
 
 async function funcTwo() {
 const res = await myPromise;
 console.log(await res);
 setTimeout(() => console.log('Timeout!'));
 console.log('Last line!');
 }
 
 funcOne();
 funcTwo();
 --------------
  (function test() {
 console.log(
 function () {} instanceof Object,
 function () {} instanceof Function,
 Function instanceof Object,
 Object instanceof Function
 );
 })();
 ------------
 generator function