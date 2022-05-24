const fs = require('fs');
const path = require('path');



function callback(err) {
    if (err) throw err;
}

//создать папку - работает
fs.mkdir(path.join(__dirname, 'files-copy'), {
    recursive: true
}, (err) => {
    if (err) {
        return console.error(err);
    }
    //    console.log('Directory created successfully!');
});

//const address = path.join((path.resolve(__dirname)), '/files-copy');

function copy() {

    /*fs.rmdir(path.join(__dirname, 'files-copy'), {
    }, (err) => {
        if (err) {
            return console.error(err);
        }
    });*/

    fs.readdir(path.join(__dirname, 'files-copy'), (err, files) => {
        if (err) throw err;
      
        for (const file of files) {
          fs.unlink(path.join(path.join(__dirname, 'files-copy'), file), err => {
            if (err) throw err;
          });
        }
      });





    fs.readdir(path.join(path.resolve(__dirname), '/files'), (err, files) => {
        //        console.log(files);
        files.forEach(i => {
            //            console.log(i);
            //            console.log(__dirname + "/files/" + i);

            fs.copyFile(__dirname + "/files/" + i, __dirname + "/files-copy/" + i, (err) => {
                if (err) throw err;
                //                console.log(`${i} was copied to ${i}-copy`);
            });
        });
    })
}
copy();