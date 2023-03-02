const express=require('express');
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const mongoose=require('mongoose');
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const productRoute=require("./routes/product");
const cartRoute=require("./routes/cart");
const orderRoute=require("./routes/order");
const stripeRoute=require("./routes/stripe");
const cors=require("cors");




mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB connection successful");
})
.catch((err)=>{
    console.log(err);
})

app.use(cors()); 
app.use(express.json());
app.use("/api/auth",authRoute); 
app.use("/api/users",userRoute); //rest api rule to use plural form
app.use("/api/products",productRoute); //rest api rule to use plural form
app.use("/api/carts",cartRoute); //rest api rule to use plural form
app.use("/api/orders",orderRoute); //rest api rule to use plural form
app.use("/api/checkout",stripeRoute); //rest api rule to use plural form

//server production asset
if(process.env.NODE_ENV==='production'){
    app.use(express.static("design/build"));
}

const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("backend server is running ");
})