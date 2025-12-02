import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Password is required"],
        trim: true,
        minLength: 1,
        maxLength: 100,
    },
    price:{
        type: Number,
        requires:[true,"Subscription price is required"],
        min:[0,"Price must be greater then zero"],

    },
    // currency:{
    //     type:String,
    //
    // }
    frequency:{
        type:String,
        enum:['daily','weekly','monthly','yearly'],
    },
    category:{
        type:String,
        enum:['sports','entertainment','lifestyle','career'],
        required:true,
    },
    paymentMethod:{
        type:String,
        required:true,
        trim:true,
    },
    status:{
        type:String,
        enum:['active','expired','canceled'],
    },
    startDate:{
        type:Date,
        required:true,
        validate:{
            validator:(value) => value <= new Date(),
            message: 'Start date must be in the past',
        }
    },
    renewalDate:{
        type:Date,
        validate:{
            validator:function (value){
                return value>this.startDate;
            },
            message: 'Start date must be in the past',
        }
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
        index: true,
    }

}, {timestamps: true});

//auo-calculate renewal date if missing
subscriptionSchema.pre('save',function (next){
    if(!this.renewalDate){
        const renewalPeriods={
            daily:1,
            weekly:7,
            monthly:30,
            yearly:365,
        }
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate()+renewalPeriods[this.frequency]);

    }

    //auto-update status if renewal date has passed
    if(this.renewalDate<new Date()){
        this.status='expired';
    }

    next();
});

const Subscription  = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;