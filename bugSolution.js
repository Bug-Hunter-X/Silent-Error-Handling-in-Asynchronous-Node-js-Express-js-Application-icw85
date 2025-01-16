const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('An error occurred:', err);
      // Send an error response to the client
      res.status(500).send('Internal Server Error');
    });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        reject(new Error('Network request failed!'));
      } else {
        resolve();
      }
    }, 1000);
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});