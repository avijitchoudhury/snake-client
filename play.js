// const net = require('net');

/**
 * Establishes connection with the game server
 */
const { connect } = require('./client');
console.log('Connecting ...');
connect();

console.log('Connecting ...');
connect();

const handleUserInput = function (data) {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
}
const setupInput = function () {
  const stdin = process.stdin;
  stdin.handleUserInput(data);
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}