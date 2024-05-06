
import mongoose ,{ Schema } from "mongoose";
 

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true 
    },
    lastname: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true 
<<<<<<< HEAD
=======
    },
    image: {
        type: String,
        required: true 
>>>>>>> 409d359ff0ef8ab804fb5c85773ba9d153ba2608
    }
});

export default mongoose.model("webusers", UserSchema);

