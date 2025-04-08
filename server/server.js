require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/mongodb.js');
const connectCloudinary = require('./config/cloudinary.js');
const userRouter = require('./routes/userRoute.js');
const productRouter = require('./routes/productRoute.js');


const app = express();
const port = process.env.PORT || 4500 ;
connectDB();
connectCloudinary();

//middlewares

app.use(express.json());
app.use(cors());

//API endpoints
app.use('/api/user',userRouter);
app.use('/api/product', productRouter);

app.get('/' , (req , res) => {
    res.send('API working');
})


app.listen(port, () => {
    console.log(`server is running on ${port}`);
    
})