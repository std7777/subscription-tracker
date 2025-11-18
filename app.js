//creating express server
import express from "express";

import {PORT} from './config/env.js';

const app = express();

//create route -
//first param: path of where the route will be reachable, / = homepage
//call back function: (information accessible) => {}
app.get('/',(req,res)=>{
    res.send("Welcome to Subscription tracker API");
});

app.listen(PORT,()=>{
    console.log(`Subscription tracker API is running on http://localhost:${PORT}`);
})

export default app;





