const express=require("express");
const cors=require("cors");
const app=express();
const port=3000;

//the middlewaer for the cors & Json parsing
app.use(cors());
app.use(express.json());

//endpoint of the api
app.get("/api/greet",(req,res)=>{
  const name=req.query.name;

  if(!name){
    return res.status(400).json({
      error:"Name is required",
    });
  }
  return res.json({
    message:`Hello, ${name}! Welcome to Younglabs.`,
  });
});

//to start the server
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`);
});