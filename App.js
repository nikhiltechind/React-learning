import React from "react"
import ReactDOM from "react-dom/client"


// const heading = React.createElement("h1",{id:"hii"},"hello world ");
const jsxHeading = (
<h1> className="head" 
    React learning series
</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);