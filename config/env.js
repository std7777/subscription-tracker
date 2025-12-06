import { config } from 'dotenv';
//extract env variable from either the following files.(possible to switch between files)
config({path: `.env.${process.env.NODE_ENV || 'development'}.local` });

//the variables can be exported from the file
export const {
    PORT,NODE_ENV ,
    DB_URI,
    JWT_SECRET,JWT_EXPIRES_IN,
    ARCJET_ENV,ARCJET_KEY
}=process.env;