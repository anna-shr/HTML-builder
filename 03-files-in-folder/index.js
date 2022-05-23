const fs = require('fs');
const path = require('path');




function copy() {
    fs.readdir(path.join(path.resolve(__dirname), '/secret-folder'), (err, files) => {
        //        console.log(files);
        files.forEach(file => {
      //      console.log(file);

            fs.stat(path.join(path.resolve(__dirname), '/secret-folder', file), (err, stats) => {
                if (err) {
                    throw err;
                }
               
                    if (stats.isFile()) {
                        console.log(path.parse(file).name, '-', path.extname(file), '-', stats.size, 'kb');
                    } else {
                        return false;
                    }
                
            });
        });
    })
}
copy();