const express = require ('express');
const app = express();

app.listen(3000, () => {console.log("worked");});
app.use(express.static('../aws'));

