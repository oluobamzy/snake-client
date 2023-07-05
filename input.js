const {move_up_key,move_down,move_left,move_right} = require('./constants')
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
    else if(data === move_up_key){
      connection.write("Move: up"); 
    }else if (data === move_left){
      connection.write("Move: left");
    }
    else if (data === move_down){
      connection.write("Move: down");
    }else if (data === move_right){
      connection.write("Move: right");
    }else {
      connection.write("Say:🐱‍👤🐱‍👤🐱‍👤");
    }
   
  };
  stdin.on("data", handleUserInput);

  return stdin;

}
module.exports = {setupInput};