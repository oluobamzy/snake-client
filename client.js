// let's establish a connection
const { Server } = require("http");
const net = require("net");
const {IP,PORT} = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
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