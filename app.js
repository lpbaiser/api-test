const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors({ credentials: false }));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./src/routes/index')(app);
const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Listen on port: ${port}`)
