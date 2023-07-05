
let connection;
const setupInput = function (conn) {
 connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (data) {
    if (data === '\u0003') { // Check if Ctrl + C (End of text) is pressed
      process.exit(); // Exit the process
    }
    else if(data === "w"){
      connection.write("Move: up");
    }else if (data === "a"){
      connection.write("Move: left");
    }
    else if (data === "s"){
      connection.write("Move: down");
    }else if (data === "d"){
      connection.write("Move: right");
    }else if (data === "z"){
      connection.write("Say:🐱‍👤🐱‍👤🐱‍👤");
    }
   
  };
  stdin.on("data", handleUserInput);

  return stdin;

}
module.exports = {setupInput};