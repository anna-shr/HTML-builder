const fs = require('fs');
const path = require('path');


function getFiles() {
    fs.readdir(path.join(path.resolve(__dirname), '/secret-folder')), (err, files) => {
        files.forEach(file => {
            fs.stat(file, (err, stats) => {
                fs.stat(file, function (err, stats) {
                    if (stats.isFile()) {
                        console.log('name ' + file, "размер" + stats.size, "Расширение" + path.extname(file));
                    } else {
                        return false;
                    }
                })
            });
        });
    }
}
getFiles();