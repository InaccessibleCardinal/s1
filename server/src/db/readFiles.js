const fs = require('fs');
const path = require('path');

module.exports = function(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, fileName), 'UTF-8', (err, data) => {
            if (err) reject(err);
            resolve(JSON.parse(data));
        });
    });
};