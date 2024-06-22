import mongoose form "mongoose"

const userSchema = new mongoose.Schema(
    {
        username:{
            type : String,
            required : true,
            unique : true,
            validate:{
                validator:function(username){
                    const usernameRegex = /^[A-Za-z]+$/;
                    return usernameRegex.test(username);
                },
                message:props=>`${props.value} is not a valid username`
            }
        },
        password:{
            type : String,
            required : true
        },
        email:{
            type:String,
            validate:{
                validator:function(email){
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(email);
                },
                message:props=>`${props.value} is not a valid email address!!`
            }
        },
        phone:{
            type:String,
            required:true,
            unique:true,
            validate:{
                validator:function(phone_number){
                    return /^[1-9]\d{9}$/.test(phone_number);
                },
                message : props =>  `${props.value} is not a valid phone number!!`
            }
        },
        created_at:{
            type:Date,
            default:Date.now
        }
    }
)
