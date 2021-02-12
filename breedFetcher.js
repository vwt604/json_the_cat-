/*

- a command line app that allows users to query the cat data dataset from the terminal. 
- Users can provide any breed name, causing our application to fetch the information from the API and print out a short description of that breed

CL: node breedFetcher.js Siberian

*/

//Module set up

const request = require('request');

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



//CL input set up 
const breed = process.argv[2];
const localPath = process.argv[3];




//Page Request

const breedFetcher = function (breed) {

  request("https://api.thecatapi.com/v1/breeds/search/?q=" + breed, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log(typeof body);

  //Convert JSON to object
  const data = JSON.parse(body);
  console.log(data[0].description);
  // console.log(typeof data);

  // fs.writeFile(localPath, body, function (error) {
  //   console.log('File write complete!')
  //   error && console.log('File write error.')      //shorthand for if...error 
  // }) 
    
  });

}

breedFetcher(breed);


//CL input: > node fetcher.js http://www.example.edu/ ./index.html
