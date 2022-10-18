const express = require('express');
const path = require('path');
const ogs = require('open-graph-scraper');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const openResult = [];
    const urlPromise = req.body.urls.map(
      (url) =>
        new Promise((resolve, reject) => {
          const options = { url };
          ogs(options, (error, results, response) => {
            console.log('results:', results);
            openResult.push(results);
            resolve(results);
          });
        })
    );
    await Promise.all(urlPromise).then(() => console.log(openResult));
    res.status(200).json(openResult);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
