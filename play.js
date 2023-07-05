const { Server } = require("http");
const net = require("net");

// let's establish a connection
const connect = function () {
  const conn = net.createConnection({
    host:"localhost",
    port: "50541"
  });

  //Interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data',(data)=>{
    console.log(` ${data}`);
  })
  return conn;

};
console.log("connectin...");

connect();