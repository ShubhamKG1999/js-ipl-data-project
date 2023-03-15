const fs = require("fs");

function writeToJSON(outputFilePath, result) {
    fs.writeFileSync(outputFilePath, JSON.stringify((result), null, 2), (err) => { if (err) console.log(err) });
}

module.exports = writeToJSON;