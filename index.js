"use strict";
const express = require('express');
const app = express();
app.use(express.static('./web'))
app.listen(process.env.PORT || 80, (a) => console.log('Server  started at:', a));
