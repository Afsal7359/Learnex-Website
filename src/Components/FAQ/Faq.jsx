import React, { useState } from 'react'

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: "What programs do you offer?",
        answer: "We offer bootcamp programs including web development, UX/UI design, digital marketing, and more.",
      },
      {
        question: "Who can attend the bootcamp?",
        answer: "Our bootcamps are open to individuals of all backgrounds and experience levels. Whether you're a beginner or have some experience in the field, our programs are designed to accommodate learners at various stages.",
      },
      {
        question: "What are the prerequisites for joining a bootcamp?",
        answer: "The prerequisites vary depending on the program. Our programs are beginner friendly some programs require specific software tools, while others may be suitable for absolute beginners. Please refer to the program page for detailed prerequisites. It's essential to have access to a dedicated computer or laptop and internet connection.",
      },
      {
        question: "How long do the bootcamp programs last?",
        answer: "Our Mini bootcamps duration range from 7 days to 12 days and regular bootcamps last for the period of 16 Weeks (4 Months).",
      },
      {
        question: "Do you offer job placement assistance?",
        answer: "Yes, we provide job placement assistance to our graduates, including career counseling, resume review, interview preparation, and networking opportunities with industry professionals as well as dedicated interview schedule till placed. The process is applicable only to those who complete the course within the period of one year, as many times as applicable.",
      },
      {
        question: "How do I apply for a bootcamp?",
        answer: "You can apply for a bootcamp by visiting our website and filling out the application form provided for the specific program you are interested in.",
      },
    ];
  return (
   
    <>
    <div className="px-20 mt-28 w-full border-t border-b border-solid border-zinc-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center pt-20 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f250b19559022aaa3f55108459ead6b3c4eccf5b46a6a9160f57ba925abb36b?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                className="aspect-square w-[60px]"
              />
              <div className="mt-8 text-6xl font-bold leading-[69.6px] max-md:text-4xl" style={{ backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                Asked question
            </div>

              <div className="mt-4 text-base tracking-tight leading-6 text-slate-400">
                If the question is not available on our FAQ section, Feel free
                to contact us personally, we will resolve your respective
                doubts.{" "}
              </div>
              <div className="flex gap-1 justify-center self-start px-5 py-3.5 mt-8 text-sm tracking-tight leading-5 rounded-md border border-solid bg-zinc-900 border-neutral-800 text-neutral-400">
                <div>Ask Qustion</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/77de39b448510bd151d36dd34da10ad28a523ce744c1a485d9ac8d1475cd8951?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="shrink-0 self-start w-5 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow p-16 border-l border-solid border-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="flex flex-col gap-5 p-6 mt-6 rounded-xl border border-solid bg-neutral-800 border-neutral-800 max-md:flex-wrap max-md:px-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="text-lg font-medium text-white max-md:max-w-full">
                {faq.question}
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4959c10640547f039f317b01974758e99199c9867ece40d6e3c8c0b89892f261?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                className="shrink-0 self-start w-5 aspect-square"
              />
            </div>
            {openIndex === index && (
              <div className="mt-2 text-base leading-6 text-slate-500 max-md:max-w-full">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Faq