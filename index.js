const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/upload', async (req, res) => {

    const data = {
        text: 'This is some text',
        images: "https://images.unsplash.com/photo-1682547095016-c9cfee414163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        videos: "https://www.youtube.com/watch?v=n2d8yFXZx2o",
        pdfs: "https://cses.fi/book/book.pdf",
    };

    res.status(200).send(data);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
