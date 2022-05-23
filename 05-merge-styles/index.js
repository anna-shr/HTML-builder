const fs = require('fs');
const path = require('path');

const styles = path.join(path.resolve(__dirname), '/styles');
console.log("! + " + styles);

fs.readdir(styles), (err, files) => {
    files.forEach(file => {
        let data = [];

        if (err) {
            return console.error(err);
        };

        //проверка на расширение css
        if (path.extname(file) !== 'css') {
            return
        }
        
        
        else {
            //записать в массив?
            const stream = fs.createReadStream(file, 'utf-8');
            stream.on('data', chunk => data += chunk);
            stream.on('end', () => console.log(data)); //Здесь запись массива стилей в файл bundle.css?
            stream.on('error', error => console.log('Error', error.message));
        }
    });
}


//Чтение файла стилей: +
//Запись прочитанных данных в массив
//Запись массива стилей в файл bundle.css