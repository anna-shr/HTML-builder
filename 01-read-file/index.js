const fs = require('fs');
const path = require('path');

const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'), 'utf-8');
//readableStream.on('data', chunk => console.log(chunk.length));
let data = '';
stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log(data));
stream.on('error', error => console.log('Error', error.message));



/*console.log(fs.readFile(path.resolve(__dirname, 'text.txt'), 'utf-8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
}))*/