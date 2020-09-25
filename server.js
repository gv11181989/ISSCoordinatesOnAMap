const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.listen(port, () => {console.log("port 3000 active");});
app.use(express.static('./public'));

