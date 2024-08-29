

import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";



const Register = () => {
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[phone,setPhone]=useState("");
const[name,setName]=useState("");
const[role,setRole]=useState("");

const {isAuthorized,setIsAuthorized,user,setUser}=useContext(Context);
const handleRegister=async (e)=>{
  e.preventDefault();
  try{
const {data}=await axios.post(`https://backend-food-deploy.onrender.com/api/v1/user/register`
  ,
  {name,email,password,phone,role}
  ,{withCredentials:true,
  headers:{
"Content-Type":"application/json",
  },
});

toast.success(data.message);
setName("");
setEmail("");
setPhone("");
setRole("");
setPassword("");
setIsAuthorized(true);

  }
  catch(error){
    console.log(error);
    
toast.error(error.response.data.message)
  }
};

if(isAuthorized){
  return <Navigate to={"/"}/>;
}

  return (
    <>
      <div className="authPage">
<div className="container">
  <div className="header">
    <img src="https://th.bing.com/th/id/OIP.TpGXAo8FbjWo6vH7fkeK5QHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7" alt="logo"/>
    <h3>Create a new account</h3>
  </div>
  <form>
    <div className="inputTag">
      <label>
Register As 
      </label>
      <div>
        <select value={role} onChange={(e)=>setRole(e.target.value)}>
<option value="">Select Role</option>
<option value="Employer">Employer</option>
<option value="Job Seeker">Job Seeker</option>
        </select>
        <FaRegUser/>
      </div>
    </div>

    <div className="inputTag">
      <label>
Name 
      </label>
      <div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}
        placeholder="Komal"
        />
        <FaPencilAlt/>
      </div>
    </div>

    <div className="inputTag">
      <label>
Email Address
      </label>
      <div>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}
        placeholder="komalme7@gmail.com"
        />
 <MdOutlineMailOutline/>
      </div>
    </div>



    <div className="inputTag">
      <label>
Phone Number 
      </label>
      <div>
        <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)}
        placeholder="123456789"
        />
        <FaPhoneFlip/>
      </div>
    </div>

    <div className="inputTag">
      <label>
Password
      </label>
      <div>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}
        placeholder="password"
        />
        <RiLock2Fill/>
      </div>
    </div>



<button onClick={handleRegister} type="submit">Register</button>
<Link to={"/login"}>Login here</Link>
  </form>
</div>
<div className="banner"></div>
<img src="https://th.bing.com/th/id/OIP.qAGCi3cMcex8MzDwh2xkjQHaHa?w=180&h=181&c=7&r=0&o=5&pid=1.7" alt="login"/>
      </div>
    </>
  )
}

export default Register;


