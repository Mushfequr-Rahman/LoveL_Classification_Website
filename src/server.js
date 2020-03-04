const express = require('express');
const app = express();

app.use(express.static('./static/public'));

app.listen(3000, () => console.log('LoveL app on 3000'));
