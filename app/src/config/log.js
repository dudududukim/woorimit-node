const fs = require("fs");
const appRoot = require("app-root-path");

const accessLongStream = fs.createWriteStream(
    `${appRoot}/log/app.log`, 
    { flags: 'a' }
);

module.exports = accessLongStream;