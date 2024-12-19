import React from 'react'
import { useState, useEffect   } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {

    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


    const register = async (e)=>{
            e.preventDefault();
            try{
              const response =  await axios.post('http://localhost:4040/api/register', {
                name: email, // this.name-> v-model ->name set for backend api
                password: password,
              });
                  console.log('Registration Success:', response.data);
                  this.$router.push('/login');
            }catch (error)  {
             
               
               //   this.error = error.response.data.message || 'Registration failed';
                  console.error('Registration failed:', error.response.data.error);
               }  
    }

  return (
    <>
     <div className='container  mx-auto  justify-center md:max-w-[95%] lg:max-w-[70%] p-3 '>
     <h2 className="py-3">Register</h2>
    <form onSubmit={register}  className='w-[300px]'>
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
