import { Link } from "react-router"
export default function RestCard({restinfo}) {

return (
      <Link to={"/city/delhi/"+restinfo?.info?.id}>
       <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95 ">
    <img className="w-70 h-46 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restinfo.info.cloudinaryImageId} alt="" />
    <div className="w-[95%] mx-auto mt-4"> 
     <div className="font-bold text-xl">{restinfo?.info?.name}</div>
     <div className="flex gap-2 items-center">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="green"
  viewBox="0 0 24 24"
  stroke="none"
  className="w-4 h-4 inline-block mr-1"
>
  <path
    fillRule="evenodd"
    d="M12 2c.3 0 .6.2.7.5l2.1 4.5 5 .7c.6.1.8.8.4 1.2l-3.6 3.5.9 5c.1.6-.5 1-.9.7L12 16l-4.6 2.4c-.4.2-1-.1-.9-.7l.9-5L3.8 9c-.4-.4-.2-1.1.4-1.2l5-.7L11.3 2.5c.1-.3.4-.5.7-.5z"
    clipRule="evenodd"
  />
</svg>
     <span className="text-lg">{restinfo?.info?.avgRating}</span>
     <span className="text-lg font-semibold">{restinfo?.info?.sla?.slaString}</span>
     </div>

      <div className="text-gray-600 text-xl mt-1 h-7 overflow-hidden">{restinfo?.info?.cuisines.join(" ")}</div>
    </div> 

    </div>
  </Link>

)

}