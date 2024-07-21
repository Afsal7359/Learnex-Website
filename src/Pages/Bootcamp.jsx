import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay ,A11y } from 'swiper/modules';
import Image1 from '../assets/image/testmonial3.png'
import Image2 from '../assets/image/testmonial2.png'
import Image3 from '../assets/image/testmonial4.png'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';


const Bootcamp = () => {
  return (
    <>
 <div className="flex flex-col items-center bg-neutral-900" style={{overflow:"hidden"}}>
       <Navbar/>
      <div className="mt-10 px-10 w-full max-w-[1266px] max-md:mt-10 max-md:max-w-full" style={{backgroundColor:"#1b2031"}}>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto text-lg font-medium text-white max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl font-bold bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]" style={{backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', color: 'transparent' }} >
                UI UX Design <span className="text-white">Bootcamp</span>
              </div>
              <div className="mt-4 tracking-normal leading-7 text-slate-400 max-md:max-w-full">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
              <div className="flex gap-2.5 justify-between self-start px-3.5 py-2.5 mt-8 text-center whitespace-nowrap rounded border border-white border-solid leading-[150%]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c43a04060b55d623253a5ab2dbe344c064192f9bbdac926348329bdc2703f28f?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="shrink-0 my-auto w-5 aspect-[1.05]"
                />
                <div>Online</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-10 ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-10 w-full bg-blue-800 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-bold text-white max-md:max-w-full">
                Bootcamp Start on, Jan 18
              </div>
              <div className="mt-3 text-base text-gray-50 whitespace-wrap text-ellipsis max-md:max-w-full">
                Ideal for individuals who who need advanced features and tools
                for client work.
              </div>
              <div className="mt-5 text-3xl font-semibold text-gray-50 text-ellipsis max-md:max-w-full">
                Price:
              </div>
              <div className="flex gap-1 justify-between max-md:flex-wrap">
                <div className="text-6xl font-semibold text-white max-md:text-4xl">
                  ₹45000
                </div>
                <div className="my-auto text-2xl font-bold text-lime-400">
                  Limited seats of 25
                </div>
              </div>
              <div className="flex gap-2 justify-center self-start px-5 py-3 mt-5 text-base font-semibold leading-6 text-white capitalize rounded-lg" style={{background: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', color: 'white' }}>
                <div>
                <Link className="capitalize" to={"/checkout"} 
                  state={{ CourseName: "UI UX Design Bootcamp",
                    Courseprice: 45000,
                    CourseDuration: "14 Week (4 Month)" }}
                    >Enroll Now</Link></div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/417ebaf87989c6a2d2be7b3650cdf9bc6b1a73b658be2879d7b2968d334853d0?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="shrink-0 my-auto w-5 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center self-stretch px-20 py-8 mt-16 w-full bg-slate-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center self-stretch px-5 py-3.5 w-full bg-gray-800 rounded-xl border border-solid border-neutral-800 leading-[150%] max-md:mt-10">
              <div className="text-xl font-bold text-white">Live</div>
              <div className="text-base tracking-normal text-slate-400">
                Happy Students
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center self-stretch px-5 py-3.5 w-full bg-gray-800 rounded-xl border border-solid border-neutral-800 leading-[150%] max-md:mt-10">
              <div className="text-xl font-bold text-white">16 Weeks</div>
              <div className="text-base tracking-normal text-slate-400">
                Fellowship Timeline
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center self-stretch px-5 py-3.5 w-full bg-gray-800 rounded-xl border border-solid border-neutral-800 leading-[150%] max-md:mt-10">
              <div className="text-xl font-bold text-white">Metorship</div>
              <div className="text-base tracking-normal text-slate-400">
                With Exprience designer
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center self-stretch px-5 py-3.5 w-full bg-gray-800 rounded-xl border border-solid border-neutral-800 leading-[150%] max-md:mt-10">
              <div className="text-xl font-bold text-white">
                Limited batch size
              </div>
              <div className="text-base tracking-normal text-slate-400">
                Hands on sessions
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 w-full max-w-[1239px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/82697b21d8436a4a6105f2b7e04585d7d2a31b6cda77d8225018ac68d0ddf439?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/82697b21d8436a4a6105f2b7e04585d7d2a31b6cda77d8225018ac68d0ddf439?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/82697b21d8436a4a6105f2b7e04585d7d2a31b6cda77d8225018ac68d0ddf439?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/82697b21d8436a4a6105f2b7e04585d7d2a31b6cda77d8225018ac68d0ddf439?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/82697b21d8436a4a6105f2b7e04585d7d2a31b6cda77d8225018ac68d0ddf439?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/82697b21d8436a4a6105f2b7e04585d7d2a31b6cda77d8225018ac68d0ddf439?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/82697b21d8436a4a6105f2b7e04585d7d2a31b6cda77d8225018ac68d0ddf439?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/82697b21d8436a4a6105f2b7e04585d7d2a31b6cda77d8225018ac68d0ddf439?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                className="w-full border-2 border-white border-solid aspect-[0.68] rounded-[200px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c0d274bec34d55235fa1b18a18f875d214e80ba250b57870af754cbda2ff4a8?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                className="self-center mx-4 mt-14 aspect-[1.18] w-[195px] max-md:mt-10"
              />
              <div className="shrink-0 mt-6 bg-sky-600 rounded-full h-[45px] w-[45px]" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-14 max-md:mt-10 max-md:max-w-full">
              <div className="ml-2.5 max-w-full w-[744px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                    <div className="flex grow gap-5 justify-between items-start max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1c7636f89834d7f09ed30be6d69cdacbc5a3164198ce5018bc25882330b260b1?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c7636f89834d7f09ed30be6d69cdacbc5a3164198ce5018bc25882330b260b1?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c7636f89834d7f09ed30be6d69cdacbc5a3164198ce5018bc25882330b260b1?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c7636f89834d7f09ed30be6d69cdacbc5a3164198ce5018bc25882330b260b1?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c7636f89834d7f09ed30be6d69cdacbc5a3164198ce5018bc25882330b260b1?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c7636f89834d7f09ed30be6d69cdacbc5a3164198ce5018bc25882330b260b1?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c7636f89834d7f09ed30be6d69cdacbc5a3164198ce5018bc25882330b260b1?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c7636f89834d7f09ed30be6d69cdacbc5a3164198ce5018bc25882330b260b1?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                        className="shrink-0 self-start max-w-full aspect-[1.18] fill-amber-400 w-[195px]"
                      />
                      <div className="shrink-0 self-end mt-36 bg-orange-400 rounded-full h-[45px] w-[45px] max-md:mt-10" />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                    <div className="self-stretch my-auto w-full text-6xl font-bold bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[70px] max-md:mt-10 max-md:text-4xl max-md:leading-[54px]" style={{ backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                      Become UI/UX Design{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/461ce509d81662a0f7bcd4e9fcaac739ec4fdce0a95d2d7407b617379b6d72fc?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/461ce509d81662a0f7bcd4e9fcaac739ec4fdce0a95d2d7407b617379b6d72fc?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/461ce509d81662a0f7bcd4e9fcaac739ec4fdce0a95d2d7407b617379b6d72fc?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/461ce509d81662a0f7bcd4e9fcaac739ec4fdce0a95d2d7407b617379b6d72fc?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/461ce509d81662a0f7bcd4e9fcaac739ec4fdce0a95d2d7407b617379b6d72fc?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/461ce509d81662a0f7bcd4e9fcaac739ec4fdce0a95d2d7407b617379b6d72fc?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/461ce509d81662a0f7bcd4e9fcaac739ec4fdce0a95d2d7407b617379b6d72fc?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/461ce509d81662a0f7bcd4e9fcaac739ec4fdce0a95d2d7407b617379b6d72fc?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="grow shrink-0 mt-10 max-w-full aspect-[0.68] w-[227px] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col px-5 max-md:mt-10 max-md:max-w-full">
                      <div className="text-3xl font-semibold leading-10 text-white uppercase max-md:max-w-full">
                        <span className="text-white uppercase">t</span>housands
                      </div>
                      <div className="mt-4 text-lg font-medium tracking-normal leading-7 text-slate-400 max-md:max-w-full">
                        of graduates from our bootcamp programs globaly
                      </div>
                      <div className="mt-11 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow self-stretch p-3.5 w-full text-base font-medium leading-6 lowercase rounded bg-slate-800 text-slate-300 max-md:mt-8">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c155c70bd115a62ce32391bfc6a5958ff858b356511280d6444dd11ac7c81d36?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c155c70bd115a62ce32391bfc6a5958ff858b356511280d6444dd11ac7c81d36?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c155c70bd115a62ce32391bfc6a5958ff858b356511280d6444dd11ac7c81d36?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c155c70bd115a62ce32391bfc6a5958ff858b356511280d6444dd11ac7c81d36?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c155c70bd115a62ce32391bfc6a5958ff858b356511280d6444dd11ac7c81d36?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c155c70bd115a62ce32391bfc6a5958ff858b356511280d6444dd11ac7c81d36?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c155c70bd115a62ce32391bfc6a5958ff858b356511280d6444dd11ac7c81d36?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c155c70bd115a62ce32391bfc6a5958ff858b356511280d6444dd11ac7c81d36?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                                className="aspect-square w-[29px]"
                              />
                              <div className="mt-5" >
                                <span className="uppercase">c</span>utting edge
                                curriculum
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow self-stretch p-3.5 w-full text-base font-medium leading-6 lowercase rounded bg-slate-800 text-slate-300 max-md:mt-8">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b5d48cc73006f1f8a831a3ce25951fc92156f643f1015f7127d015eb9b15796?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                                className="aspect-square w-[31px]"
                              />
                              <div className="mt-5">
                                <span className="uppercase">c</span>onnect with
                                top employers
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow self-stretch p-3.5 w-full text-base font-medium leading-6 lowercase rounded bg-slate-800 text-slate-300 max-md:mt-8">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e23961b716a039519cec5fa0db61e4089a46b5d44e9c1152ddc6879a2542f8b1?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                                className="aspect-[1.16] w-[35px]"
                              />
                              <div className="mt-5">
                                <span className="uppercase">w</span>orld-class
                                services
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-36 text-6xl font-bold bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[69.6px] max-md:mt-10 max-md:text-4xl" style={{ backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
        Curriculum
      </div>
      <div className="flex flex-col items-center mt-5 text-lg font-medium leading-7 text-center text-slate-400 w-full max-w-[878px]">
            <div className="w-full">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
            </div>
        
            <Swiper
                modules={[Navigation, Pagination, A11y,Autoplay]}
                spaceBetween={50}
                loop
                navigation
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="w-full mt-5"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
              {/* 1 */}
                <SwiperSlide>
                    <div className="flex flex-wrap justify-center gap-5 mt-4 max-w-[1231px] max-md:mt-2 max-md:max-w-full mx-auto">
                        <div className={`flex flex-col justify-center leading-7 uppercase cursor-pointer active-day`} >
                            <div className="flex flex-col justify-center items-center p-2 rounded-full border-2 border-dashed border-slate-700">
                                <div className={`flex justify-center text-white items-center rounded-full h-[140px] w-[140px] max-md:px-3 bg-amber-600`}>
                                    Prepare To Get Started
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-12 p-10 w-full text-2xl font-semibold leading-10 text-white rounded-2xl border border-solid bg-neutral-800 border-neutral-800 max-w-[1275px] max-md:px-5 max-md:max-w-full mx-auto">
                        <div className="mt-7 text-center max-md:max-w-full">Foundations of Product Design (Weeks 1-2)</div>
                        <div className="mt-2 text-lg leading-7 text-slate-400 max-md:max-w-full">Introduction to product design principles and methodologies Overview of design thinking and human-centered design Understanding user needs and problem definition Basics of design tools and software</div>
                    </div>
                </SwiperSlide>
              {/* 2 */}
                <SwiperSlide>
                    <div className="flex flex-wrap justify-center gap-5 mt-4 max-w-[1231px] max-md:mt-2 max-md:max-w-full mx-auto">
                        <div className={`flex flex-col justify-center leading-7 uppercase cursor-pointer active-day`} >
                            <div className="flex flex-col justify-center items-center p-2 rounded-full border-2 border-dashed border-slate-700">
                                <div className={`flex text-white justify-center items-center rounded-full h-[140px] w-[140px] max-md:px-3 bg-amber-600`}>
                                  Week 2-3
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-12 p-10 w-full text-2xl font-semibold leading-10 text-white rounded-2xl border border-solid bg-neutral-800 border-neutral-800 max-w-[1275px] max-md:px-5 max-md:max-w-full mx-auto">
                        <div className="mt-7 text-center max-md:max-w-full">User Research and Empathy (Weeks 3-4)</div>
                        <div className="mt-2 text-lg leading-7 text-slate-400 max-md:max-w-full">Conducting user interviews and surveys
                            Creating user personas and empathy maps
                            Analyzing and synthesizing research findings
                            Introduction to journey mapping and user flows</div>
                    </div>
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                    <div className="flex flex-wrap justify-center gap-5 mt-4 max-w-[1231px] max-md:mt-2 max-md:max-w-full mx-auto">
                        <div className={`flex flex-col justify-center leading-7 uppercase cursor-pointer active-day`} >
                            <div className="flex flex-col justify-center items-center p-2 rounded-full border-2 border-dashed border-slate-700">
                                <div className={`flex text-white  justify-center items-center rounded-full h-[140px] w-[140px] max-md:px-3 bg-amber-600`}>
                                    Week 3-4
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-12 p-10 w-full text-2xl font-semibold leading-10 text-white rounded-2xl border border-solid bg-neutral-800 border-neutral-800 max-w-[1275px] max-md:px-5 max-md:max-w-full mx-auto">
                        <div className="mt-7 text-center max-md:max-w-full">User Research and Empathy (Weeks 3-4)</div>
                        <div className="mt-2 text-lg leading-7 text-slate-400 max-md:max-w-full">Conducting user interviews and surveys
                            Creating user personas and empathy maps
                            Analyzing and synthesizing research findings
                            Introduction to journey mapping and user flows</div>
                    </div>
                </SwiperSlide>
                
                {/* 4 */}
                <SwiperSlide>
                    <div className="flex flex-wrap justify-center gap-5 mt-4 max-w-[1231px] max-md:mt-2 max-md:max-w-full mx-auto">
                        <div className={`flex flex-col justify-center leading-7 uppercase cursor-pointer active-day`} >
                            <div className="flex flex-col justify-center items-center p-2 rounded-full border-2 border-dashed border-slate-700">
                                <div className={`flex text-white  justify-center items-center rounded-full h-[140px] w-[140px] max-md:px-3 bg-amber-600`}>
                                    Week 5-6
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-12 p-10 w-full text-2xl font-semibold leading-10 text-white rounded-2xl border border-solid bg-neutral-800 border-neutral-800 max-w-[1275px] max-md:px-5 max-md:max-w-full mx-auto">
                        <div className="mt-7 text-center max-md:max-w-full">Ideation and Concept Development (Weeks 5-6)</div>
                        <div className="mt-2 text-lg leading-7 text-slate-400 max-md:max-w-full">Brainstorming techniques and ideation sessions
                          Sketching and wireframing concepts
                          Introduction to rapid prototyping
                          Iterative design and feedback loops</div>
                    </div>
                </SwiperSlide>

                {/* 5 */}
                <SwiperSlide>
                    <div className="flex flex-wrap justify-center gap-5 mt-4 max-w-[1231px] max-md:mt-2 max-md:max-w-full mx-auto">
                        <div className={`flex flex-col justify-center leading-7 uppercase cursor-pointer active-day`} >
                            <div className="flex flex-col justify-center items-center p-2 rounded-full border-2 border-dashed border-slate-700">
                                <div className={`flex text-white  justify-center items-center rounded-full h-[140px] w-[140px] max-md:px-3 bg-amber-600`}>
                                    Week 7-8
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-12 p-10 w-full text-2xl font-semibold leading-10 text-white rounded-2xl border border-solid bg-neutral-800 border-neutral-800 max-w-[1275px] max-md:px-5 max-md:max-w-full mx-auto">
                        <div className="mt-7 text-center max-md:max-w-full">Prototyping and Usability Testing (Weeks 7-8)</div>
                        <div className="mt-2 text-lg leading-7 text-slate-400 max-md:max-w-full">Prototyping with low-fidelity and high-fidelity tools
                          Conducting usability tests with prototypes
                          Iterative design based on user feedback
                          Introduction to usability heuristics and principles</div>
                    </div>
                </SwiperSlide>

                {/* 6 */}
                <SwiperSlide>
                    <div className="flex flex-wrap justify-center gap-5 mt-4 max-w-[1231px] max-md:mt-2 max-md:max-w-full mx-auto">
                        <div className={`flex flex-col justify-center leading-7 uppercase cursor-pointer active-day`} >
                            <div className="flex flex-col justify-center items-center p-2 rounded-full border-2 border-dashed border-slate-700">
                                <div className={`flex text-white  justify-center items-center rounded-full h-[140px] w-[140px] max-md:px-3 bg-amber-600`}>
                                    Week 9-10
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-12 p-10 w-full text-2xl font-semibold leading-10 text-white rounded-2xl border border-solid bg-neutral-800 border-neutral-800 max-w-[1275px] max-md:px-5 max-md:max-w-full mx-auto">
                        <div className="mt-7 text-center max-md:max-w-full">Visual Design and UI/UX Principles (Weeks 9-10)</div>
                        <div className="mt-2 text-lg leading-7 text-slate-400 max-md:max-w-full">Fundamentals of visual design: color theory, typography, layout
                        Introduction to UI/UX design principles
                        Creating high-fidelity mockups and interactive prototypes
                        Designing for accessibility and responsive design</div>
                    </div>
                </SwiperSlide>

                {/* 7 */}
                <SwiperSlide>
                    <div className="flex flex-wrap justify-center gap-5 mt-4 max-w-[1231px] max-md:mt-2 max-md:max-w-full mx-auto">
                        <div className={`flex flex-col justify-center leading-7 uppercase cursor-pointer active-day`} >
                            <div className="flex flex-col justify-center items-center p-2 rounded-full border-2 border-dashed border-slate-700">
                                <div className={`flex text-white  justify-center items-center rounded-full h-[140px] w-[140px] max-md:px-3 bg-amber-600`}>
                                    Week 11-14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-12 p-10 w-full text-2xl font-semibold leading-10 text-white rounded-2xl border border-solid bg-neutral-800 border-neutral-800 max-w-[1275px] max-md:px-5 max-md:max-w-full mx-auto">
                        <div className="mt-7 text-center max-md:max-w-full"> Design Systems, Collaboration, and Soft Skills Training (Weeks 11-14)</div>
                        <div className="mt-2 text-lg leading-7 text-slate-400 max-md:max-w-full">Introduction to design systems and component libraries
                          Collaboration tools and methodologies for design teams
                          Version control and file management best practices
                          Soft skills training integrated throughout the curriculum</div>
                    </div>
                </SwiperSlide>

                {/* 8 */}
                <SwiperSlide>
                    <div className="flex flex-wrap justify-center gap-5 mt-4 max-w-[1231px] max-md:mt-2 max-md:max-w-full mx-auto">
                        <div className={`flex flex-col justify-center leading-7 uppercase cursor-pointer active-day`} >
                            <div className="flex flex-col justify-center items-center p-2 rounded-full border-2 border-dashed border-slate-700">
                                <div className={`flex text-white  justify-center items-center rounded-full h-[140px] w-[140px] max-md:px-3 bg-amber-600`}>
                                    Week 15-16
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-12 p-10 w-full text-2xl font-semibold leading-10 text-white rounded-2xl border border-solid bg-neutral-800 border-neutral-800 max-w-[1275px] max-md:px-5 max-md:max-w-full mx-auto">
                        <div className="mt-7 text-center max-md:max-w-full">Portfolio Preparation, Mock Interviews, and Career Readiness <br /> (Weeks 15-16)</div>
                        <div className="mt-2 text-lg leading-7 text-slate-400 max-md:max-w-full">Reviewing and refining project work for inclusion in portfolios
                          Creating an online portfolio website
                          Conducting mock interviews with industry professionals
                          Job search strategies: networking, job boards, and recruiters
                          Resume building and LinkedIn profile optimization</div>
                    </div>
                </SwiperSlide>
              

            </Swiper>
        </div>









      <div className="mt-32 text-6xl px-6 font-bold text-white bg-clip-text leading-[69.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl"  style={{backgroundImage: 'linear-gradient(92deg, #FF8E26 70.11%, #9C4DFF 90.07%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
        <span className="text-white">Spark Your Curiosity,</span> Dive Deep
      </div>
      <div className="mt-5 text-lg px-12 font-medium tracking-normal leading-7 text-slate-400 max-md:max-w-full">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </div>
      <div className="flex flex-col justify-center  p-10 mt-16 w-full max-w-screen-xl rounded-2xl border border-solid bg-neutral-800 border-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full" >
        <div className="flex gap-5 justify-center max-md:flex-wrap">
          <div className="flex justify-center items-center self-start p-5 bg-yellow-950 h-[93px] rounded-[110px] w-[93px]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/395da9274e0ce9b17771531924d9bd6cdef30c0209f15734ac66aaaf29fed865?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/395da9274e0ce9b17771531924d9bd6cdef30c0209f15734ac66aaaf29fed865?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/395da9274e0ce9b17771531924d9bd6cdef30c0209f15734ac66aaaf29fed865?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/395da9274e0ce9b17771531924d9bd6cdef30c0209f15734ac66aaaf29fed865?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/395da9274e0ce9b17771531924d9bd6cdef30c0209f15734ac66aaaf29fed865?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/395da9274e0ce9b17771531924d9bd6cdef30c0209f15734ac66aaaf29fed865?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/395da9274e0ce9b17771531924d9bd6cdef30c0209f15734ac66aaaf29fed865?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/395da9274e0ce9b17771531924d9bd6cdef30c0209f15734ac66aaaf29fed865?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
              className="aspect-square w-[52px]"
            />
          </div>
          <div className="flex flex-col flex-1 justify-center font-semibold max-md:max-w-full">
            <div className="text-3xl leading-10 text-left text-white max-md:max-w-full">
              Design
            </div>
            <div className="mt-5 text-lg leading-7 text-slate-400 max-md:max-w-full">
              Discover human-centered design and Design methodology (Design
              research tools, Insight presentation software, Problem scoping
              tools, Ideation tools, User testing tools, Prototyping software
              training)
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-10 mt-8 w-full max-w-screen-xl rounded-2xl border border-solid bg-neutral-800 border-neutral-800 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-center max-md:flex-wrap">
          <div className="flex justify-center items-center p-5 bg-fuchsia-600 bg-opacity-10 h-[97px] rounded-[110px] w-[97px]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8e465fe7e5124b47950caf5081564a1b8054c739bad3f8086ed36b8cac2f0fdd?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e465fe7e5124b47950caf5081564a1b8054c739bad3f8086ed36b8cac2f0fdd?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e465fe7e5124b47950caf5081564a1b8054c739bad3f8086ed36b8cac2f0fdd?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e465fe7e5124b47950caf5081564a1b8054c739bad3f8086ed36b8cac2f0fdd?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e465fe7e5124b47950caf5081564a1b8054c739bad3f8086ed36b8cac2f0fdd?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e465fe7e5124b47950caf5081564a1b8054c739bad3f8086ed36b8cac2f0fdd?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e465fe7e5124b47950caf5081564a1b8054c739bad3f8086ed36b8cac2f0fdd?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e465fe7e5124b47950caf5081564a1b8054c739bad3f8086ed36b8cac2f0fdd?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
              className="w-14 aspect-square"
            />
          </div>
          <div className="flex flex-col flex-1 justify-center self-start font-semibold leading-[150%] max-md:max-w-full">
            <div className="text-3xl text-left text-white max-md:max-w-full">
              Success Skills
            </div>
            <div className="mt-5 text-lg text-slate-400 max-md:max-w-full">
              Growth Mindset, Self Reflection & Awareness, Cognitive Biases,
              Design Thinking
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-stretch px-20 py-16 mt-44 w-full bg-blue-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="self-center text-5xl font-bold text-white bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          Learnex Students <span style={{backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', color: 'transparent' }}> Work at Amazing Companies</span>
        </div>
      <Swiper
                modules={[ Pagination,Autoplay]}
                spaceBetween={50}
                loop
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="w-full mt-5"
                onSlideChange={() => console.log('slide change')}>
                <SwiperSlide>
    
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b278f4d405e1e8bb3e6f01400e14c744f7f668a33945c957bc56dfacaa9971e9?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="aspect-[1.2] fill-slate-300 w-[42px]"
                />
                <div className="mt-7 text-2xl font-medium leading-9 text-white max-md:max-w-full">
                  People now recognise that having a good performance
                  conversation means that something happens as a result.
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/582568cf41a1b4c5dab88189ec527e64abe26a34981f02b8fad44f12e7aade14?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="self-end mt-6 aspect-[1.2] fill-slate-300 w-[42px]"
                />
                <div className="flex flex-col items-start p-5 mt-14 max-w-full bg-sky-900 rounded-xl w-[206px] max-md:mt-10">
                  <div className="text-lg font-semibold tracking-tight leading-6 text-white">
                    Albert Flores
                  </div>
                  <div className="mt-1 text-sm leading-5 text-slate-200">
                    UI/UX Designer
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow pt-20 pb-7 min-h-[485px] max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95685e15fcfcfe8db2678a9f64d5f07b1a398ebb0b624615e15c94f3858b4c78?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95685e15fcfcfe8db2678a9f64d5f07b1a398ebb0b624615e15c94f3858b4c78?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95685e15fcfcfe8db2678a9f64d5f07b1a398ebb0b624615e15c94f3858b4c78?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95685e15fcfcfe8db2678a9f64d5f07b1a398ebb0b624615e15c94f3858b4c78?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/95685e15fcfcfe8db2678a9f64d5f07b1a398ebb0b624615e15c94f3858b4c78?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95685e15fcfcfe8db2678a9f64d5f07b1a398ebb0b624615e15c94f3858b4c78?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95685e15fcfcfe8db2678a9f64d5f07b1a398ebb0b624615e15c94f3858b4c78?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95685e15fcfcfe8db2678a9f64d5f07b1a398ebb0b624615e15c94f3858b4c78?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative shrink-0 mt-60 rounded-3xl h-[134px] max-md:mt-10 max-md:max-w-full" />
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
     
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b278f4d405e1e8bb3e6f01400e14c744f7f668a33945c957bc56dfacaa9971e9?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="aspect-[1.2] fill-slate-300 w-[42px]"
                />
                <div className="mt-7 text-2xl font-medium leading-9 text-white max-md:max-w-full">
                Learnex's product design bootcamp was a genuine game-changer. Supportive environment, practical
                 curriculum, invaluable networking. Left feeling inspired and ready for anything
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/582568cf41a1b4c5dab88189ec527e64abe26a34981f02b8fad44f12e7aade14?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="self-end mt-6 aspect-[1.2] fill-slate-300 w-[42px]"
                />
                <div className="flex flex-col items-start p-5 mt-14 max-w-full bg-sky-900 rounded-xl w-[206px] max-md:mt-10">
                  <div className="text-lg font-semibold tracking-tight leading-6 text-white">
                  Izzath Jabin
                  </div>
                  <div className="mt-1 text-sm leading-5 text-slate-200">
                  Cohort 1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow pt-20 pb-7 min-h-[485px] max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={Image3}
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative shrink-0 mt-60 rounded-3xl h-[134px] max-md:mt-10 max-md:max-w-full" />
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
       
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b278f4d405e1e8bb3e6f01400e14c744f7f668a33945c957bc56dfacaa9971e9?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="aspect-[1.2] fill-slate-300 w-[42px]"
                />
                <div className="mt-7 text-2xl font-medium leading-9 text-white max-md:max-w-full">
                Learnex's product design bootcamp was a genuine game-changer. The supportive environment, hands-on curriculum, and invaluable networking opportunities left me 
                feeling inspired and fully prepared for the design field
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/582568cf41a1b4c5dab88189ec527e64abe26a34981f02b8fad44f12e7aade14?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="self-end mt-6 aspect-[1.2] fill-slate-300 w-[42px]"
                />
                <div className="flex flex-col items-start p-5 mt-14 max-w-full bg-sky-900 rounded-xl w-[206px] max-md:mt-10">
                  <div className="text-lg font-semibold tracking-tight leading-6 text-white">
                  Akhil
                  </div>
                  <div className="mt-1 text-sm leading-5 text-slate-200">
                  Cohort 1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow pt-20 pb-7 min-h-[485px] max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={Image2}
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative shrink-0 mt-60 rounded-3xl h-[134px] max-md:mt-10 max-md:max-w-full" />
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b278f4d405e1e8bb3e6f01400e14c744f7f668a33945c957bc56dfacaa9971e9?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="aspect-[1.2] fill-slate-300 w-[42px]"
                />
                <div className="mt-7 text-2xl font-medium leading-9 text-white max-md:max-w-full">
                Learnex's product design bootcamp was a revelation. The supportive atmosphere, hands-on 
                approach, and networking opportunities made it a transformative experience. I left feeling not just educated, but genuinely inspired and ready to in the design world.
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/582568cf41a1b4c5dab88189ec527e64abe26a34981f02b8fad44f12e7aade14?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="self-end mt-6 aspect-[1.2] fill-slate-300 w-[42px]"
                />
                <div className="flex flex-col items-start p-5 mt-14 max-w-full bg-sky-900 rounded-xl w-[206px] max-md:mt-10">
                  <div className="text-lg font-semibold tracking-tight leading-6 text-white">
                  Sumiya Salam
                  </div>
                  <div className="mt-1 text-sm leading-5 text-slate-200">
                  Cohort 1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow pt-20 pb-7 min-h-[485px] max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={Image1}
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative shrink-0 mt-60 rounded-3xl h-[134px] max-md:mt-10 max-md:max-w-full" />
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="flex gap-5 justify-between px-5 mt-16 max-md:mt-10">
        <div className="shrink-0 h-2.5 bg-violet-100 rounded-[60px] w-[82px]" />
        <div className="shrink-0 h-2.5 bg-slate-600 rounded-[60px] w-[52px]" />
        <div className="shrink-0 h-2.5 bg-slate-600 rounded-[60px] w-[52px]" />
        <div className="shrink-0 h-2.5 bg-slate-600 rounded-[60px] w-[52px]" />
      </div> */}
      <div className="mt-36 text-6xl font-bold text-white bg-clip-text leading-[69.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <span className="text-white">Product </span>designer
      </div>
      <div className="mt-14 w-full max-w-[1270px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center self-stretch p-10 w-full rounded-2xl border border-solid bg-neutral-800 border-neutral-800 max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <div className="justify-center max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                    <div className="flex justify-center items-center self-stretch px-5 m-auto bg-amber-500 h-[110px] rounded-[110px] w-[110px] max-md:mt-8">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b78b8819d2c0df9010dd97525f6272ba2f767895e5df40103f3502b9befc749?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                        className="aspect-square w-[62px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center font-semibold leading-[150%] max-md:mt-7">
                      <div className="text-1xl text-slate-400">
                        Average Salary
                      </div>
                      <div className="mt-4 text-5xl text-left text-white max-md:text-4xl">
                        6-9 Lakhs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow justify-center self-stretch px-9 py-10 w-full rounded-2xl border border-solid bg-neutral-800 border-neutral-800 max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                  <div className="flex justify-center items-center px-5 mx-auto bg-indigo-400 h-[110px] rounded-[110px] w-[110px] max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1cee6de36388adf309aef2c038d48e4ed496e865f66c157c1e512658dd45851?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="aspect-square w-[62px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center self-stretch font-semibold leading-[150%] max-md:mt-10">
                    <div className="text-1xl text-slate-400">
                    Career students pursue
                    </div>
                    <div className="mt-2.5 text-5xl text-white max-md:text-4xl">
                    UI UX Designer Product Designer UI Designer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24  text-6xl font-bold bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[69.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl" style={{ backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
        Outcomes
      </div>
      <div className="mt-2 text-lg font-medium tracking-normal leading-8 text-slate-400 max-md:max-w-full">
        A career extends well beyond that first big job offer.
        <br />
        We prepare you for everything as a Learner & continue to support you as
        an Alumnus.
      </div>
      <div className="px-5 mt-11 w-full max-w-[1317px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-8 mx-auto w-full rounded-xl border border-solid bg-neutral-800 border-zinc-700 max-md:px-5 max-md:mt-10">
              <div className="flex gap-4 text-2xl font-semibold tracking-tighter leading-9 text-white">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/befa8fe0dc3f732d7f64d880e3a924c2d30ae72729e70c466dfb6f9e09d3a95d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/befa8fe0dc3f732d7f64d880e3a924c2d30ae72729e70c466dfb6f9e09d3a95d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/befa8fe0dc3f732d7f64d880e3a924c2d30ae72729e70c466dfb6f9e09d3a95d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/befa8fe0dc3f732d7f64d880e3a924c2d30ae72729e70c466dfb6f9e09d3a95d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/befa8fe0dc3f732d7f64d880e3a924c2d30ae72729e70c466dfb6f9e09d3a95d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/befa8fe0dc3f732d7f64d880e3a924c2d30ae72729e70c466dfb6f9e09d3a95d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/befa8fe0dc3f732d7f64d880e3a924c2d30ae72729e70c466dfb6f9e09d3a95d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/befa8fe0dc3f732d7f64d880e3a924c2d30ae72729e70c466dfb6f9e09d3a95d?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="shrink-0 max-w-full aspect-square w-[103px]"
                />
                <div className="flex-1 my-auto">Master Essential Skills</div>
              </div>
              <div className="mt-5 text-base tracking-normal leading-6 text-slate-300">
              Through hands-on projects and expert guidance, you'll hone your abilities and build a robust skill set that empowers you to tackle real-world design challenges with confidence.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-8 mx-auto w-full rounded-xl border border-solid bg-neutral-800 border-zinc-700 max-md:px-5 max-md:mt-10">
              <div className="flex gap-4 text-2xl font-semibold tracking-tighter leading-9 text-white">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ac847df4e1024630216d22b1c2d54aaca8793f445ee391dbbbe2b401436bdbf?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ac847df4e1024630216d22b1c2d54aaca8793f445ee391dbbbe2b401436bdbf?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ac847df4e1024630216d22b1c2d54aaca8793f445ee391dbbbe2b401436bdbf?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ac847df4e1024630216d22b1c2d54aaca8793f445ee391dbbbe2b401436bdbf?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ac847df4e1024630216d22b1c2d54aaca8793f445ee391dbbbe2b401436bdbf?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ac847df4e1024630216d22b1c2d54aaca8793f445ee391dbbbe2b401436bdbf?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ac847df4e1024630216d22b1c2d54aaca8793f445ee391dbbbe2b401436bdbf?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ac847df4e1024630216d22b1c2d54aaca8793f445ee391dbbbe2b401436bdbf?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="shrink-0 max-w-full aspect-square w-[103px]"
                />
                <div className="flex-1 my-auto">Elevate Your Portfolio</div>
              </div>
              <div className="mt-5 text-base tracking-normal leading-6 text-slate-300">
              Showcase your talent and expertise with pride. Product design bootcamps provide the perfect platform to create compelling portfolio pieces that highlight your creativity, problem-solving prowess, and attention to detail.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-8 mx-auto w-full rounded-xl border border-solid bg-neutral-800 border-zinc-700 max-md:px-5 max-md:mt-10">
              <div className="flex gap-4 text-2xl font-semibold tracking-tighter leading-9 text-white">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d87cb3ed3a3db076197698e3d4b168e1e6a4953ed670797d5a60af15f1ae7a35?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87cb3ed3a3db076197698e3d4b168e1e6a4953ed670797d5a60af15f1ae7a35?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87cb3ed3a3db076197698e3d4b168e1e6a4953ed670797d5a60af15f1ae7a35?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87cb3ed3a3db076197698e3d4b168e1e6a4953ed670797d5a60af15f1ae7a35?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87cb3ed3a3db076197698e3d4b168e1e6a4953ed670797d5a60af15f1ae7a35?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87cb3ed3a3db076197698e3d4b168e1e6a4953ed670797d5a60af15f1ae7a35?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87cb3ed3a3db076197698e3d4b168e1e6a4953ed670797d5a60af15f1ae7a35?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87cb3ed3a3db076197698e3d4b168e1e6a4953ed670797d5a60af15f1ae7a35?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="shrink-0 max-w-full aspect-square w-[103px]"
                />
                <div className="flex-1 my-auto">
                Cultivate Lifelong Learning
                </div>
              </div>
              <div className="mt-5 text-base tracking-normal leading-6 text-slate-300">
              Embrace a mindset of continuous learning and growth. Product design bootcamps are just the beginning of your journey, providing a solid foundation upon which to build.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 text-6xl font-bold text-white bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[69.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl" style={{backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
        <span className="text-white">Tuition</span> Cost & Aid
      </div>
      <div className="flex flex-col p-3 mt-7 w-full max-w-screen-xl rounded bg-slate-800 max-md:max-w-full">
        <div className="flex gap-5 justify-between p-5 w-full font-medium rounded bg-slate-700 max-md:flex-wrap max-md:max-w-full">
          <div className="text-4xl leading-10 text-white">Fixed Fee</div>
          <div className="flex gap-5 justify-between whitespace-nowrap">
            <div className="text-4xl leading-10 text-white">₹45,000</div>
            <div className="text-2xl leading-10 text-slate-300"><s>₹50,000</s></div>
          </div>
        </div>
        {/* <div className="mt-6 text-xl text-white leading-[56px] max-md:max-w-full">
          • Scholarships upto 10,000/- available
          <br />• Plans starting ₹45,000
          <br />• 12 month interest free EMIs
          <br />• Lifetime Career Assistance
        </div> */}
      </div>
      <div className="flex justify-center items-center p-14 mt-24 w-full max-w-screen-xl text-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1046px] max-md:max-w-full">
          <div className="text-6xl font-bold text-center leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Change occurs one step at a time. Begin yours Today.
          </div>
          <div className="flex gap-5 justify-between self-center mt-16 text-2xl font-semibold leading-9 capitalize max-md:flex-wrap max-md:mt-10">
            <div className="flex gap-2 justify-center px-5 py-3.5 rounded-lg bg-gradient-to-r from-[#FF8E26] to-[#9C4DFF]" >
              <div >Request a callback</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/08073c0e17042d9948e62a911fa0d4ca9052cf88b86c60d690b1976cbba9d14f?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
            </div>
            <div className="flex gap-2 justify-center px-5 py-3.5 rounded-lg bg-slate-800">
              <div>Download Brochure</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/417ebaf87989c6a2d2be7b3650cdf9bc6b1a73b658be2879d7b2968d334853d0?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
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
          <div className="mt-8 text-6xl font-bold text-white bg-clip-text  leading-[70px] max-md:text-4xl max-md:leading-[54px]" style={{ backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            <span >Get in</span> Touch with Us
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
    </>
  )
}

export default Bootcamp