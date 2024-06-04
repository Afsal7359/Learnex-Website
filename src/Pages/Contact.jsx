import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const Contact = () => {
  return (
    <div className="flex flex-col bg-neutral-900">
     <Navbar/>
    <div className="flex flex-col justify-center w-full max-md:max-w-full">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a75b516311dd092df436216b8eb6c083384b954b629f199d49d5052f3826b7f1?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a75b516311dd092df436216b8eb6c083384b954b629f199d49d5052f3826b7f1?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a75b516311dd092df436216b8eb6c083384b954b629f199d49d5052f3826b7f1?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a75b516311dd092df436216b8eb6c083384b954b629f199d49d5052f3826b7f1?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a75b516311dd092df436216b8eb6c083384b954b629f199d49d5052f3826b7f1?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a75b516311dd092df436216b8eb6c083384b954b629f199d49d5052f3826b7f1?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a75b516311dd092df436216b8eb6c083384b954b629f199d49d5052f3826b7f1?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a75b516311dd092df436216b8eb6c083384b954b629f199d49d5052f3826b7f1?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
        className="w-full aspect-[4.55] max-md:max-w-full"
      />
    </div>
    <div className="px-20 mt-16 w-full border-t border-b border-solid border-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch my-auto font-medium max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/816bb09daac3baa32ff3b0b91422b48cdcf5b49f36ad191ad4677b760e8a6cbc?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
              className="aspect-[1.11] w-[67px]"
            />
            <div className="mt-8 text-5xl tracking-tighter text-white leading-[57.2px]">
              Get in Touch with Us
            </div>
            <div className="mt-8 text-base tracking-normal leading-6 text-slate-500">
              Have questions or need more information? Fill out the form and
              we'll get back to you shortly.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow py-16 pl-16 border-l border-solid border-neutral-800 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col justify-center self-start py-6 text-6xl font-bold leading-[69.6px] max-md:text-4xl">
              <div className="bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] max-md:text-4xl" style={{ backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                Contact us
              </div>
            </div>
            <div className="flex gap-5 mt-8 leading-[150%] max-md:flex-wrap  max-md:w-[86%] flex justify-center">
            <div className="flex flex-col flex-1">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-md:justify-center max-md:text-center">
                <input type="text" placeholder="First Name" className="bg-gray-800 p-4 rounded-md" />
                <input type="text" placeholder="Last Name" className="bg-gray-800 p-4 rounded-md" />
                <input type="email" placeholder="Email" className="bg-gray-800 p-4 rounded-md md:col-span-2" />
                <input type="text" placeholder="Phone Number" className="bg-gray-800 p-4 rounded-md md:col-span-2" />
                <textarea placeholder="Message" className="bg-gray-800 p-4 rounded-md md:col-span-2"></textarea>
                {/* <div className="flex items-center md:col-span-2">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-sm">I agree with Terms of Use and Privacy Policy</label>
                </div> */}
                <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-md md:col-span-2">Send</button>
              </form>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col self-center px-10 p-5  mt-5 w-full max-w-[1284px] max-md:max-w-full" >
      <div className="text-6xl font-bold uppercase bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[69.6px] max-md:max-w-full max-md:text-4xl" style={{ backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
        <span className="uppercase">t</span>erms and condition
      </div>
      <div className="justify-center pb-4 mt-9 text-lg leading-9 rounded-lg text-slate-300 max-md:max-w-full">
        Welcome to Learnex . By using this website, you agree to the following
        terms and conditions:
        <br />
        1. Intellectual Property: All content on this website belongs to
        Learnex or its licensors. You may not use, reproduce, or distribute
        any content without permission.
        <br />
        2. Your Content: You are responsible for any content you submit to the
        website. By posting content, you grant Learnex the right to use it.
        <br />
        3. No Warranties: This website is provided &quot;as is,&quot; and
        Learnex makes no warranties regarding its accuracy or reliability.
        <br />
        4. Limitation of Liability: Learnex is not liable for any damages
        arising from your use of the website.
        <br />
        5. Indemnification: You agree to indemnify Learnex from any
        liabilities or expenses resulting from your breach of these terms.
        <br />
        6. Governing Law: These terms are governed by the laws of India. Any
        disputes will be resolved in the courts of India.
        <br />
        7. Modification of Terms: Learnex reserves the right to modify these
        terms at any time. Changes will be effective immediately upon posting
        on the website. By continuing to use the website after changes are
        made, you agree to be bound by the revised terms.
        <br />
        8. Termination: Learnex may terminate or suspend your access to the
        website without prior notice or liability for any reason, including
        breach of these terms.
        <br />
        9. Severability: If any provision of these terms is found to be
        invalid or unenforceable, the remaining provisions will continue to be
        valid and enforceable to the fullest extent permitted by law.
        <br />
        10. Entire Agreement: These terms constitute the entire agreement
        between you and Learnex regarding your use of the website and
        supersede all prior agreements and understandings.
        <br />
        By using this website, you agree to these terms and conditions. If you
        do not agree, please do not use the website.
      </div>
    </div>
    <div className="flex flex-col mt-5 w-full bg-neutral-800 max-md:max-w-full">
      <div className="justify-between p-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col font-bold max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-0.5 self-start py-1.5 text-3xl leading-10 text-white whitespace-nowrap">
                <div className="grow">Learnex</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a13f397918a17d8362e70b57baf43942df4fea2114e8d51c7a3ba5b5aa2e3b1?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="shrink-0 self-start w-6 aspect-square"
                />
              </div>
              <div className="flex flex-col mt-6 text-2xl leading-9 max-md:max-w-full">
                <div className="text-white bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] max-md:max-w-full">
                  Email Us :
                  <span className="text-white">
                    {" "}
                    bootcamps@thelearnex.com
                  </span>
                </div>
                <div className="flex flex-col justify-center mt-6 text-white max-md:max-w-full">
                  <div className="bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] max-md:max-w-full">
                    Call us : +91:8606448435
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col self-start text-lg font-medium">
                <div className="tracking-normal leading-[133%] text-slate-400">
                  Link
                </div>
                <div className="flex flex-col mt-6 text-white">
                  <div className="leading-[122%]">Get in touch</div>
                  <div className="mt-4 leading-6">
                    Dotspace Business Center, Total Tower Near Devankulangara,
                    Edappally Kochi Kerala 682A24
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-medium tracking-normal leading-6 text-slate-400">
                  Social
                </div>
                <div className="flex flex-col justify-center mt-6">
                  <div className="flex flex-col justify-center items-start p-2.5 bg-neutral-900 rounded-[58px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1668cd59bbe54cc61316fb70b8aa63e3f9352bfa0aede87c85fb9de4b607b39c?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="w-5 aspect-square"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start p-2.5 mt-2 bg-neutral-900 rounded-[58px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3e8fa755627f08df91b94472c0abcb8bfb75ae8c775f1f5cfe7ed4928cd9abc?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="w-5 aspect-square"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start p-2.5 mt-2 bg-neutral-900 rounded-[58px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cd8d56be0602d656fad40c8cd0a38b5cfd6b444f8ec8af086e163d13fbbb793?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="w-5 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-3 w-full text-sm font-medium tracking-normal leading-6 text-white bg-zinc-900 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 py-2.5">
          <div>@2023 Estatein. All Rights Reserved.</div>
          <div>Terms & Conditions</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact