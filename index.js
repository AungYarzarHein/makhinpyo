import express from "express";
import "dotenv/config";

import { db } from "./config.js";
import { Firestore, collection, doc, getDoc, getDocs } from "firebase/firestore";


const app = express();

app.use(express.static("public"));
app.set("view engine","ejs") ;
// app.set("views","views")


app.get("/",async (req,res) => {
    const headerData = await getDoc(doc(db,"post-header","post1"))
    const data = await getDoc(doc(db,"details","post1")) ;
   
    res.render("index",{data:data.data().data , headerData:headerData.data()});
    // res.render("index",{headerData:})

})


// app.get("/post/:dayNumber/:postId",(req,res) => {
//     res.render("post",{dayNumber:req.params.dayNumber,postId:req.params.postId})
// })




app.listen(process.env.PORT);