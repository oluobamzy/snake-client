const {connect} = require('./client');
console.log("connectin...");
const setupInput = function () {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (data) {
    if (data === '\u0003') { // Check if Ctrl + C (End of text) is pressed
      process.exit(); // Exit the process
    }
    else if(data === ){

    }
  };
  stdin.on("data", handleUserInput);

  return stdin;

}
setupInput();
connect()
