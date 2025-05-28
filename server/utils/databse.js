import mongoose from 'mongoose'
const databseConnection = () =>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("mongodb connected successfully");
        
    }).catch((error)=>{
        console.log(error);
    })
    };
    export default databseConnection;
    


// Sangeeta2003