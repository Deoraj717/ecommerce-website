import mongoose from "mmongoose";

const productSchema = new mongoose.schema(
    {
        product_id:{
            type:String
        },
        product_name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true,
            min:0,
        },
        description:{
            type:String,
            required:true
        },
        created_at:{
            type:Date,
            default:Date.now
        },
        product_images:{
            
        }
    }
)