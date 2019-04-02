'use strict';

const express = require('express');

let k=0;
setInterval(()=>{
console.log("zybo count="+k++);
},500);


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send("Hello  zybo k=" +k + "\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);