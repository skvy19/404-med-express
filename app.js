const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const rootDir = require('./util/path');

const app =  express();

const routerIndex = require('./routes/index');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(routerIndex);

/* Adding 404 error */
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
});

app.listen(3000)