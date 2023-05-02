// Listen for messages from the parent process
let pub_x
process.on('message', (numObj) => {
  let {x, y} = numObj
  console.log(`Received message from parent: `, numObj);
  // process.send(numObj.x + numObj.y);
  pub_x = x+y
  process.send(pub_x)
  process.exit(99)
});

// Send a message back to the parent process
// process.send('ok, your number is', pub_x);
