const fs = require('fs');
const path = require('path');

/*fs.writeFile(
  path.resolve(__dirname, 'text.txt'),
  '',
  'utf8',
  (err) => {
    if (err) throw err;
    console.log('Начните писать текст');
  }
);*/

let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Начните писать -> ',
});
rl.prompt();
rl.on('line', (input) => {
  if (input === 'exit') {
    rl.close();
  } else {
  fs.appendFile(path.resolve(__dirname, 'text.txt'), input + "\n", function (err) {
    if (err) {
      return console.log(err);
    }
  
  });
}
  /*rl.close();*/
});

/*rl.on('exit', () => {
  rl.close();
});*/

rl.on('SIGINT', () => {
  rl.close();
});

rl.on('close', () => {
  console.log("Закрываем консоль");
});