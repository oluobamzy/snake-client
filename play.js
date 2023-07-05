const {connect} = require('./client');
const {setupInput} = require('./input');


console.log("connectin...");
let conn = connect();

setupInput(conn);

