import React from "react"
import ReactDOM from "react-dom/client"
import HeaderComponent from "./src/components/Header";


// const heading = React.createElement("h1",{id:"hii"},"hello world ");
const jsxHeading = (
<h1 className="head"> 
    React learning series
</h1>
);

const Component = () => (

<HeaderComponent/>


);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component/>);
