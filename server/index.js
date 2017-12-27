const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())

const books_controller = require('./controllers/books_controller');
const baseURL = `/api/books`

app.use(express.static( __dirname + '/../public/build'));
app.post(baseURL, books_controller.create);
app.get(baseURL, books_controller.read);
app.put(`${baseURL}/:id`, books_controller.update);
app.delete(`${baseURL}/:id`, books_controller.delete);

const port = 3000;
app.listen(3000, () => console.log(`The magic is happening on the port ${port}`));