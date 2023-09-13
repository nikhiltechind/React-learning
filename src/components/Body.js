import { useEffect, useState } from "react";
// import { restrauntList } from "../../constants";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const Body = () =>{

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList,setFilteredList] = useState([]);
useEffect(()=>{
fetchData();
fetchCricket();
},[])

const fetchCricket = async () => {
  const url = 'https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=cricket';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0b5d8b28bfmsh0c22c17006ba670p13cf1ejsnebe7de77359e',
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
  };

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}


const fetchData = async ()=>{
  const data = await fetch ("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);
  
  setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
  console.log(json);
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
<RestaurantCard key={restraunt?.info?.id} resData={restraunt}/>
    ))}


</div>)
}
export default Body;