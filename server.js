const express = require ('express');
const app = express();
const port = process.env.port || 80;
app.listen(port, () => {console.log("port 4000 active");});
//app.use(express.static('./public'));
app.get("/", (req, res)=>{
      res.send("Works");

}  );
