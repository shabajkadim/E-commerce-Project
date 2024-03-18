import express from 'express'
import { Login, Register } from './Controller/Auth.Controller.js'


const app=express()

app.get('/',((req,res)=>{
    res.send("welcome....")
}))

app.get('/register',(Register))

app.get('/login',(Login))





app.listen(8050,(()=>{console.log("running on port 8000")}))