import { restrauntList } from "../../constants";
import { CDN_IMG_URL } from "../../constants";

const BodyCard = (props) => {
  const{resData} = props;
  const {cloudinaryImageId,name,costForTwo,avgRating,cuisines,areaName}=resData.info;
 

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
const Body = () =>{
return(<div className="bodyCard">

{restrauntList.map((restraunt)=>(
<BodyCard key={restraunt.info.id} resData={restraunt}/>
    ))}


</div>)
}
export default Body;