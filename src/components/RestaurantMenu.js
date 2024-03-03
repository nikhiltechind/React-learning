import { useEffect, useState } from "react";
import { RestaurantMenuURL } from "../../constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{
     const [resInfo, setresInfo]= useState(null);
      const {resId} = useParams()
     useEffect(()=>{
       fetchMenu();
     },[])

     const fetchMenu =async ()=>{
          const response = await fetch(RestaurantMenuURL+resId);
          const json = await response.json();

      // Set restaurant data
      const data = await json?.data;
       console.log(data)
     setresInfo(data)
         
     }
     if(resInfo===null) return <Shimmer/>
    const {name,costForTwoMessage,cuisines} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    return (
        <div>
           
            <h1> {name}</h1>
            <p>{cuisines?.join(",")}</p>
            <h3>{costForTwoMessage}</h3>
            <ul> 
                {itemCards.map((item)=>
                <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"  Rs "} {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>)} 
                
                </ul>
        </div>
    )
}
export default RestaurantMenu;