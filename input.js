const handleUserInput = function (data) {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
}
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  })
  stdin.resume();
  return stdin;
}

module.exports = { setupInput, handleUserInput }