const port = process.env.PORT || 3000;
const express = require('express');
const http = require('http');
const app = express();

var glat = '';
var glon = '';

var server = app.listen(port, () => {

    console.log("port 3000 active");

});

app.use(express.static('./public'));

/* ISS coordinates fetch*/
setInterval(() => {
    http.get('http://api.open-notify.org/iss-now.json', res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
          body += data;
        });
        res.on("end", () => {
          body = JSON.parse(body);
          glat = body.iss_position.latitude;
          glon = body.iss_position.longitude;
        });
 
});
}, 4000);
/* ISS coordinates fetch end */


const socket = require('socket.io');
const io = socket(server);


io.sockets.on('connection',(socket)=>{

    setInterval(() => {
    var coordinates = {
        'lat': glat,
        'lon' : glon
    }
console.log(socket.id);

console.log(coordinates);
socket.broadcast.emit('coordinates' , coordinates);
    },4000);
} );

