// Listen for messages from the parent process
process.on('message', (chunk) => {
  const result = chunk.reduce((acc, curr) => acc + curr, 0);
  // Send the result back to the parent process
  process.send(result);
  process.exit(1)
});