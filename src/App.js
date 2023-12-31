import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import Header from "./components/header";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

// const jsxHeading = (
// <h3 className="head"> 
//     React learning series
// </h3>
// );


const Component = () => (
   
    <div>
    <Header/>
     <Outlet/>
</div>

);
const appRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Component/>,
            children:[
                {
                 path: "/",
                 element: <Body/>
                },

                {
                    path: "/about",
                    element: <About/>,
                },
                {
                    path: "/contact",
                    element: <Contact/>
                }
            ],
            errorElement: <Error/>,
        },
       
        
    ]);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>);
