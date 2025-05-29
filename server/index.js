import express from 'express';
import dotenv from 'dotenv';
import databseConnection from './utils/databse.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoutes.js';
import cors from 'cors';



dotenv.config({
    path:'.env'
});
databseConnection();


const app = express();

// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOPtion ={
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOPtion));

// api


app.use("/api/v1/user",userRoute);


app.listen(process.env.PORT , ()=>{
    console.log(`server running at port ${process.env.PORT}`);

})