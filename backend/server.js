import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound,errHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.get('/',(req,res)=>{
    res.send("API is Running");
});


app.use("/api/products",productRoutes);
app.use(notFound);
app.use(errHandler);

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})