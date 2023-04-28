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
        images: "https://media.licdn.com/dms/image/C5603AQHEwsPuf9_Vmw/profile-displayphoto-shrink_100_100/0/1591374070370?e=1687996800&v=beta&t=alUjEcI6USTPVr4hjwZTQeVuFnNziPYNAaaCJ63ZCio",
        videos: "https://www.youtube.com/watch?v=n2d8yFXZx2o",
        pdfs: "https://cses.fi/book/book.pdf",
    };

    res.status(200).send(data);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
