const express = require('express');
const PORT = 3000;
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
    res.send('Received a POST request');
})

app.put('/user', (req, res) => {
    res.send('Received a PUT request from /user');
})

app.delete('/user', (req, res) => {
    res.send('Received a DELETE request from /user');
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});