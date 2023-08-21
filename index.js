console.log('working')
// dependecies installed
 const express = require("express");
 const app = express();
 const dotenv = require('dotenv');
 const dotenvConfig= dotenv.config();
 const mongoose = require("mongoose");
const cors = require("cors");
// port 
const port =process.env.PORT||3000
//   IMPORTING MODELS PATH 
const clients = require('./models/contact');
// const router = require('./routes/usersRoute')


// connecting database
app.use(cors())
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(()=>{
    console.log('database connected')
}).catch((err)=>{
    console.log(err)
})
 app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const contactRoutes = require('./routes/usersRoute')

app.use('/api/timatech/apply', contactRoutes);



// route not found global error
app.use((req, res) => {
    const error = new Error('URL not found');
    error.status = 404;
    res.status(error.status).json({
        error: error.message,
    });
});






// creatin our port 

app.listen(port,()=>{
    console.log('server is running')
})