//creating express server
import express from "express";

const app = express();

//create route -
//first param: path of where the route will be reachable, / = homepage
//call back function: (information accessible) => {}
app.get('/',(req,res)=>{
    res.send("Welcome to Subscription tracker API");
});

app.listen(3000,()=>{
    console.log("Subscription tracker API is running on http://localhost:3000");
})

export default app;





