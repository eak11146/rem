import React from 'react'
import { useState, useEffect   } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = () => {

    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


    const register = async (e)=>{
            e.preventDefault();
            try {
                const userData = await signup( email, password);
                console.log("User data:", userData);
                alert("Signup successful!");
              } catch (error) {
                console.error("Signup error:", error);
              }
    }

  return (
    <>
     <div className='container  mx-auto  justify-center md:max-w-[95%] lg:max-w-[70%] p-3 '>
     <h2 class="py-3">Register</h2>
    <form onSubmit={register}>
      <input 
       type="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      className=' w-full my-5 h-10 px-2 rounded-[7px] border border-gray-400 bg-transparent font-sans text-sm font-normal '
       required />
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
       placeholder="Password" 
      className=' w-full my-5 h-10 px-2 rounded-[7px] border border-gray-400 bg-transparent font-sans text-sm font-normal '
        required />
      <button type="submit" className="btn btn-success">Register</button>
    </form>

    </div> 
    </>
  )
}

export default Signup
