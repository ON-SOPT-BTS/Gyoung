const crypto = require('crypto');
const fs = require('fs');
const password = '970910';
const base64 = crypto.createHash('sha512').update(password).digest('base64');

console.log(base64);

const fileName = 'myPassword';
fs.writeFile(`${fileName}.txt`, base64, () => {
    console.log(`file ${fileName} write completed`);
})