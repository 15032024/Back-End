const express = require('express')
const app = express()
const port = 5056
const mongoose = require("mongoose")
const DB_URL=process.env.DB_URL
const PORT=process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})



mongoose.connect(DB_URL).then(()=>{
    console.log("Connected");
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}, base URL http://localhost:${PORT}`)
    })

}).catch((err)=>{
    console.log(err);
})