const { fork } = require('child_process');
const path = require('path');

// Fork a new child process
const child = fork(path.join(__dirname, 'child.js'));

// Send a message to the child process
child.send('hello from parent');

// Listen for messages from the child process
child.on('message', (msg) => {
  console.log(`Received message from child: ${msg}`);
});

// Listen for the exit event on the child process
child.on('exit', (code, signal) => {
  console.log(`Child process exited with code ${code} and signal ${signal}`);
});
