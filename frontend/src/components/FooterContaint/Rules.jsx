import Footer from "../Layout/Footer";

const Rules = () => {
    const hamrobazarGuidelines = [
        {
          section: "Multiple (duplicate/repeat) ad posting.",
          content: "Users are not allowed to post more than 1 (one) similar active ad. Similar active ad are defined as ads selling or looking for same product or service, even if these ad contain different text or images and/or is posted from same or different account by a user.\n\n" +
            "Each user is only allowed to post an ad similar to his/her previous ad if the previous one has been marked as sold, has been deleted or has already expired."
        },
        {
          section: "Misleading and fraudulent ads.",
          content: "Some of the ads (but not limited) which fall under this are:\n\n" +
            "• Ads title, price and content must be related. For e.g. posting ad with title Iphone 5 with irrelevant price Rs. 200 is not allowed.\n" +
            "• Ads title should not include Price or Phone numbers, there is separate field for that.\n" +
            "• Ads posted with marketing gimmick words with sole purpose of grabbing other user attention. For e.g. posting ad \"Best opportunity of your life\", \"Click this to earn money\", \"Call me soon\", \"Don't miss out\" etc.\n" +
            "• Ads with Inaccurate/wrong prices. You need to clearly mention the price in your ad. For e.g. posting ad with price Rs. 5,000 but when later contacted you are asking another price.\n" +
            "• Ads with Incorrect/wrong item condition mentioned. For e.g. posting used goods as Brand New, not disclosing defectiveness of goods.\n" +
            "• Ads selling stolen and illegal goods.\n" +
            "• Ads selling fake, replica and counterfeited goods by representing them as original.\n" +
            "• Ads with sole purpose of leading user to another website or generate downloads without actual sale of product or service.\n" +
            "• Ads which have Images unrelated with the ad content. Posting graphic (violent or adult oriented) images are not allowed."
        },
        {
          section: "Mis-categorized (wrong category) ads.",
          content: "Ads must be posted in the correct category. For e.g. posting a Bike ad in Mobile category, or office table in Home Furniture category is considered as mis-categorized ad. If you are unsure which category your ads belongs to, kindly search for existing ads to know where other users have posted similar ad. If your ad falls under more than one category, select the best and post your ad only in that category."
        },
        {
          section: "Posting illegal or morally obscene ads.",
          content: "Hamrobazar does not allow ads which are illegal as per Nepal law or are considered morally obscene in context to Nepalese society. Some of the ads (but not limited to) which fall under are:\n\n" +
            "• Ads for Prostitution, obscene items or any form of adult entertainment ads like escort, indecent massages, pornography, sexual items, etc.\n" +
            "• Ads which hurt the sentiments of any person, group or religion.\n" +
            "• Ads selling illegal items like weapons, drugs, human organs, endangered animals, prohibited antiques, black marketing, etc.\n" +
            "• Ads which infringes other third parties intellectual property, moral right and privacy."
        }
      ];
      
     
  
  return (
    <div className="max-w-screen-xl mx-auto h-screen flex mt-24">
      <div className="w-3/4">
        <h2 className="text-lg font-bold text-gray-900 py-2">
        Ad Posting Rules
        </h2>
        <p className=" font-bold">Hamrobazar does not allow posting of ads that are considered illegal as per Nepalese law and/or are not permitted as per below Ad posting rules. Any user found violating these rules will be subjected to action/s mentioned below.</p>
        {hamrobazarGuidelines.map((data, index) => (
          <div key={index} className="mb-6 mt-3">
            <h3 className="text-md font-semibold mb-2">
              {index +1}. {data.section}
            </h3>
            <p className="text-gray-800 whitespace-pre-line text-[0.9rem]">{data.content}</p>
          </div>
        ))}
      </div>
      <div className="w-1/4 py-5  px-4">
      <Footer className/>
      </div>
      
    </div>
  );
};

export default Rules;