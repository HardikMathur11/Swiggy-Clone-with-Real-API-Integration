 export default function FoodCard({FoodData}) {
    return(
        <>
        <a href={FoodData?.action?.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+FoodData?.imageId} alt="image" />
        </a>
        </>
    )
}