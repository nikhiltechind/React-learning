import { useEffect, useState } from "react";
// import { restrauntList } from "../../constants";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () =>{


  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList,setFilteredList] = useState([]);
useEffect(()=>{
  
fetchData();
},[]);



const fetchData = async ()=>{
  const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4586853&lng=78.38848879999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
  setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
  console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}
return listOfRestaurants?.length===0 ? <Shimmer/> :
(<div className="bodyCard">
  <div>
   <button style={{display:"block"}} onClick={()=>{
    
    const filteredData=listOfRestaurants.filter((res)=> res.info.avgRating >= 4 );
    
    setFilteredList(filteredData);
   }}>greater than equals 4</button>


<button style={{display:"block"}} onClick={()=>{
    
    const filteredData=listOfRestaurants.filter((res)=> res.info.avgRating < 4 );
    
    setFilteredList(filteredData);
   }}>less than 4</button>

<button style={{display:"block"}} onClick={()=>{
    
    const filteredData=listOfRestaurants.filter((res)=> res.info.avgRating == 4 );
    
    setFilteredList(filteredData);
   }}>equal to 4</button>

<button style={{display:"block"}} onClick={()=>{
    
    const filteredData=listOfRestaurants.filter((res)=> res.info.avgRating >= 4.5 );
    
    setFilteredList(filteredData);
   }}>greater than equal 4.5</button>

   </div>
{filteredList?.map((restraunt)=>(

  <Link key={restraunt?.info?.id} to ={"/restaurants/"+restraunt?.info?.id}>
<RestaurantCard  resData={restraunt}/>
</Link>
    ))}


</div>)
}
export default Body;