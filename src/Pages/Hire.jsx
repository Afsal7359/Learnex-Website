import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import hireimg from '../assets/image/hireimg.png'

const Hire = () => {
  return (
    <div>
        <div className="flex flex-col bg-neutral-900">
    <Navbar/>
    {/* <div className="bg-darkblue text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-0">
        <div className="lg:w-1/2 mb-12 lg:mb-0 px-10 mx-5">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            Uncover talent beyond the <span className="text-gradient">confines</span> of a resume.
          </h1>
          <div className="grid grid-cols-2 md:flex md:flex-row justify-start gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-col justify-center p-2.5 border-amber-500 border-solid border-[1.27px] rounded-[126.989px]">
                <div className="flex flex-col justify-center items-start p-3 border-solid border-[1.27px] border-amber-500 border-opacity-50 rounded-[126.989px] max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/153c60e3f2762528386e2637dea36a21eda0d3edcc8be3c8f3b88f3f1924c0ef?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                    className="w-11 aspect-square"
                  />
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold mt-4">Experts</h2>
                <p className="text-sm mt-2">Skilled Candidates</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-col justify-center p-2.5 border-indigo-400 border-solid border-[1.27px] rounded-[126.989px]">
                <div className="flex flex-col justify-center items-start p-3.5 border-indigo-400 border-solid border-[1.27px] rounded-[126.989px] max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ac9ada191704216f7fabe0508ebceed0a4ccca61a3a09ebb7fb3e1959a51c9?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                    className="w-10 aspect-square"
                  />
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold mt-4">Zero</h2>
                <p className="text-sm mt-2">Hiring Cost</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-col justify-center items-center p-2.5 border-teal-300 border-solid border-[1.27px] h-[84px] rounded-[126.989px] w-[84px]">
                <div className="flex justify-center items-center px-3.5 border-teal-300 border-solid border-[1.27px] h-[66px] rounded-[126.989px] w-[66px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cad748884d7a621a422b89aaffbfabd555ebdb7f6c2a34844e9116edf70dc8d4?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                    className="w-10 aspect-square"
                  />
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold mt-4">Trained</h2>
                <p className="text-sm mt-2">With hands-on learning</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-col justify-center items-center p-2.5 border-red-500 border-solid border-[1.27px] h-[84px] rounded-[126.989px] w-[84px]">
                <div className="flex justify-center items-center px-3.5 border-red-500 border-solid border-[1.27px] h-[66px] rounded-[126.989px] w-[66px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba8871cbe919e50beedb3d1ba0aa6242d9f5db0741343e201d1c542bc7aa0186?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                    className="w-10 aspect-square"
                  />
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold mt-4">Taught</h2>
                <h2 className="text-sm font-semibold mt-4">By industry leaders</h2>
              </div>
            </div>
          </div>

        </div>
        <div className="lg:w-1/2 flex justify-center" >
          <img style={{height:"310px",width:"80%",borderRadius:"15px"}} src="https://s3-alpha-sig.figma.com/img/6c7c/0fe2/4f0f4342e628cbd2b48d7e0a9e8e39af?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~FV~tBclzHHOFn9Z1SC1GK~VCpFALE-29jIPwIis7rgUK897SW~FtpcqFHVn-6LMXbV9yVQT5wju64hstfnDsdqf9fvf-qO5vKYZlnRbvbtTveLflxn6a5XHdj1Njsp6UOi3Nxoi~BV9azwGh1GpaJGdMxdbPEHN7sPLVDMiVcJHkpbflcIMrf0Q72iR13Vx7cAQ0yRU85C01wL5goHPYEWDEIJ8hIquzIaIIuy38InoM6fef22MPJBZYvKUJVHOjsZQ-a~4ef1Sxc5t~31frnQ8Fnqw6Fm6C59fAQBjXDgzYjEwSzQyRRU3RyE7wpoRmamb8EZ4Il1H3SHu2BKyA__" alt="Illustration" className="max-w-full h-auto" />
        </div>
      </div>
    </div> */}
    <img src={hireimg} alt="" />

    <div className="flex flex-col justify-center px-3 py-12 mt-24 w-full max-md:mt-10 max-md:max-w-full">
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


      <div className="flex flex-col mt-5 w-full bg-neutral-800 max-md:max-w-full">
        <div className="justify-between p-20 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pt-2 text-2xl font-bold leading-9 max-md:mt-10 max-md:max-w-full">
                <div className="self-start text-3xl leading-10 text-white">
                  Learnex
                </div>
                <div className="mt-8 text-white bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] max-md:max-w-full">
                  Email Us :
                  <span className="text-white"> bootcamps@thelearnex.com</span>
                </div>
                <div className="mt-6 text-white bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] max-md:max-w-full">
                  Call us : +91:8606448435
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 justify-between max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col self-start text-lg font-medium text-white">
                  <div className="tracking-normal leading-[133%] text-slate-400">
                    Link
                  </div>
                  <div className="mt-6 leading-[122%]">Get in touch</div>
                  <div className="mt-4 leading-6 max-md:w-full flex justify-center">
                    Dotspace Business Center, Total Tower,Near Devankulangara,
                    Edappally KochiKerala 682A24
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-medium tracking-normal leading-6 text-slate-400">
                    Social
                  </div>
                  <div className="flex flex-col justify-center items-start p-2.5 mt-6 bg-neutral-900 rounded-[58px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1668cd59bbe54cc61316fb70b8aa63e3f9352bfa0aede87c85fb9de4b607b39c?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="w-5 aspect-square"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start p-2.5 mt-2 bg-neutral-900 rounded-[58px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dc9b3f56cc88c31f25f47c7772a4f1293c21a079df09425aad4b54a60888820?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="w-5 aspect-square"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start p-2.5 mt-2 bg-neutral-900 rounded-[58px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ae74e76396c3997020fd6cebac735c4682132ee43d67c126ce7a504c5a651f0?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="w-5 aspect-square"
                    />
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
    </div>
  )
}

export default Hire