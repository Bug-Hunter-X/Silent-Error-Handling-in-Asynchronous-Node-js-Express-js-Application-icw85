const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling that swallows the error! 
    console.error('An error occurred:', err);
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a network request that can fail
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