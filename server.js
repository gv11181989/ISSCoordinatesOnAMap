const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log("port 3000 active");});
app.use(express.static('./public'));
/* app.get("/", (req, res)=>{
      res.send("Works");

}  );
*/