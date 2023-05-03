const { fork } = require('child_process');
const path = require('path');

// Create an array of numbers to be processed
const numbers = Array.from({ length: 100000 }, ()=>Math.floor(Math.random()*10));

// Normal sum by reduce

console.time("normalSome")
let normSum = numbers.reduce((a,c) => a+c, 0)
console.timeEnd("normalSome")
console.log("Normal sum : ",normSum)

// Divide the numbers into chunks
const chunkSize = 20000;
const chunks = [];
for (let i = 0; i < numbers.length; i += chunkSize) {
  chunks.push(numbers.slice(i, i + chunkSize));
}

// Fork a new child process for each chunk
const children = [];
for (let i = 0; i < chunks.length; i++) {
  const child = fork(path.join(__dirname, 'child.js'));
  child.send(chunks[i]);
  children.push(child);
}

console.time("forkSum")
// Listen for messages from the child processes
let result = 0;
let count = 0;
for (const child of children) {
  child.on('message', (msg) => {
    result += msg;
    count++;
    if (count === children.length) {
      console.log(`Fork sum result: ${result}`);
    }
  });
}
console.timeEnd("forkSum")

// Listen for the exit event on the child processes
for (const child of children) {
  child.on('exit', (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
  });
}
