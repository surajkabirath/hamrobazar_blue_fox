import { FaRegThumbsUp } from "react-icons/fa6";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { BsGrid, BsThreeDotsVertical } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import { HiUpload } from "react-icons/hi";
import { CiBookmarkPlus } from "react-icons/ci";
import { PiColumnsBold } from "react-icons/pi";
import { useState } from "react";
import Category from "./Category";
const ads = [
  {
    id: 1,
    title: "Volkswagen Vento 1.6 Highline On Sale",
    description:
      "Vento is in brand new condition well maintained car full option car features: air bag, abs, sterling control, power sterling, alloy wheel...",
    contact: "9767355087",
    price: "1,300",
    condition: "Brand New",
    location: "टेलिजङ्क्शन चौक, Budhanilkantha-12, बूढानिलकण्ठ",
    time: "few seconds ago",
    user: "Suresh Rai",
    userAds: "4 Ads",
    imgSrc:
      "https://hamrobazaar.blr1.cdn.digitaloceanspaces.com/User/Posts/2024/07/04/16224c22-7035-4772-78de-2e56bbe5a36b.jpg?x-image-process=image/resize,m_lfit,h_320,w_320/format,webp", // replace with the correct image path
  },
  {
    id: 2,
    title: "Volkswagen Vento 1.6 Highline On Sale",
    description:
      "Vento is in brand new condition well maintained car full option car features: air bag, abs, sterling control, power sterling, alloy wheel...",
    price: "19,75,000",
    condition: "Like New",
    location: "सिनामंगल मार्ग, भीमसेन गोल्टा, सिनामंगल",
    time: "few seconds ago",
    user: "Sachin Upreti",
    userAds: "6 Ads",
    imgSrc:
      "https://hamrobazaar.blr1.cdn.digitaloceanspaces.com/User/Posts/2024/07/04/9753e8da-7202-e0be-d42c-a85c29bee740.jpg?x-image-process=image/resize,m_lfit,h_320,w_320/format,webp", // replace with the correct image path
  },
  {
    id: 3,
    title: "Land For Sale At Chapagaun",
    description:
      "ललितपुरको चापागाउँ बसपार्कबाट ३ किमि अगाडि ) उपयुक्त : १५ लाख प्रति आना ( केहि मिलाउना सकिने ) ३१०३६ (26,14.ft ) माटोबाटो (सिर्जनशिल) बाट...",
    price: "15,00,000",
    condition: "Not Working",
    location: "Chapagaun",
    time: "few seconds ago",
    imgSrc:
      "https://hamrobazaar.blr1.cdn.digitaloceanspaces.com/User/Posts/2024/07/04/1f56094f-551a-8dae-33d5-07bf08685aec.jpeg?x-image-process=image/resize,m_lfit,h_320,w_320/format,webp", // replace with the correct image path
  },
  {
    id: 3,
    title: "Land For Sale At Chapagaun",
    description:
      "ललितपुरको चापागाउँ बसपार्कबाट ३ किमि अगाडि ) उपयुक्त : १५ लाख प्रति आना ( केहि मिलाउना सकिने ) ३१०३६ (26,14.ft ) माटोबाटो (सिर्जनशिल) बाट...",
    price: "15,00,000",
    condition: "Not Working",
    location: "Chapagaun",
    time: "few seconds ago",
    imgSrc:
      "https://hamrobazaar.blr1.cdn.digitaloceanspaces.com/User/Posts/2024/07/04/16224c22-7035-4772-78de-2e56bbe5a36b.jpg?x-image-process=image/resize,m_lfit,h_320,w_320/format,webp", // replace with the correct image path
  },
  {
    id: 3,
    title: "Land For Sale At Chapagaun",
    description:
      "ललितपुरको चापागाउँ बसपार्कबाट ३ किमि अगाडि ) उपयुक्त : १५ लाख प्रति आना ( केहि मिलाउना सकिने ) ३१०३६ (26,14.ft ) माटोबाटो (सिर्जनशिल) बाट...",
    price: "15,00,000",
    condition: "Not Working",
    location: "Chapagaun",
    time: "few seconds ago",
    imgSrc:
      "https://hamrobazaar.blr1.cdn.digitaloceanspaces.com/User/Posts/2024/07/04/16224c22-7035-4772-78de-2e56bbe5a36b.jpg?x-image-process=image/resize,m_lfit,h_320,w_320/format,webp", // replace with the correct image path
  },
];

const UpLoad = () => {
  const [flexRow, setFlexRow] = useState(false);
  const handleFlex = () => {
    setFlexRow(!flexRow);
  };
  return (
    <div className="w-2/3 py-6 border-r border-gray-300 ">
      <div className="">
        <div className="flex justify-between mx-4 items-center border-b border-gray-600 pb-2">
          <div className="flex items-center">
            <span>
              <HiUpload className="mr-2" />
            </span>
            Latest Uploads
          </div>
          <div className="flex items-center">
            <span>
              <FaRegThumbsUp className="mr-2" />
            </span>
            Recommended
          </div>
          <div className="cursor-pointer" onClick={handleFlex}>{flexRow ? <PiColumnsBold /> : <BsGrid />}</div>
        </div>
      </div>

      {ads.map((ad) => (
        <div
          key={ad.id}
          className="flex p-4 mx-2 bg-white   my-2 border rounded-xl  hover:border   hover:border-blue-600  hover:bg-blue-50"
        >
          <img
            className="w-[140px] h-[135px] rounded-lg"
            src={ad.imgSrc}
            alt={ad.title}
          />
          <div className="ml-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold py-1">{ad.title}</h3>
              <BsThreeDotsVertical />
            </div>

            {ad.description && (
              <p className="text-sm text-gray-600">{ad.description}</p>
            )}
            <div className="flex items-center text-gray-500 py-1">
              <TbCurrencyRupeeNepalese className="mr-1 text-md text-black " />
              <span className="text-md text-black">.{ad.price}</span>
              <span>
                <RxDividerVertical className="ml-4" />
              </span>
              <span className=" text-xs text-black py-1">{ad.condition}</span>
            </div>
            <div className="text-gray-500 text-xs  flex justify-between items-center border-b border-gray-300 pb-2">
              <p>{ad.location}</p>
              <p className="flex items-center text-black">{ad.time}</p>
            </div>

            <div className="flex justify-between items-center text-black">
              <div className=" flex py-1  items-center text-xs">
                <p>{ad.user}</p>
                <p>
                  <RxDividerVertical className="ml-2" />
                </p>
                <p>{ad.userAds}</p>
              </div>
              <div>
                {" "}
                <CiBookmarkPlus className="text-xl text-bold " />
              </div>
            </div>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default UpLoad;
