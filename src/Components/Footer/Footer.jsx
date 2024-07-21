import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
   <div className="flex flex-col mt-20 w-full bg-neutral-800 max-md:mt-10 max-md:max-w-full">
        <div className="justify-between p-20 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pt-2 text-2xl font-bold leading-9 max-md:mt-10 max-md:max-w-full">
                <div className="self-start text-3xl leading-10 text-white">
                  Learnex
                </div>
                <div className="mt-8 text-white bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] max-md:max-w-full" style={{color:"#fe8e26"}}>
                  Email Us :
                  <span className="text-white"> bootcamps@thelearnex.com</span>
                </div>
                <div className="mt-6 text-white bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] max-md:max-w-full" style={{color:"#fe8e26"}}>
                  Call us :
                  <span className="text-white"> +91:8606448435</span> 
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 justify-between max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-start self-start text-lg font-medium text-white">
                  <div className="tracking-normal leading-[133%] text-slate-400">
                    Link
                  </div>
                  <div className="mt-6 leading-[122%]">Get in touch</div>
                  <div className="self-stretch mt-6 leading-6">
                    Dotspace Business Center, Total TowerNear Devankulangara,
                    EdappallyKochiKerala 682A24
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-medium tracking-normal leading-6 text-slate-400">
                    Social
                  </div>
                  <div className="flex flex-col justify-center items-start p-4 mt-6 bg-neutral-900 rounded-[58px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1668cd59bbe54cc61316fb70b8aa63e3f9352bfa0aede87c85fb9de4b607b39c?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="w-5 aspect-square"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start p-4 mt-2 bg-neutral-900 rounded-[58px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dc9b3f56cc88c31f25f47c7772a4f1293c21a079df09425aad4b54a60888820?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="w-5 aspect-square"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start p-4 mt-2 bg-neutral-900 rounded-[58px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5af0d777e8f5e0003881c956709deb19f6f9c58df52fbd9553d74b8a5f150b3f?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
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
           <Link to={'/termsandconditions'}><div> Terms & Conditions</div></Link> 
           <Link to={'/privacypolicy'}><div>Privacy Policy</div></Link> 
           <Link to={'/refundandcancellation'}><div>Refund and Cancellation</div></Link> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer