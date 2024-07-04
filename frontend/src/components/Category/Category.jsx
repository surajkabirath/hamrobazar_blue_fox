import { AiOutlineFolderOpen, AiOutlineSave } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiBookmarkPlus } from "react-icons/ci";
import { FiStar } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UpLoad from "./Upload";

const categories = [
  { name: "HB Select", count: 19, icon: <FiStar /> },
  { name: "Apparels & Accessories", count: 12998, icon: "👗" },
  { name: "Automobiles", count: 13728, icon: "🚗" },
  { name: "Beauty & Health", count: 13348, icon: "💄" },
  { name: "Books & Learning", count: 2156, icon: "📚" },
  { name: "Business & Industrial", count: 11507, icon: "🏢" },
  { name: "Computers & Peripherals", count: 47621, icon: "💻" },
  { name: "Electronics, TVs, & More", count: 31056, icon: "📺" },
  { name: "Events & Happenings", count: 388, icon: "🎉" },
  { name: "HB Select", count: 19, icon: <FiStar /> },
  { name: "Apparels & Accessories", count: 12998, icon: "👗" },
  { name: "Automobiles", count: 13728, icon: "🚗" },
  { name: "Beauty & Health", count: 13348, icon: "💄" },
  { name: "Books & Learning", count: 2156, icon: "📚" },
  { name: "Business & Industrial", count: 11507, icon: "🏢" },
  { name: "Computers & Peripherals", count: 47621, icon: "💻" },
  { name: "Electronics, TVs, & More", count: 31056, icon: "📺" },
  { name: "Events & Happenings", count: 388, icon: "🎉" },
  { name: "HB Select", count: 19, icon: <FiStar /> },
  { name: "Apparels & Accessories", count: 12998, icon: "👗" },
  { name: "Automobiles", count: 13728, icon: "🚗" },
  { name: "Beauty & Health", count: 13348, icon: "💄" },
  { name: "Books & Learning", count: 2156, icon: "📚" },
  { name: "Business & Industrial", count: 11507, icon: "🏢" },
  { name: "Computers & Peripherals", count: 47621, icon: "💻" },
  { name: "Electronics, TVs, & More", count: 31056, icon: "📺" },
  { name: "Events & Happenings", count: 388, icon: "🎉" },
  { name: "HB Select", count: 19, icon: <FiStar /> },
  { name: "Apparels & Accessories", count: 12998, icon: "👗" },
  { name: "Automobiles", count: 13728, icon: "🚗" },
  { name: "Beauty & Health", count: 13348, icon: "💄" },
  { name: "Books & Learning", count: 2156, icon: "📚" },
  { name: "Business & Industrial", count: 11507, icon: "🏢" },
  { name: "Computers & Peripherals", count: 47621, icon: "💻" },
  { name: "Electronics, TVs, & More", count: 31056, icon: "📺" },
  { name: "Events & Happenings", count: 388, icon: "🎉" },
];

const categoriesItem = [
  "Electronics, TVs & More",
  "Mobile & Accessories",
  "Mobile Phones & Accessories",
  "Apparels & Accessories",
  "Beauty & Health",
  "Books & Learning",
  "Business & Industrial",
  "Computers & Peripherals",
  "Events & Happenings",
];

const trendingItems = [
  {
    name: "Bakery Outlet Space in...",
    price: "₹ 25,000",
    condition: "Brand New",
    imageUrl:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/120347/yamaha-ray-right-side-view2.jpeg?isig=0&q=80",
  },
  {
    name: "Property on sale Godawari...",
    price: "₹ 3,90,00,000",
    condition: "Brand New",
    imageUrl:
      "https://hamrobazaar.blr1.cdn.digitaloceanspaces.com/User/Posts/2024/06/17/92b7cb90-6d9c-907f-2a01-cda3a8b4ad9c.webp?x-image-process=image/resize,m_lfit,h_320,w_320/format,webp",
  },
  {
    name: "Ghar Bhada Ma...",
    price: "₹ 2,80,000",
    condition: "Brand New",
    imageUrl:
      "https://hamrobazaar.blr1.cdn.digitaloceanspaces.com/User/Posts/2024/06/26/b70c5673-55e4-fbb7-c171-0983b8da28f2.jpg?x-image-process=image/resize,m_lfit,h_320,w_320/format,webp",
  },
  {
    name: "Bakery Outlet Space in...",
    price: "₹ 25,000",
    condition: "Brand New",
    imageUrl:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/120347/yamaha-ray-right-side-view2.jpeg?isig=0&q=80",
  },
  {
    name: "Property on sale Godawari...",
    price: "₹ 3,90,00,000",
    condition: "Brand New",
    imageUrl:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/120347/yamaha-ray-right-side-view2.jpeg?isig=0&q=80",
  },
  {
    name: "Ghar Bhada Ma Commercial...",
    price: "₹ 2,80,000",
    condition: "Brand New",
    imageUrl:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/120347/yamaha-ray-right-side-view2.jpeg?isig=0&q=80",
  },
  {
    name: "Dio scooter",
    price: "₹ 85,000",
    condition: "Used",
    imageUrl:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/120347/yamaha-ray-right-side-view2.jpeg?isig=0&q=80",
  },
  {
    name: "2022 skoda kushaq style...",
    price: "₹ 47,50,000",
    condition: "Like New",
    imageUrl:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/120347/yamaha-ray-right-side-view2.jpeg?isig=0&q=80",
  },
  {
    name: "Sleeping 18 kg Full Doll Sex...",
    price: "₹ 41,999",
    condition: "Brand New",
    imageUrl:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/120347/yamaha-ray-right-side-view2.jpeg?isig=0&q=80",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Category() {
  // Ref to the grid container

  return (
    <>
  
    <div className="max-w-screen-xl mx-auto h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-white h-auto mt-4 scrollbar-none overflow-y-auto border-r border-gray-300">
        <div className="text-lg font-bold bg-white  flex items-center space-x-2 sticky top-0 border-b border-gray-300">
          <AiOutlineFolderOpen size={24} />
          <div className="flex items-center">Category</div>
        </div>
        <ul>
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between py-3 border-b border-gray-300 hover:bg-gray-200 rounded cursor-pointer"
            >
              <div className="flex">
                <span className="flex items-center space-x-2 text-sm text-black font-bold">
                  {category.icon} <span>{category.name}</span>
                </span>
                <span className="text-xs text-gray-700 flex items-center pl-2">
                  ({category.count})
                </span>
              </div>
              <div>
                <FaChevronRight className="text-sm text-gray-700 mx-4" />
              </div>
            </div>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-1 pl-0 border-gray-300 overflow-y">
        {/* Top Navigation */}
        <div className="sticky top-0 bg-white p-2 border-b border-gray-300 ">
          <div className="flex items-center space-x-10">
            <div className="flex items-center space-x-13">
              <div className="text-lg w-[140px]">Top Categories</div>
            </div>
            <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide whitespace-nowrap">
              {categoriesItem.map((category, index) => (
                <button
                  key={index}
                  className="px-2 py-1 border rounded transition duration-300 ease-in-out hover:bg-blue-100"
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center flex-row space-x-1 hover:text-blue-600">
              <AiOutlineSave size={24}  />
              <div className="text-lg w-[100px]">Saved</div>
            </div>
          </div>
        </div>

        {/* Trending Section */}
        <div className="flex justify-between items-center mb-4 py-3 px-2 border-b-2">
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <IoIosTrendingUp
              size={24}
              className=" border  p-1  border-gray-300 rounded-md"
            />
            <div className="text-lg font-normal">Trending</div>
          </h2>

          <button className=" flex items-center underline   text-lg text-bold text-blue-600 px-3 py-1 rounded-md  hover:border hover:border-blue-400 hover:no-underline">
            <span>
              <SlEnergy className="mr-2"/>
            </span>
            Boost Ads
          </button>
        </div>

        <div className="overflow-x-auto m-auto ml-5">
          <Carousel responsive={responsive}>
            {trendingItems.map((item, index) => (
              <div
                key={index}
                className=" p-2 h-[260px] border rounded-xl border-transparent hover:transition duration-300 ease-in-out cursor-pointer hover:border  hover:border-blue-600   "
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-32 object-cover mb-2 rounded-xl"
                />
                <div className="flex justify-between items-center">
                  <div className="text-[0.843rem] font-bold py-1 ">
                    {item.name}
                  </div>
                  <div>
                    <BsThreeDotsVertical />
                  </div>
                </div>

                <div className="text-gray-800 text-xs py-1">
                  {item.condition}
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-md font-semibold text-gray-800">
                    {item.price}
                  </div>
                  <div>
                    <CiBookmarkPlus className="text-xl text-bold text-black" />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <br />
        <hr />
        <UpLoad/>
      </div>
     
    </div>
  
    </>
  );
}

export default Category;
