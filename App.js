import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./src/components/Body";
import Header  from "./src/components/Header";



// const jsxHeading = (
// <h3 className="head"> 
//     React learning series
// </h3>
// );

const Component = () => (
   
    <div>
    <Header/>
    <Body/>
</div>

);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component/>);
