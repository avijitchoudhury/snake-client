const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection(
    {host: IP, 
    port: PORT
    });
  // interpret incoming data as text
  conn.on('data', (data) => {
    console.log('Server says: ', data);
    conn.on('connect', () => {
        console.log('Successfully connected to game server')
        conn.write('Name: Avi');
    });
    conn.on('connect', () => {
      conn.write('Name: Avi');
    });
  });
  conn.setEncoding('utf8');
  
  return conn;
}


module.exports = { connect };



//Paied with @JOadelicd

