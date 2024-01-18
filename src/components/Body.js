import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";


const Body = () => {
    const [listData, setListData] = useState([])
    const [filterList, setFilterList] = useState([])
    const [searchText, setSearchText] = useState('')
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4775758&lng=77.0820378&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json = await data.json();
            const restaurantsList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

            setListData(restaurantsList)
            setFilterList(restaurantsList)
        } catch (err) {
            console.log(err);
        }

    }


    if (!onlineStatus) {
        return <h1>Ohh! Looks like you're offline! Please check internet connection.</h1>
    }
    return (<>
        {listData.length === 0 ? <Shimmer /> :
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                        <button onClick={() => {
                            const resName = listData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilterList(resName)
                        }
                        }>Seach</button>
                    </div>

                    <button className="filter-btn"
                        onClick={() => {
                            const avgData = listData.filter((res) => res?.info?.avgRating > 4);
                            setListData(avgData)
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>

                <div className="res-container">

                    {filterList.map((resturant) =>
                        <Link key={resturant?.info?.id} to={"/restaurants/" + resturant?.info?.id}>
                            <RestaurantCard resData={resturant} />
                        </Link>
                    )}
                </div>
            </div>}
    </>)
}

export default Body;