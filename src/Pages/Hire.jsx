import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import hireimg from '../assets/image/hireimg.png'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const Hire = () => {
  return (
    <div>
        <div className="flex flex-col bg-neutral-900">
    <Navbar/>
   <div className="flex flex-col  mt-10"></div>
    <img src={hireimg} alt="" />

    <div className="flex flex-col justify-center px-3 py-12 w-full max-md:mt-15 max-md:max-w-full">
  <div className="px-20 max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8e9e1a7cda970adb48ede7bfd7d4f9c95a3a5d53082cb52f233e478647519e5?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
            className="aspect-[3.85] w-[62px]"
          />
          <div className="mt-8 text-6xl font-bold text-white bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[70px] max-md:text-4xl max-md:leading-[54px]">
            <span className="text-white">Get in</span> Touch with Us
          </div>
          <div className="mt-8 text-lg font-medium tracking-normal leading-7 text-slate-400">
            Have questions or need more information? Fill out the form and
            we'll get back to you shortly.
          </div>
        </div>
      </div>
      <div className=" flex-col ml-1 w-[66%] max-md:ml-0 max-md:w-[86%] flex justify-center">
        <div className="flex flex-col grow self-stretch py-16 pl-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 leading-[150%] max-md:flex-wrap max-md:max-w-full">
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
          {/* <div className="flex gap-5 mt-8 w-full text-base leading-6 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-1 gap-3 my-auto text-white max-md:flex-wrap">
              <div className="shrink-0 w-6 h-6 rounded border border-solid bg-neutral-800 border-neutral-800" />
              <div className="flex-1 max-md:max-w-full">
                I agree with Terms of Use and Privacy Policy
              </div>
            </div>
            <div className="flex gap-2 justify-center px-5 py-3.5 font-semibold text-white uppercase rounded-lg">
              <div>
                S<span className="lowercase">end</span>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/417ebaf87989c6a2d2be7b3650cdf9bc6b1a73b658be2879d7b2968d334853d0?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</div>

            {/* footer start  */}
            <Footer/>
            {/* footer end  */}
      
    </div>
    </div>
  )
}

export default Hire