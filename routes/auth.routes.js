import { Router} from 'express';

const authRouter = Router();

authRouter.post('/sign-up',(req, res) => res.send({title:'Signed up'}));
authRouter.post('/sign-in',(req, res) => res.send({title:'Signed in'}));
authRouter.post('/sign-out',(req, res) => res.send({title:'Signed out'}));

export default authRouter;