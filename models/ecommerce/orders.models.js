import mongoose from "mongoose"
const orderItemSchema=new mongoose.Schema({
    productID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"

    }
});
const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema]
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    }
});

export const Order=mongoose.model("Order",orderSchema)