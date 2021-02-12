/*
A command line app that allows users to query the cat data dataset from the terminal.
Users can provide any breed name, causing our application to fetch the information from the API and print out a short description of that breed
*/

//Module set up

const request = require('request');

// const fs = require('fs');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


//Page Request

const fetchBreedDescription = function(breed, callback) {

  request("https://api.thecatapi.com/v1/breeds/search/?q=" + breed, function(error, response, body) {

    if (error) {
      console.log('bad request');
      callback(error, null);
      
    }

    let data = JSON.parse(body);
    if (data.length < 1) {
      callback(null, "Breed not found :(");
      
    } else {
      callback(null, data[0].description);
    }

  });

};

module.exports = { fetchBreedDescription };

