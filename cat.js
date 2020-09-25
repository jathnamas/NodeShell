const fs = require('fs')


function cat(fileName){
    
    
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        console.log(data.toString());
      });

}


module.exports = cat







