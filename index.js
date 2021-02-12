//Module set up
const { fetchBreedDescription } = require('./breedFetcher');

//CL input

const breedName = process.argv[2];

//Description fetcher

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

//CL test input: node index.js sib