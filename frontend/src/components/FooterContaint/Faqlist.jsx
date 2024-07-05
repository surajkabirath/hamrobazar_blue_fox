const faqs = [
  {
    question: "What is HB Select?",
    answer:
      "HB Select is a collection of quality automobiles from the Hamrobazar automobile section. We bring you a collection of handpicked cars listed on Hamrobazar which are then inspected for quality and are a good value for money.",
  },
  {
    question: "Who owns the automobiles in HB Select?",
    answer:
      "People who have listed their automobiles to sell in HB Select own the automobile. Hamrobazar does not own any automobiles, Hamrobazar and/or HB Select is just a medium to buy and sell automobiles.",
  },
  {
    question: "How do I list my vehicle on HB Select?",
    answer:
      "Currently, HB Select is working with only a few sellers that we have reached out to ourselves. However, we select vehicles that are already listed on Hamrobazar, so you can just post the vehicles on Hamrobazar and we will reach out to you for more information.",
  },
  {
    question: "Who is liable for the automobiles listed on HB Select?",
    answer:
      "Sellers are liable for the automobiles listed on HB Select, HB Select just handpicks quality deals for users, saving peoples time to find great deals.",
  },
  {
    question: "Who provides a warranty on automobiles listed in HB Select?",
    answer:
      "It’s up to the seller to provide warranty on automobiles listed in HB Select. ",
  },
  {
    question: "How do you finance your purchase?",
    answer:
      "Currently, sellers themselves provide financing opportunities or exchanges if needed for the vehicles. However, most vehicles would be eligible for financing",
  },
];

const FAQList = () => {
  return (
    <>
      <div className="flex justify-center mb-10">
        <h1 className="text-4xl font-semibold">Frequently asked questions</h1>
      </div>
      <div className="max-w-screen-lg mx-auto mt-20 mb-20 bg-inherit h-96 overflow-y-auto ">
        <ul>
          {faqs.map((faq, index) => (
            <li key={index} className="border-0">
              <details className="group pb-8">
                <summary className="flex items-center gap-3 px-4 py-3 marker:content-none hover:cursor-pointer font-bold">
                  <span>{faq.question}</span>
                </summary>
                <article className="px-4 pb-4">
                  <p>{faq.answer}</p>
                </article>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FAQList;
