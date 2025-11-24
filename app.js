//creating express server
import express from "express";

import {PORT} from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);


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





