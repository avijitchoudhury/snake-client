const net = require('net');

const connect = function () {
  const conn = net.createConnection({host: '10.0.2.15', port: 50541});
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

