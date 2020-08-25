// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function (breed, cb) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (error) return cb(undefined);
    cb(data);
  });
};

module.exports = breedDetailsFromFile;
