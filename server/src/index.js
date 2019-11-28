const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');
const C = require('./constants');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
router(app);

app.listen(C.PORT, () => console.log(`app is listening on port ${C.PORT}`));