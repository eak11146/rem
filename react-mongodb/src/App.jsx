import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './page/home';
import About from './page/about';
import NavBar from './component/Navbar';
import Login from './page/login';
import Signup from './page/signup';
 



function App() {

  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={
            <About />
          } />
          <Route path='/login' element={ <Login /> }/> 
         <Route path='/signup' element={ <Signup/> }/> 


        
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
