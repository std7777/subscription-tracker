//global error handling middleware

const errorMiddleware = (err,req,res,next) => {
    try{
        let error = {... err}
        error.message = err.message;
        console.error(err);

        //mongoose bad objectID
        if(err.name === 'CastError'){
            const message = 'resourse not found';
            error = new Error(message);
            error.statusCode =404;
        }

        //mongoose duplicate key
        if(err.code === 11000){
            const message = 'duplicate field value entered';
            error = new Error(message);
            error.statusCode = 400;
        }

        //mongoose validation error
        if (err.name==='validationError'){
            const message = Object.values(err.errors).map(val=>val.message);
            error = new Error(message.join(', '));
            error.statusCode = 400;
        }

        res.status(error.statusCode || 500 ).json({success:false,error:error.message||'Server error'});
        //500 - general server err
    }catch(err){
        next(err)
    }
}

export default errorMiddleware;
//create a subscription -> middleware (check for renewal date) -> middleware (check for error) -> next -> controller (handles the logic for creating subscription)