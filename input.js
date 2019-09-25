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

module.exports = { handleUserInput, setupInput };