const request = require('request');

let arr = process.argv.slice(2);
const breedName = arr[0];
//const filename = arr[1];



const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return console.log('this is not a breed', error);
    }

    const data = JSON.parse(body);
    let obj = data[0]; // first entry in the data
    //console.log(typeof data);
    callback(undefined, obj.description);

  });
};

module.exports = {
  fetchBreedDescription
};
