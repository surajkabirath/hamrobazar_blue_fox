import Footer from "../Layout/Footer";

const Faq = () => {
  const faqs = [
    {
      question: "What is hamrobazar.com?",
      answer:
        "Hamrobazar.com is FREE online classified which enables individuals as well as companies to list wide variety of new or used product online. We at hamrobazar.com believe that Internet is a great promotional vehicle as well as communication channel for connecting buyers and sellers. Hamrobazar.com is perfect solution that helps to list your products for FREE.",
    },
    {
      question: "Why choose hamrobazar.com?",
      answer:
        "As per NTA April 2019 report, the internet users in Nepal has reached 18.24 million (including 14.24 million mobile data users) which itself indicates that the market for internet advertising is highly lucrative. Hamrobazar is visited by around 800,000 unique visitors monthly who use the site for buying and selling purpose. Compared to newspaper classifieds, in hamrobazar.com your product will have more comprehensive detail and pictures thus enabling consumer to choose better. Hamrobazar.com has created such platform where both seller and buyers can interact with each other.",
    },
    {
      question: "What Benefits do I get as a member?",
      answer:
        "• Unlimited potential customers.\n• 24/7 market place for your products and services.\n• Online catalog for your product reaching to consumer effectively.\n• Cheap way of advertising your product and services.\n• Your own control panel. From where you have total control over ads.\n• Add, edit & delete your ads immediately with minimum time and effort.\n• View ad traffic and hits to know how your products affect the customers.\n• Upload image for your ad to provide visual information for your ads.\n• Change your contact information as and when required by you\n• Write comments on other user's ad and contact them through email.",
    },
    {
      question: "How can I register in the site?",
      answer:
        "If you want to promote your product/service then you just have to register as member at hamrobazar first. Just click on Register link at top of the website to get started. Fill in your contact details mentioned in online registration form and submit.",
    },
    {
      question: "I cannot login after registering, it says email address validation required?",
      answer:
        "You need to verify your email address in order to login to your account. A verification email is sent to your email address as soon as you register. This email contains a website link where you must visit (click) to activate your account. Please check your email spam/junk folder also, as sometimes our mails are placed there. If you have not received this email, then please contact us.",
    },
    {
      question: "How do I post an ad for my product or services in the site?",
      answer:
        "Once you have registered an account, then you just have to login to the Member Area of the site. Once logged in, click on 'Post New Ad' option from the menu. You will be then asked to choose a suitable category for your ad. Then fill up the form with description, price of your product and click on post button. Note:- if you dont know your product category then please search the products in our site to find if there is existing product which will give you idea about the category.",
    },
    {
      question: "While posting ads, I am being asked to 'Verify My Mobile Number'?",
      answer:
        "In order to improve posted ad quality and to prevent fake/spam ad postings, we ask members to verify their mobile number. This is compulsory, without which you will not be able to post your ad.",
    },
    {
      question: "Can I upload images for my ad?",
      answer:
        "Yes. you can upload images of your product which will be listed with your ad. Infact ads with real images have more consumer appeal and receive more views and better inquiries. You will be asked to upload a picture after you have posted your ad as mentioned in question no. 6 above.",
    },
    {
      question: "Are there any restrictions with ad images?",
      answer:
        "Unfortunately you can only place ad images of jpg or gif type. There is also upper limit of 8 MB per image. If your image is larger than this size then please use a graphic software to resize the image. You can only place 8 images per product, which is enough to give detail about your product.",
    },
    {
      question: "Can I change the details of product later?",
      answer:
        "Yes. you can change the details of your products later whenever you require it. Just login to your account and click on 'My Ads' option from the menu. You will see list of all the ads you have posted in the site. From there you can edit your ad, change/upload your product picture, renew, delete or make your product sold status.",
    },
    {
      question: "Can I change my personal information and password later?",
      answer:
        "Yes. after you have registered your account you can change your personal information whenever you want. You need to login to your account and click on 'Change Info' or 'Change Password' menu to change your personal data.",
    },
    {
      question: "What is Featured ads, Popular ads, Recently listed ads?",
      answer:
        "Featured ads are those ads which are of special importance. Popular ads are those ads which are being viewed by user most number of times. Recently listed ads are those ads which have been recently posted in the site.",
    },
    {
      question: "What is hamrobazar Shops?",
      answer:
        "Member who have been authorized by hamrobazar.com as genuine and trustworthy are given the status of hamrobazar Shops. We would encourage buyers to feel safe and secure with making transaction with these shop owners.",
    },
    {
      question: "What is Verified Phone?",
      answer:
        "Verified mobile number means that the provided number has been authenticated by us (through SMS) and belongs to respective user. You are encourage to contact the user in these mobile numbers.",
    },
    {
      question: "Does a Buyer need to register at hamrobazar.com?",
      answer:
        "No. Buyer does not have to register to hamrobazar, he/she can browse the entire website and search the posted ads without any registration. However in order to post comment on ads and send email to other users, registration is required.",
    },
    {
      question: "How can I find product that I want to buy in better way?",
      answer:
        "You can either browse by category or use our search tool to find product or services that you are interested in. While using search tool, use few keywords that describe the product like Iphone 8 , Samsung S8 , Santro , etc. You can later use filter search attributes like category, price range, condition, etc to improve your search results.",
    },
  ];
  
  return (
    <div className="max-w-screen-xl mx-auto h-screen flex mt-24">
      <div className="w-3/4">
        <h2 className="text-lg font-semibold text-gray-700 py-2">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-md font-semibold mb-2">
              {index + 1}. {faq.question}
            </h3>
            <p className="text-gray-800 whitespace-pre-line">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="w-1/4 py-5  px-4">
      <Footer className/>
      </div>
      
    </div>
  );
};

export default Faq;
