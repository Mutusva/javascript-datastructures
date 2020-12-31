// Implementing Queues using arrays.
let queue = [];

queue.push("1");
queue.push("2");

let cur = queue.shift(); // shift isnt good for larger data sets

//Or

queue.unshift("One");
queue.unshift("Two");

cur = queue.pop();

//with arrays to implement a queue, there is better way as in Stacks to get the O(1) time complexity. its better to write your own.
