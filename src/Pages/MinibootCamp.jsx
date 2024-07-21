import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Faq from '../Components/FAQ/Faq'
import Content from '../Components/DayCard/Content'
import Programimg from '../assets/image/program.png'
import { Link } from 'react-router-dom'
import bootimg1 from '../assets/image/boot2.png'
import bootimg2 from '../assets/image/boot1.png'
import Footer from '../Components/Footer/Footer'

const MinibootCamp = () => {
  return (
    <>
 <div className="flex overflow-x-auto flex-col justify-center items-start bg-neutral-900">
      <div className="flex flex-col items-center px-5 w-full max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          
          <Navbar/>


          <div className="mt-10 px-0  w-full max-w-[1266px] max-md:mt-10 max-md:max-w-full" style={{backgroundColor:"#1b2031"}}>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto text-lg font-medium text-white max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl font-bold bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]" style={{ backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                UI UX Design <br /> <span className="text-white">Mini Bootcamp</span>
              </div>
              <div className="mt-4 tracking-normal leading-7 text-slate-400 max-md:max-w-full">
              Explore Our UI/UX Design Mini Bootcamp. Dive into the principles of user-centric 
              design, master industry-leading tools, and unleash your creativity to shape the digital world.
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
            <div className="flex flex-col grow px-6 py-10  w-full bg-blue-800 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-bold text-white max-md:max-w-full">
                Bootcamp Start on, July 14
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
                  ₹1999
                </div>
                <div className="my-auto text-2xl font-bold text-lime-400">
                  Limited seats of 30
                </div>
              </div>
              <div className="flex gap-2 justify-center self-start px-5 py-3 mt-5 text-base font-semibold leading-6 text-white capitalize rounded-lg" style={{ background: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)',  color: 'white' }}>
                <div>
                <Link className="capitalize" to={"/checkout"}  
                state={{ CourseName: "UI UX Design Min Bootcamp",
                Courseprice: 1999,
                CourseDuration: "12 Days Program" }}>Enroll Now</Link>
                </div>
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
              <div className="text-xl font-bold" style={{color:"#d4e328"}} >Live</div>
              <div className="text-base tracking-normal text-slate-400">
                Happy Students
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center self-stretch px-5 py-3.5 w-full bg-gray-800 rounded-xl border border-solid border-neutral-800 leading-[150%] max-md:mt-10">
              <div className="text-xl font-bold text-white" style={{color:"#d4e328"}} >12 Days</div>
              <div className="text-base tracking-normal text-slate-400">
                Fellowship Timeline
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center self-stretch px-5 py-3.5 w-full bg-gray-800 rounded-xl border border-solid border-neutral-800 leading-[150%] max-md:mt-10">
              <div className="text-xl font-bold text-white" style={{color:"#d4e328"}} >Metorship</div>
              <div className="text-base tracking-normal text-slate-400">
                With Exprience designer
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center self-stretch px-5 py-3.5 w-full bg-gray-800 rounded-xl border border-solid border-neutral-800 leading-[150%] max-md:mt-10">
              <div className="text-xl font-bold text-white" style={{color:"#d4e328"}} >
                Limited batch size
              </div>
              <div className="text-base tracking-normal text-slate-400">
                Hands on sessions
              </div>
            </div>
          </div>
        </div>
      </div>
          <div className="mt-32 text-6xl font-bold text-white bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[69.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl" style={{ backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Comming <span className="text-white">Soon</span>
          </div>
          <div className="mt-14 w-full max-w-[1270px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch p-10 w-full rounded-2xl border border-solid bg-neutral-800 border-neutral-800 max-md:px-5 max-md:mt-8 max-md:max-w-full">
                  <div className="justify-center max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                        <div className="flex justify-center items-center self-stretch px-5 m-auto bg-yellow-950 h-[107px] rounded-[110px] w-[107px] max-md:mt-8">
                          <div className="flex overflow-hidden relative flex-col justify-center py-0.5 aspect-square w-[67px]">
                            <img
                              loading="lazy"
                              src={bootimg2}
                              className="object-cover absolute inset-0 size-full"
                            />
                            {/* <div className="relative shrink-0 w-full h-16 bg-amber-500" /> */}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-center font-semibold leading-[150%] max-md:mt-7">
                          <div className="text-2xl text-slate-400">
                            Application deadline
                          </div>
                          <div className="mt-4 text-5xl text-center text-white max-md:text-4xl">
                            18 Jan, 2024
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
                      <div className="flex justify-center items-center px-3.5 mx-auto bg-indigo-400 bg-opacity-20 h-[108px] rounded-[120px] w-[108px] max-md:mt-10">
                        <div className="flex overflow-hidden relative flex-col pb-2 aspect-square w-[67px]">
                          <img
                            loading="lazy"
                            src={bootimg1}
                            className="object-cover absolute inset-0 size-full"
                          />
                          {/* <div className="relative shrink-0 bg-indigo-400 h-[71px]" /> */}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center self-stretch font-semibold leading-[150%] max-md:mt-10">
                        <div className="text-2xl text-slate-400">
                          Cohort starts
                        </div>
                        <div className="mt-2.5 text-5xl text-white max-md:text-4xl">
                          21 Jan, 2024
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-32 text-6xl font-bold leading-[69.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl" style={{ backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
    What will you Learn
</div>

          <Content/>
          
          {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/388c517b1577e8958ae70fec382ae038c7d0f3ba950be49604f7dce86c01800e?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
            className="self-start mt-9 ml-36 border border-solid aspect-square border-neutral-800 fill-neutral-800 stroke-[1px] stroke-neutral-800 w-[68px] max-md:ml-2.5"
          /> */}
        
          <div className="flex gap-5 self-end mt-32 text-base font-semibold leading-6 capitalize max-md:flex-wrap max-md:mt-10">
            <div className="flex gap-2 justify-center px-5 py-3.5 bg-orange-200 rounded-lg text-slate-900">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bb10c540a9de3737e80cbb055b83215ebfb891d28ea70d89c1328a3333d752d?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                className="shrink-0 w-6 aspect-square"
              />
              <div>Call Now</div>
            </div>
            <div className="flex gap-2 justify-center px-5 py-3.5 text-white bg-green-400 rounded-lg">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1db59f5d9fdf1536f08de55678e37d056620aea0276dfb5ea13a03147ef1b660?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1db59f5d9fdf1536f08de55678e37d056620aea0276dfb5ea13a03147ef1b660?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1db59f5d9fdf1536f08de55678e37d056620aea0276dfb5ea13a03147ef1b660?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1db59f5d9fdf1536f08de55678e37d056620aea0276dfb5ea13a03147ef1b660?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1db59f5d9fdf1536f08de55678e37d056620aea0276dfb5ea13a03147ef1b660?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1db59f5d9fdf1536f08de55678e37d056620aea0276dfb5ea13a03147ef1b660?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1db59f5d9fdf1536f08de55678e37d056620aea0276dfb5ea13a03147ef1b660?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1db59f5d9fdf1536f08de55678e37d056620aea0276dfb5ea13a03147ef1b660?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                className="shrink-0 aspect-[0.92] w-[22px]"
              />
              <div>Message On whatsapp</div>
            </div>
          </div>
          <div className="flex justify-center items-center self-stretch px-16 py-3.5 mt-6 w-full bg-gray-800 border border-solid border-slate-500 leading-[150%] max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between w-full max-w-[1194px] max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col justify-center p-5 bg-gray-800 rounded-xl border border-solid border-neutral-800">
                <div className="text-base tracking-normal text-slate-300">
                  Cohort 6 starts on
                </div>
                <div className="text-xl font-bold text-white">12 Days</div>
              </div>
              <div className="flex flex-col justify-center p-5 bg-gray-800 rounded-xl border border-solid border-neutral-800">
                <div className="text-base tracking-normal text-slate-300">
                  Time Commitment
                </div>
                <div className="text-xl font-bold text-white">
                  1-2 Hours/Day
                </div>
              </div>
              <div className="flex flex-col justify-center items-start p-5 whitespace-nowrap bg-gray-800 rounded-xl border border-solid border-neutral-800">
                <div className="text-base tracking-normal text-slate-300">
                  Cast
                </div>
                <div className="flex gap-1.5">
                  <div className="text-xl font-bold text-white">₹1,999</div>
                  <div className="text-lg font-medium text-slate-400">
                  <s>₹3,999</s>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-center px-5 py-3.5 my-auto text-base font-semibold text-white capitalize rounded-lg" style={{ background: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)'}}>
                <Link className="capitalize" to={"/checkout"}  
                state={{ CourseName: "UI UX Design Min Bootcamp",
                Courseprice: 1999,
                CourseDuration: "12 Days Program" }}>Enroll Now</Link>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/417ebaf87989c6a2d2be7b3650cdf9bc6b1a73b658be2879d7b2968d334853d0?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="shrink-0 my-auto w-5 aspect-square"
                />
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46804e0c2c01272c0354fd905fa25c37640e6fe96659708851413f9249b84545?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
            className="self-start mt-28 ml-72  aspect-square stroke-[2px] stroke-orange-400 w-[37px] max-md:mt-10 max-md:ml-2.5"
          />
        </div>
        <div className='relative flex-col px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full'>
          <img src={Programimg} alt="" />
          </div>
{/* 
        <div className="flex flex-col items-center bg-black text-white py-20 px-10">
      <h2 className="text-4xl font-bold mb-8" style={{ backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
        How does the program works?
      </h2>
      <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto">

        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-400 transform -translate-x-1/2"></div>

        <div className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center space-x-4 w-1/2 justify-end">
            <div className="bg-orange-500 p-4 rounded-full text-xl">01  <span>Enroll</span></div>
           
          </div>
          <div className="flex items-center space-x-4 w-1/2">
            <span className="hidden md:inline"></span>
          </div>
        </div>


        <div className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center space-x-4 w-1/2">
            <span className="hidden md:inline"></span>
          </div>
          <div className="flex items-center space-x-4 w-1/2 justify-start">
            
            <div className="bg-green-500 p-4 rounded-full text-xl"> <span>Daily Live interactive classes</span> 02</div>
          </div>
        </div>

        
        <div className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center space-x-4 w-1/2 justify-end">
            <div className="bg-purple-500 p-4 rounded-full text-xl">03 <span>Solve a problem</span></div>
            
          </div>
          <div className="flex items-center space-x-4 w-1/2">
            <span className="hidden md:inline"></span>
          </div>
        </div>

        
        <div className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center space-x-4 w-1/2">
            <span className="hidden md:inline"></span>
          </div>
          <div className="flex items-center space-x-4 w-1/2 justify-start">
      
            <div className="bg-teal-500 p-4 rounded-full text-xl">04 <span>Learn Design thinking</span></div>
          </div>
        </div>

        
        <div className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center space-x-4 w-1/2 justify-end">
            <div className="bg-indigo-500 p-4 rounded-full text-xl">05  <span>Hands on Figma Learnings</span></div>
           
          </div>
          <div className="flex items-center space-x-4 w-1/2">
            <span className="hidden md:inline"></span>
          </div>
        </div>

        
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4 w-1/2">
            <span className="hidden md:inline"></span>
          </div>
          <div className="flex items-center space-x-4 w-1/2 justify-start">
     
            <div className="bg-pink-500 p-4 rounded-full text-xl">06        <span>Be portfolio Ready by end of the program</span></div>
          </div>
        </div>
      </div>
    </div> */}


        <div className="flex flex-col justify-center p-20 mt-32 w-full bg-blue-950 max-w-[1443px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="text-6xl font-bold text-white bg-clip-text leading-[69.6px] max-md:max-w-full max-md:text-4xl" style={{ backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 50.07%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            <span className="text-white">Live </span>classes Schedule
          </div>
          <div className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center p-8 mx-auto w-full rounded-xl border border-solid bg-neutral-800 border-zinc-700 max-md:px-5 max-md:mt-8">
                  <div className="flex gap-4 text-2xl font-semibold tracking-tighter leading-9 text-white">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/342ceaa67c91bf23c324e44d1cee67a29e173b06151d970ea0af7679f66e2d2f?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="shrink-0 max-w-full aspect-square w-[103px]"
                    />
                    <div className="flex-1 my-auto">
                      Design Thinking sessions
                    </div>
                  </div>
                  <div className="flex flex-col justify-center px-5 py-4 mt-5 bg-gray-800 rounded-xl border border-solid border-neutral-800 leading-[150%]">
                    <div className="text-xl font-bold text-white">
                    Daily sessions live sessions
                    </div>
                    <div className="text-base tracking-normal text-slate-300">
                    Hack the design thinking process
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center p-8 mx-auto w-full rounded-xl border border-solid bg-neutral-800 border-zinc-700 max-md:px-5 max-md:mt-8">
                  <div className="flex gap-4 text-2xl font-semibold tracking-tighter leading-9 text-white">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35b88a57d404f7e14031b6c5873830e4e6549bdc312b908198a7e76da65798ec?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b88a57d404f7e14031b6c5873830e4e6549bdc312b908198a7e76da65798ec?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b88a57d404f7e14031b6c5873830e4e6549bdc312b908198a7e76da65798ec?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b88a57d404f7e14031b6c5873830e4e6549bdc312b908198a7e76da65798ec?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b88a57d404f7e14031b6c5873830e4e6549bdc312b908198a7e76da65798ec?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b88a57d404f7e14031b6c5873830e4e6549bdc312b908198a7e76da65798ec?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b88a57d404f7e14031b6c5873830e4e6549bdc312b908198a7e76da65798ec?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b88a57d404f7e14031b6c5873830e4e6549bdc312b908198a7e76da65798ec?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="shrink-0 max-w-full aspect-square w-[103px]"
                    />
                    <div className="flex-1 my-auto">Dedicated Figma Hours</div>
                  </div>
                  <div className="flex flex-col justify-center px-5 py-4 mt-5 bg-gray-800 rounded-xl border border-solid border-neutral-800 leading-[150%]">
                    <div className="text-xl font-bold text-white">
                    3 Dedicated Figma Hours
                    </div>
                    <div className="text-base tracking-normal text-slate-300">
                    Our dedicated Figma hours wil help you step on to the field  
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center p-8 mx-auto w-full rounded-xl border border-solid bg-neutral-800 border-zinc-700 max-md:px-5 max-md:mt-8">
                  <div className="flex gap-4 text-2xl font-semibold tracking-tighter leading-9 text-white">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d939544e304604ae3af483796b5432faee287871f392131d50406fb50a79e032?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="shrink-0 max-w-full aspect-square w-[103px]"
                    />
                    <div className="flex-1 my-auto">Job Hunt Master Class</div>
                  </div>
                  <div className="flex flex-col justify-center px-5 py-4 mt-5 bg-gray-800 rounded-xl border border-solid border-neutral-800 leading-[150%]">
                    <div className="text-xl font-bold text-white">
                    Job Hunt Master Class
                    </div>
                    <div className="text-base tracking-normal text-slate-300">
                    Our Job  hunt master class help you plan your career ahead
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 text-6xl font-bold text-white bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[69.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Mini <span style={{ backgroundImage: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Bootcamp?</span> 
        </div>
        <div className="mt-6 text-lg font-medium leading-8 text-slate-400 max-md:max-w-full">
          Read the success stories and heartfelt testimonials from our valued
          clients. Discover why they chose Estatein for their real estate needs.
        </div>
        <div className="flex flex-col p-20 mt-11 w-full text-2xl leading-6 bg-neutral-800 max-w-[1300px] text-slate-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-10 justify-start p-5 bg-gray-800 rounded-lg border border-solid border-slate-600 max-md:flex-wrap max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
              className="shrink-0 aspect-square w-[34px]"
            />
            <div className="my-auto max-md:max-w-full">
            Daily Live Interactive sessions
            </div>
          </div>
          <div className="flex gap-10 justify-start p-5 mt-8 bg-gray-800 rounded-lg border border-solid border-slate-600 max-md:flex-wrap max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
              className="shrink-0 aspect-square w-[34px]"
            />
            <div className="my-auto max-md:max-w-full">Be portfolio ready by end of the program</div>
          </div>
          <div className="flex gap-10 justify-start p-5 mt-8 bg-gray-800 rounded-lg border border-solid border-slate-600 max-md:flex-wrap max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
              className="shrink-0 aspect-square w-[34px]"
            />
            <div className="my-auto max-md:max-w-full">Small batch Size of 30 Students</div>
          </div>
          <div className="flex gap-10 justify-start p-5 mt-8 bg-gray-800 rounded-lg border border-solid border-slate-600 max-md:flex-wrap max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bedf1599d5ff8f0e695ca5f4ce6c8b459cf199d91b6d72a48dd035f2d161f1d?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
              className="shrink-0 aspect-square w-[34px]"
            />
            <div className="my-auto max-md:max-w-full">
            Job Hunt Master class
            </div>
          </div>
        </div>
       
       {/* FAQ? start */}
       <Faq/>
       {/* FAQ END */}
        
        {/* Footer Start  */}
            <Footer/>
         {/* Footer end     */}

      </div>
    </div>
    </>
  )
}

export default MinibootCamp