const express = require("express");
const app = express();

let port = 3000;
app.listen(port, ()=> {
    console.log(`app listening on port ${port} `);
})

app.use((re, res)=> {
    console.log("request received");
});


console.dir(app);