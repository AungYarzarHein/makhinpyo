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
    // console.log(data.data().data)
    res.render("index",{data:data.data().data , headerData:headerData.data()});
   

})


app.get("/posts/:postId",async(req,res) => {
    const postId = req.params.postId ;
    const data = await getDoc(doc(db,"dest",postId))
    res.render("post",{linkUrl:data.data().destlink});
})


app.get("/:postNam",async(req,res) => {
    res.render("prePost",{postNam:req.params.postNam})
})


// app.get("/post/:dayNumber/:postId",(req,res) => {
//     res.render("post",{dayNumber:req.params.dayNumber,postId:req.params.postId})
// })




app.listen(process.env.PORT);