import Footer from "../Layout/Footer";

const Safety = () => {
    const hamrobazarSections = [
        {
          section: "Hamrobazar does not offer any kind of buyer protection.",
          content: "Hamrobazar is not involved in buying or selling activities nor does it act as a middleman. Just like any newspaper classifieds, all the ads are posted by users for information purpose. These users are solely responsible for their ad content and their acts, without any liability on our part."
        },
        {
          section: "Avoid fraud & scams.",
          content: "Don’t assume without confirmation that ad content and picture displayed are true and accurate. Ask questions to ad poster for more details if you have any doubt on your mind. Make yourself aware of common scams and fraud practices. Be suspicious of:\n\n" +
            "• Sellers who has provided incomplete address, do not have a verified mobile number, has mentioned phone numbers on ad description only.\n" +
            "• Ads demanding you to make advance payment.\n" +
            "• Ads promising large sum of money, lottery/get rich scheme, too good to be true opportunities (ad related to foreign employment, visa & migration, high return on investments, etc).\n" +
            "• Ads trying to sell stolen goods at low prices. When in doubt ask the owner to provide documents which shows proof of purchase (like bill, warranty card).\n" +
            "• Ads trying to sell cheap, fake and imitation products as original. Apply the most simple rule – “If something sounds too good to be true, it probably is suspicious”"
        },
        {
          section: "Meet in-person and at a public place.",
          content: "While buying or selling through hamrobazar, it is most likely that you will be meeting a stranger. It is advisable to learn as much as you can about the person whom you are meeting or trading with. Ask the person about his work place, profession, etc. If in doubt, ask the person to show his identification document like license and citizenship.\n\n" +
            "• For your personal safety, always meet buyer/seller in public places (restaurant, office, shops, etc) where other people are present.\n" +
            "• Always carry a cell phone with you. If possible take a friend along. Do inform someone from your family or friend about the person you are meeting and where you are going.\n" +
            "• Try not to arrange meeting at home or isolated places. If required, make sure you are not alone. If you feel something suspicious, stop immediately."
        },
        {
          section: "Inspect the product in detail.",
          content: "We recommend you to physically inspect the product before making payment. Take your time to check product thoroughly, avoid being rushed in by seller. If you do not have required expertise, ask advice from your friend or professional."
        },
        {
          section: "Be especially careful when buying/selling high value items.",
          content: "If you are looking to buy something expensive, we recommend that you first meet the seller to check the product. Once you are ready to purchase, then visit ATM to arrange for the cash. We strongly encourage you to use mobile wallet (IME Pay, Esewa, Khalti, Connect IPS, etc) or bank transfer instead of cash payment. You may want to confirm with seller about acceptance of particular digital payment method before meeting."
        },
        {
          section: "Try to avoid non face-to-face transactions.",
          content: "Hamrobazar is all about trading locally and does not encourage non face-to-face transactions (without buyer & seller meeting each other). However if you are interested, it is advisable to make payment through banks accounts. Never send cash directly or through remittance. Always keep photocopies of deposit slips, cheques or electronic transfer slip. Similarly, sellers are advised not to dispatch goods before receiving payment from buyer.\n Please report any attempts of fraud, suspicious activities at support@hamrobazar.com In case of fraud or illegal activity, we recommend that you report it to local authorities and inform us."
        },
      
      ];
      
    
      
  
  return (
    <div className="max-w-screen-xl mx-auto h-screen flex mt-24">
      <div className="w-3/4">
        <h2 className="text-lg font-semibold text-gray-700 py-2">
        Safety Tips
        </h2>
        <p className="text-[0.9rem]">Hamrobazar.com provides online platform which helps buyers & sellers to meet with each other. However, it is always a good idea to take some precaution before conducting any transaction. Below are several safety guidelines. This is not a complete list. We advise you to always use common sense, sound judgment and trust your instincts.</p>
        {hamrobazarSections.map((data, index) => (
          <div key={index} className="mb-6 mt-3">
            <h3 className="text-md font-semibold mb-2">
               {data.section}
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

export default Safety;
