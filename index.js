const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser');

require('dotenv').config()
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/testEndpoint', async (req, res) => {
  const options = {
    method: 'post',
    json: true,
    headers: { "Authorization": `ApiKey 334b1994-9bc6-11ed-b7c0-86f3fdbd8727`,  },
    url: process.env.REQ_ENDPOINT ,
    data: req.body
  }
  try {
    const resp = await axios(options);
    res.send(resp.data)
  } catch (error) {
    console.log("🚀 ~ file: index.js:45 ~ router.post ~ error", error);
    res.send("error in test endpoint")
  }
})

app.listen(port, () => console.log(`app is listening on port ${port}.`));
