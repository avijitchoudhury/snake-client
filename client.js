const net = require('net');

const connect = function () {
  const conn = net.createConnection({host: '172.46.2.204', port: 50541});
  // interpret incoming data as text
  conn.on('data', (data) => {
    console.log('Server says: ', data);
    conn.on('connect', () => {
      // conn.on('connect', () => {
      //   conn.write('Move: up');
        console.log('Successfully connected to game server')
        conn.write('Name: Avi');
      // });
    });
  });
  conn.setEncoding('utf8');
  
  return conn;
}


module.exports = { connect };



