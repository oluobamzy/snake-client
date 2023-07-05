// let's establish a connection
const { Server } = require("http");
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host:"165.227.47.243",
    port: "50541"
  });
  conn.on("connect",()=>{
    console.log("successfully connected to the game server");
    conn.write("Name:OLU");
    })
  //Interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data',(data)=>{
    console.log(` ${data}`);

  })
  return conn;

};
module.exports = { connect };