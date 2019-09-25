let connection;

const handleUserInput = function (data) {
    if (data === '\u0003') {
      process.exit();
  } if (data === '\u0077'){
      // console.log("Up")
      conn.write('Move: up')
  } if (data === '\u0064'){
      // console.log("Right")
      conn.write('Move: right')
  } if (data === '\u0061') {
      // console.log("Left")
      conn.write('Move: left')
  } if (data === '\u0073') {
      // console.log("Down")
      conn.write ('Move: down')
    } if (data === '`') {
      conn.write ('Say: Eat more!') 
    } if (data === ' ') {
      conn.write ('Say: Get bigger!!!!')
  } 
}
const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on("data", handleUserInput)
  stdin.resume();
  return stdin;
}



module.exports = { setupInput }



//Paied with @JOadelic