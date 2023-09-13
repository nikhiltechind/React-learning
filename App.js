import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./src/components/Body";
import Header  from "./src/components/Header";
import {restrauntList} from "./constants";


const jsxHeading = (
<h3 className="head"> 
    React learning series
</h3>
);

const Component = () => (
   
    <div>
    <Header/>
<div className="bodyCard">

{restrauntList.map((restraunt)=>(
<Body key={restraunt.info.id} resData={restraunt}/>
    ))}


</div>
</div>

);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component/>);
