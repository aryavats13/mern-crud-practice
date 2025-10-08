const express=require('express')
const app=express()


app.listen(3000,()=>{ //starts the server on port 3000.
    console.log("hello");
})

app.get('/',(req,res)=>{  //what to do when someone visits the homepage (/).
    res.send("hello from node api")
});