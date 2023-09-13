import { CDN_IMG_URL } from "../../constants";


const RestaurantCard = (props) => {
    const{resData} = props;
    const {cloudinaryImageId,name,costForTwo,avgRating,cuisines,areaName} = resData.info;
  
  
    return   (
      
          <div className="resCard">
           
          <img src={CDN_IMG_URL+cloudinaryImageId} className="prodImg"></img>
          <h3>{name} </h3>
          <p> {cuisines.join(", ")}</p>
          <p>{costForTwo}</p>
          <p>{avgRating}</p>
          <p> {areaName}</p>
         
          
          </div>
  
  
      );
  };
  export default RestaurantCard;