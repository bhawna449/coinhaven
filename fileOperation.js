const fs = require('fs');

const readFileName = function (fileName) {
    var rawdata = fs.readFileSync('student.json');
    var student = JSON.parse(rawdata);
}

module.exports={
    readFileName : readFileName,
}
