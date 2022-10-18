const ogs = require('open-graph-scraper');

const options = { url: 'http://ogp.me/' };

ogs(options, (error, results, response) => {
  console.log('results:', results); // This contains all of the Open Graph results
  //   console.log('response:', response); // This contains the HTML of page
});
