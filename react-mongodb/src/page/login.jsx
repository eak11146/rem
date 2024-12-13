import React from 'react'
import { useState, useEffect   } from 'react'
import { useNavigate } from "react-router-dom";
  
  
const Login = ()  => {
 

    const [error, setError] = useState('');
    const [semail, setEmail] = useState("");
    const [spassword, setPassword] = useState("");

    const navigate = useNavigate() 
 
      // ฟังก์ชันตรวจสอบอีเมล
    const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
    };


   // console.log(auth.apiKey);

   const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value); 
    if(!value){
        setError('Invalid email is null.');

    }else if (!isEmailValid(value) ) {
      setError('Invalid email format.');
    } else {
      setError('');
    }
  };


   const handleInputChange = (e) => {
    const value = e.target.value;
     
     console.log(value);
     setPassword(value); 
    // Validate if the input is not empty
     if (!value) {
        setError( "Password cannot be null or empty.");
      } else if (value.length <= 6) {
        setError("Password must be at least 6 characters long.");
      }
  };


      
    const  handleLogin = async (e) => {

        e.preventDefault();  
         console.log("submit event");
          console.log(semail);

        
        console.log(error)
         if (semail !='' && spassword !='' ) { 
          // Signed in 
          const response = await api.post('api/login', {
            name: this.username,
            password: this.password,
          });
  
          // Store the token and payload
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.payload));
  
          // Redirect to another page after successful login
          this.$router.push('/profile');
            
        }  else{
            
           setError('Error Please Fill data to Your Input')
        }
           
    };
 

    return (
        <>

            <div className='container  mx-auto  justify-center md:max-w-[95%] lg:max-w-[70%] p-3 '>
                <h1 className='text-2xl font-bold my-5'>login page</h1>


                <form onSubmit={handleLogin} className='w-[300px]'>
                    <div className='mb-3'>
                        <label className='my-3'>username</label>
                        <input type="email"
                         placeholder='Your Email'
                         id="email"
                         value={semail}
                            className=' w-full my-5 h-10 px-2 rounded-[7px] border border-gray-400 bg-transparent font-sans text-sm font-normal '
                            onChange={handleEmailChange}
                          /*   onChange={e => setEmail(e.target.value)} */
                        />
                    </div>
                    <div className=''>
                        <label className='my-3'>Password</label>
                        <input type="password"
                        value={spassword}
                         placeholder='Your Password'
                         className=' w-full my-5 h-10 px-2 rounded-[7px] border border-gray-400 bg-transparent font-sans text-sm font-normal'
                         onChange={handleInputChange}
                        />
                    </div>
                    
                    {error && <p style={{ color: "red" }} >{error}</p>}

                    <button type='submit' className='btn'>Login</button>
                </form>


            </div>


        </>
    )
}

export default Login
