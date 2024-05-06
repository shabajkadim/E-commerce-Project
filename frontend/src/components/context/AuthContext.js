// import axios from "axios";
// import { createContext, useEffect, useReducer } from "react";

// export const AuthContext=createContext()

// const Reducer=(state,action)=>{
// switch (action.type) {
//     case "LOGIN":
//         return{...state,user:action.payload}
//     case "LOGOUT":
//         return {...state,user:null}

//     default:
//        return state
// }
// }
// const InitailState={user:null}


// const AuthContextComponent = ({ children }) => {
//     const [state, dispatch] = useReducer(Reducer, InitailState);

//     function LOGIN(data) {
//         dispatch({ type: "LOGIN", payload: data });
//     }

//     function LOGOUT() {
//         dispatch({ type: "LOGOUT" });
//     }

//     async function getUserData(token) {
//         try {
//             const response = await axios.post("http://localhost:800/api/v1/auth/get-currrent-user",{token})
//             // const response = { data: { success: true, message: "login successful", userData: { name: "shabaaj", email: "shabaaj@1234" } } };
//             if (response.data.success) {
//                 // LOGIN(response.data.userData);
//                 dispatch({type:"LOGIN",payload:response.data.user})
//             }
//         } catch (error) {
//             console.log(error.response.data.message); //.response.data.message
//         }
//     }

//     useEffect(() => {
//         const token = JSON.parse(localStorage.getItem("token"));
//         if (token) {
//             getUserData(token);
//         }
//     }, []);

//     return (
//         <AuthContext.Provider value={{ state,dispatch }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
// export default AuthContextComponent;



<<<<<<< HEAD
=======


>>>>>>> 409d359ff0ef8ab804fb5c85773ba9d153ba2608
import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const AuthContext=createContext()

const Reducer=(state,action)=>{
switch (action.type) {
    case "LOGIN":
        return{...state,user:action.payload}
    case "LOGOUT":
        return {...state,user:null}

    default:
       return state
}
}
const InitailState={user:null}


const AuthContextComponent=({children})=>{
    const[state,dispatch]= useReducer(Reducer,InitailState)

    function LOGIN(data){
        dispatch({type:"LOGIN",payload:data})
    }

    function LOGOUT(){
        dispatch({type:"LOGOUT"})
    }

   async function getuserData(token){
        try{
<<<<<<< HEAD
            const response=await axios.post(`${process.env.REACT_APP_SERVER_DOMIN}/api/v1/auth/get-current-user`,{token})
=======
            const response=await axios.post("http://localhost:800/api/v1/auth/get-current-user",{token})
>>>>>>> 409d359ff0ef8ab804fb5c85773ba9d153ba2608
            // const response={data:{success:true , message:"login suucessfulr",user:{name:"shabaaj",email:"shabaaj@1234"}}}
            if(response.data.success){
                LOGIN(response.data.user)   
            }
        }catch(error){
            console.log(error);
           
        }
    }

    useEffect(()=>{
        const token=JSON.parse(localStorage.getItem("token"))
        if(token){
            getuserData(token)
        }
<<<<<<< HEAD
    },[])
=======
    },[getuserData()])
>>>>>>> 409d359ff0ef8ab804fb5c85773ba9d153ba2608
    
return(
    <AuthContext.Provider value={{state,LOGIN,LOGOUT,dispatch}}> 
        {children}
    </AuthContext.Provider>
)
}
export default AuthContextComponent








