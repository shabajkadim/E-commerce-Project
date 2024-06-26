
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

    },
    image: {
        type: String,
        required: true 

    }
});

export default mongoose.model("webusers", UserSchema);

