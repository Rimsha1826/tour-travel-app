import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App()
{
  return(
    <>
   <Navbar/>
    <Routes>
      <Route path ="/" element ={<Home/>} />
       <Route path= "/about" element = {<About/>}/>
        <Route path = "/service" element = {<Service/>}/>
         <Route path = "/contact" element = {<Contact/>}/>
         <Route path="/signup" element={<Signup />} />
         <Route path="*" element={<NotFound />} />
         <Route path="/login" element={<Login />} />

    </Routes>
     <Footer />
    </>
  );
}
export default App;