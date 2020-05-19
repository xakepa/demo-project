const fs = require('fs');
const path = 'D:\\Test'

const result = fs.readdirSync(path);
result.forEach(file => {
    fs.unlinkSync(`${path}\\${file}`)
    console.log(`${file} was deleted...`);
});