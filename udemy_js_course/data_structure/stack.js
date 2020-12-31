// A stack is an ADT -  a concept
// by using push() and pop()
var stack = [];

stack.push("google");
stack.push("facebook");
stack.push("youtube");
stack.pop();

//using unshift() and shift() - these are costly coz of re-indexing.
stack.unshift("One");
stack.unshift("Two");
stack.unshift("Three");

let cur = stack.shift();
