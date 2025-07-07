import { useState, useEffect } from "react";
import { useParams } from "react-router"
import Searchdata from "./Searchdata";



export default function SearchFood(){
    
    const {id} = useParams();
    
    const [food,setFood] = useState("")
    const [RestData, setRestData] = useState([]);


    useEffect(()=>{
        

            async function fetchData() {
               
               const proxyServer = "https://cors-anywhere.herokuapp.com/"
               const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
               const response = await fetch(proxyServer+swiggyAPI);
               const data = await response.json();
               const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
               const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
               console.log(filterData);
               setRestData(filterData);
            }


           
            fetchData();
        },[])

        console.log(food);


       const searchset = RestData.filter(item =>
  item?.card?.card?.itemCards?.some(foodItem =>
    foodItem?.card?.info?.name.toLowerCase().includes(food.trim().toLowerCase())
  )
);


   
 const matchedItems = searchset?.map((items) => items?.card?.card?.itemCards).flat();

   console.log(searchset);




    return(
        <div>
        <div className="w-[80%] mx-auto mt-20">
            <input className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"  placeholder="Search here" onChange={(e)=>setFood(e.target.value)}></input>
        </div>

        <div className="w-full">
                    
                    <div>
  {

     matchedItems.map((item) => (
      <Searchdata key={item?.card?.info?.id} restData={item}></Searchdata>
    ))
  }
</div>
                    <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
                </div>

        </div>
    )
}