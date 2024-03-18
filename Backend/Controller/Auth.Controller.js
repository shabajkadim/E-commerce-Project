import UserScema from "../modals/User.Scema.js"

export const Register=async(req,res)=>{
    // return res.send("Register page")
    try{
    const {name , email , password, confirmPassword}=req.body
    if(!name || !email || !password || ! confirmPassword){
        res.send("all filds are require")

        const emailIsExist= await UserScema.find({email : email})
        if(emailIsExist.length){
            return res.send("email is exist")
        }
        if(password != confirmPassword){
            return res.send("check password and confirmPassword")
        }

        const web_users= await UserScema({
            name:name,
            email:email,
            password:password
        })
        await web_users.save()
        return res.status(200).json({success:true, message:"Register successful"})
    }
    }catch(error){
        return res.status(500).json({error})
    }
}


export const Login=(req,res)=>{
    return res.send("login page")
}