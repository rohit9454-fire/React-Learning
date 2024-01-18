import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer'
import { IMG_URL } from '../utils/constants';
import { useRestaurantMenu } from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const { resId } = useParams()
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />
    }

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    return (<>
        {(resInfo !== null) && <div className='menu'>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item) =>
                    <div key={item?.card?.info?.id} className='menuItem'>
                        <li className='memuDetails'>{item.card?.info?.name}   - Rs.{Math.round(item.card?.info?.price / 100)}</li>
                        <img className='menuItemImg' src={IMG_URL + item?.card?.info?.imageId} />
                    </div>

                )}
            </ul>
        </div>}
    </>
    )
}

export default RestaurantMenu