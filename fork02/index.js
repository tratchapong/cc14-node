const { fork } = require('child_process');
const path = require('path');

// Fork a new child process
// const child = fork(path.join(__dirname, 'child.js'));
const child = fork(path.resolve('child.js'))

let numObj = {
  x: 10,
  y: 20
}
// Send a message to the child process
child.send(numObj);

// Listen for messages from the child process
child.on('message', (msg) => {
  console.log(`Received message from child: ${msg}`);
});

// Listen for the exit on the child process 
child.on('exit', (code, signal) => {
  console.log(`Child process exited with code ${code} and signal ${signal}`);
});

