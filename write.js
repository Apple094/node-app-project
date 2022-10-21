const fs = require('fs');

const write = function(data="default"){
    fs.writeFileSync('notes.txt, data');

}

module.exports= write;