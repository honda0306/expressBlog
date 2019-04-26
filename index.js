require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');

const app = express();

const port = 3000;

app.use(session({
    secret: process.env.RANDOM_SECRET_WORD,
    resave: true,
    saveUninitialized: false
}));

app.listen(port, () => console.log(`Server running on port ${port}`));