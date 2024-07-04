
import { AiOutlineFolderOpen, AiOutlineSave } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { FiStar } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Category() {
  // Ref to the grid container

  return (
    <div className="max-w-screen-xl mx-auto h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-white h-min-10 mt-4 scrollbar-none overflow-y-auto border-r border-gray-300">
        <div className="text-lg font-bold bg-white h-10 flex items-center space-x-2 sticky top-0 border-b border-gray-300">
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
      <div className="w-3/4 p-1 pl-0 overflow-y-auto border-gray-300">
        {/* Top Navigation */}
        <div className="sticky top-0 bg-white p-2 border-b border-gray-300">
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
            <div className="flex items-center flex-row space-x-1">
              <AiOutlineSave size={24} />
              <div className="text-lg w-[100px]">Saved</div>
            </div>
          </div>
        </div>

        {/* Trending Section */}
        <div className="flex justify-between items-center mb-4 py-3 border-b-2">
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <BiTrendingUp size={24} />
            <div>Trending</div>
          </h2>
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <div>Boost Ads</div>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <Carousel responsive={responsive}>
            {trendingItems.map((item, index) => (
              <div
                key={index}
                className="border p-2 h-[300px] rounded shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-32 object-cover mb-2 rounded"
                />
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-gray-600">{item.condition}</div>
                <div className="text-lg font-bold">{item.price}</div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Category;
