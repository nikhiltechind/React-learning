import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [logInStatus,setLogInStatus] = useState("LOGIN");
  console.log("rerender");
  return (
  
      <div className="NavBar">
        <div className="navbtn">
        <p className="navv" > < Link to = "/"> Home</Link> </p>
        <p className="navv"> <Link to ="/about">about</Link> </p>
        <p className="navv"> <Link to="/contact">Contact us</Link> </p>
        <p className="navv">🛒</p>
        <button onClick={()=>{
          if(logInStatus==="LOGIN")
          setLogInStatus("LOGOUT")
        else 
        setLogInStatus("LOGIN");
        }}>{logInStatus}</button>
        
       </div>
       <div>
        <img src="https://marketplace.canva.com/EAFowsrK6x8/1/0/1600w/canva-red-and-yellow-catering-flat-illustrative-food-place-logo-rYbQJ_qtaz8.jpg" alt="logo" className="navlogo"></img>
       </div>
      </div>
  );
};
export default Header;