const express = require('express');
const app = express();
const port = 3000;

app.get('/name/', (req, res) => {
  res.send('Hello, World!');
}); 

// app.get('/customers', (req, res) => {
//   res.send([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }, { id: 3, name: 'Jim Beam' }]);
// }); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});