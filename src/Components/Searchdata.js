// ✅ Searchdata.js
export default function Searchdata({ restData }) {
  return (
    <>
      <div className="flex w-full justify-between mb-2 pb-2">
        <div className="w-[70%]">
          <p className="text-2xl font-semibold text-gray-700 mb-1">{restData?.name}</p>
          <p className="text-xl">₹{("defaultPrice" in restData ? restData.defaultPrice : restData.price) / 100}</p>
          <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
          <span>{" (" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}</span>
          <p>{restData?.description}</p>
        </div>
        <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[20%] relative mb-6">
          <img
            className="w-full h-60 sm:h-64 md:h-44 object-cover rounded-2xl"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restData.imageId}
            alt="Restaurant"
          />
          <button className="absolute bottom-2 left-1/2 -translate-x-1/2 px-6 py-2 rounded-xl text-green-600 text-base sm:text-lg font-semibold bg-white border border-white shadow-md">
            ADD
          </button>
        </div>
      </div>
      <hr className="mb-6 mt-2" />
    </>
  );
}
