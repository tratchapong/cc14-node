// Listen for messages from the parent process
process.on('message', (msg) => {
  console.log(`Received message from parent: ${msg}`);
});

// Send a message back to the parent process
process.send('hello from child');

