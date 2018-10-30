const fs = require('fs')

fs.stat(path, function(err, stats) {
   
 
    if (stats.isFile()) {
        console.log('    file');
    }
    if (stats.isDirectory()) {
        console.log('    directory');
    }


 
});
 