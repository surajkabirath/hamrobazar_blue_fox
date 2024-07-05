import FAQList from "./Faqlist";

const features = [
  {
    icon: "hmarobuy.svg", // This is a placeholder for the icon
    title: "Buy back guarantee",
    description:
      "Reselling your HB Select vehicle is guaranteed and hassle-free. On listings with “Buy-Back Guarantee”, get a 100% guaranteed resale from the sellers",
  },
  {
    icon: "hamroacci.svg", // This is a placeholder for the icon
    title: "Accident-Free",
    description:
      "Safety is our utmost priority. Our rigorous validators of HB Select will ensure the vehicles are completely accident-free to make sure you get a safe and discrepancy-free ride.",
  },
  {
    icon: "hamroquality.svg", // This is a placeholder for the icon
    title: "High-Quality Vehicles",
    description:
      "With HB Select we hand pick from the best and highest quality vehicles listed on Hamrobazar and perform our additional inspections and checks to assure you find your perfect automobile.",
  },
  {
    icon: "hamrofine.svg", // This is a placeholder for the icon
    title: "Financing Option",
    description:
      "Money shouldn’t come in between you and your dreams. Receive assistance in connecting with the seller for auto-financing options for every HB Select purchase.",
  },
];

const Hbselect = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto h-screen flex mt-24">
        <div className="flex flex-col items-center">
          <div className="text-center my-4">
            <div className="max-w-screen-md ">
              <div className="flex  justify-center pt-2">
                <img
                  src="hamroSelect.svg"
                  alt=""
                  height={100}
                  width={175}
                  className="pb-6"
                />
              </div>

              <p className="mt-4 text-md text-gray-800 pb-7">
                HB Select is where vehicles are handpicked from a pool of
                automobiles listed on Hamrobazar, inspected by professionals and
                showcased for you to purchase. The vehicles available on HB
                Select are sold by sellers themselves and are quality-checked
                and priced fairly, giving you the best deal possible.
              </p>
            </div>
          </div>
          <div className="max-w-screen-xl">
            <div className="flex  justify-center pt-5 gap-8 mx-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center max-w-xs"
                >
                  <img src={feature.icon} alt="" width={100} height={100} />
                  <h2 className="text-xl font-semibold mt-4">
                    {feature.title}
                  </h2>
                  <p className="mt-2 text-gray-800">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FAQList />
    </>
  );
};

export default Hbselect;
