require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();

//middlewares
app.use(cors())
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the wonderful Eloni!!😀😀</h1>')
});

process.on('unhandledRejection', error => {
    console.error('Uncaught Error', error);
    return;
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Listening on Port: ' + PORT));