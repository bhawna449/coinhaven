const fs = require('fs');
const { saveUser } = require('./databases.js');
var database = require('./databases.js');


//Reading input
console.log("Start Reading file");
let rawdata = fs.readFileSync('resources/login.json');
let loginDetails = JSON.parse(rawdata);
console.log("Completed Reading file");

database.ready;
database.connect;


var key = "user".concat(":").concat(loginDetails.username);
saveUser(key, loginDetails.name, loginDetails.username, loginDetails.password);