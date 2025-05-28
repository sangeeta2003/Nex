import express from 'express';
import dotenv from 'dotenv';
import databseConnection from './utils/databse.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoutes.js'



dotenv.config({
    path:'.env'
});
databseConnection();


const app = express();

// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

// api


app.use("/api/v1/user",userRoute);


app.listen(process.env.PORT , ()=>{
    console.log(`server running at port ${process.env.PORT}`);

})