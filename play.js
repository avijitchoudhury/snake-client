// const net = require('net');

/**
 * Establishes connection with the game server
 */
const { connect } = require('./client');
const { setupInput, handleUserInput } = require('./input')
console.log('Connecting ...');
connect();

console.log('Connecting ...');
connect();

setupInput();
// handleUserInput();

