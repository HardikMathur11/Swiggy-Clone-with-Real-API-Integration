export default function DineCard({RestData})
{
 return (
    <div className="max-w-sm flex-none rounded-4xl border border-gray-200 shadow-amber-100 bg-white hover:shadow-xl">
        <a target="_blank" href={RestData.cta.link}>
  <div className="relative">
    {/* Image */}
    <img
      className="w-92 h-52 object-cover rounded-4xl"
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/" +
        RestData?.info?.mediaFiles[0]?.url
      }
      alt=""
    />

    {/* Better bottom gradient overlay */}
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

    {/* Bottom-left name */}
    <p className="absolute bottom-2 left-2 font-bold text-xl text-white z-20 overflow-x-auto">
      {RestData.info.name}
    </p>

    {/* Bottom-right rating */}
    <p className="absolute bottom-2 right-2 font-bold text-xl text-white z-20">
      {RestData.info?.rating?.value}
    </p>

  </div>
  <div className="flex justify-between p-1">
  <div className="flex flex-nowrap ">
        <p className=" text-sm font-light">{RestData?.info?.cuisines[0]}</p>
        <li className=" text-sm font-light ml-2 ">{RestData?.info?.cuisines[1]}</li>
    </div>
    <div>
        <p className="text-sm font-light">{RestData?.info?.costForTwo}</p>
    </div>
    </div>
  <div className="flex justify-between pl-1 pr-1">
  <div className="flex flex-nowrap ">
        <p className=" overflow-x-hidden text-sm font-light">{RestData?.info?.locationInfo?.formattedAddress}</p>
   
    </div>
    <div>
        <p className="text-sm font-light">{RestData?.info?.locationInfo?.distanceString}</p>
    </div>
    </div>
    <div>
    <div className="flex flex-nowrap mt-2 bg-gray-200 rounded-xl max-w-[40%]  font-light items-center p-1 ml-1 ">
        <img className="w-4 h-4 "   src="https://media-assets.swiggy.com/swiggy/image/upload/dineout/rx-card/highlights/book.png" alt="" />
        <p className="text-sm font-light">Table Booking</p>
    </div>
    </div>

    <div className="bg-green-600 flex flex-nowrap justify-between rounded-lg items-center pl-2 pr-2 mt-2 h-10 m-2">
      <div className="flex flex-nowrap items-center gap-1">
      <img className="w-6 h-5" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png" alt="" />
      <h2 className="text-white font-bold text-xs">{RestData?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header 
    ? ` ${RestData.info.offerInfoV2.otherOffers.offers[0].header} on pre-booking` 
    : "No current pre-booking offers"}</h2>
      </div>
      <div> <p className="text-white font-bold text-xs">+4 More</p> </div>
    </div>

    <div className="bg-green-200 rounded-lg h-10 items-center flex flex-nowrap m-3 ml-2 mr-2 pl-2 pr-2">
        <p className="text-green-600  font-medium ">{RestData?.info?.vendorOffer?.infos[0]?.description}</p>
    </div>
  </a>
</div>
 )
}