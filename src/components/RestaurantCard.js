import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } = props?.resData?.info;
    const { deliveryTime } = props?.resData?.info?.sla;

    return (<div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
        <img className="res-logo" alt="res-logo" src={IMG_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h5>{cuisines.join(', ')}</h5>
        <h6>{avgRatingString} Star</h6>
        <h6> {costForTwo}</h6>
        <h5>{deliveryTime} minutes</h5>
    </div>)
}

export default RestaurantCard;