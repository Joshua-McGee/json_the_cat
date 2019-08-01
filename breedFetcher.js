const request = require('request');

let arr = process.argv.slice(2)
const breedName = arr[0];
//const filename = arr[1];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //console.log(response);

  if (error) {
    return console.log('this is not a breed', error);
  }

    const data = JSON.parse(body);
    let obj = data[0]; // first entry in the data
    //console.log(typeof data);
    if (obj) {
      console.log(obj.description);
    } else {
      console.log(`failed to find breed: ${breedName}`);
    }
});

// the description key needs to be accessed for a particular breed description

