import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Faq from '../Components/FAQ/Faq';
import imgup from '../assets/image/upcomming.png'
const Home = () => {
    
  return (
    <>
    <div className="flex flex-col  bg-neutral-900">

      <div className="flex overflow-hidden relative flex-col pb-16 w-full fill-gray-800 min-h-[690px] max-md:max-w-full">
       
        <Navbar/>
        
        <div className="flex relative flex-col px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-lg font-medium max-md:mt-10 max-md:max-w-full">
                  <div className="text-6xl font-bold text-white bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    <span className="text-white">Master Tech Skills:</span>{" "}
                    Elevate Your Career with Our Bootcamp
                  </div>
                  <div className="mt-4 tracking-normal leading-7 text-slate-400 max-md:max-w-full">
                    Experience practical learning with immersive projects and
                    personalized guidance from industry professionals, mastering
                    the forefront of technological advancements
                  </div>
                  <div className="flex gap-2.5 justify-between self-start px-3.5 py-2.5 mt-8 text-center text-white whitespace-nowrap rounded border border-white border-solid leading-[150%]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cbe8a4dc61f76283e1bc974decf78960c09c03b2eaa2dc2f90e8dd0fd87dd4d?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="shrink-0 my-auto w-5 aspect-square"
                    />
                    <div>Online</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col items-start px-9 pt-11 pb-7 bg-blue-800 rounded-3xl max-md:px-5 max-md:max-w-full">
                    <div className="text-5xl font-bold text-yellow-300 leading-[50px]">
                      Mini Bootcamp <br />
                      <span className="text-yellow-300">UI UX Design </span>
                    </div>
                    <div className="mt-2.5 text-2xl font-bold leading-7 text-amber-300">
                      12 Days / Program
                    </div>
                    <div className="mt-6 ml-6 text-lg font-medium tracking-normal leading-7 text-slate-200 max-md:ml-2.5">
                      Portfolio ready by end of the program
                    </div>
                    <div className="mt-5 ml-6 text-lg font-medium tracking-normal leading-7 text-slate-200 max-md:ml-2.5">
                      12 Day -Live instructor lead program
                    </div>
                    <div className="flex gap-3 mt-5 ml-6 font-bold leading-[150%] max-md:ml-2.5">
                      <div className="text-2xl tracking-wide text-white">
                        At
                      </div>
                      <div className="justify-center p-2.5 text-3xl tracking-wide text-yellow-300 bg-blue-800 rounded-xl border border-blue-700 border-solid max-md:px-5">
                        ₹2000{" "}
                      </div>
                    </div>
                    <div className="shrink-0 self-stretch mt-6 h-0.5 border-2 border-dashed bg-slate-500 border-slate-500 max-md:max-w-full" />
                    <div className="flex gap-5 justify-between self-stretch pr-2 mt-4 w-full max-md:flex-wrap max-md:max-w-full">
                      <div className="flex flex-col justify-center p-2.5 bg-blue-800 rounded-xl leading-[113%] max-md:px-5">
                        <div className="flex gap-2 text-base font-medium text-slate-300">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/581ba5b5a6e6ce81ba3dd2af890fc97ff82467c581fbf1ccd047b308de9d8e38?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                            className="shrink-0 self-start aspect-[0.93] w-[15px]"
                          />
                          <div>Next Batch:</div>
                        </div>
                        <div className="mt-1.5 text-2xl font-semibold text-white">
                          27 June
                        </div>
                      </div>
                      <div className="flex gap-2 justify-center px-5 py-3.5 my-auto text-base font-semibold leading-6 text-white lowercase rounded-lg">
                        <div>
                          <span className="capitalize">L</span>earn More
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4088e830efa6a675120f09794b6d5198fb8386223dbcffb9e9d621f326b3c753?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                          className="shrink-0 my-auto w-5 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-end mt-9 mr-60 text-9xl font-bold text-white bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[153.6px] max-md:mr-2.5 max-md:text-4xl">
            _.
          </div>
        </div>
      </div>
      <div className="flex z-10 flex-col pr-6 pl-20 -mt-2 w-full max-md:px-5 max-md:max-w-full">
      <div className="sliding-container">
      <div className="flex gap-5 self-center w-full font-bold leading-[448.8px] max-w-[1205px] text-[374px] text-zinc-900 max-md:flex-wrap max-md:max-w-full max-md:text-5xl">
        <div className="shrink-0 self-start mt-16 w-4 h-4 border-2 border-white border-solid max-md:mt-10" />
        <div className="flex-auto max-md:max-w-full max-md:text-4xl sliding-text" >
          Learnex
        </div>
      </div>
    </div>
        <div className="flex gap-5 justify-between items-start self-center mt-5 w-full max-w-[1081px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc719bc2ed518053e1ed863dd138d48e713d191959f4321841ac4d684406640d?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
            className="shrink-0 border-2 border-red-600 border-solid aspect-[0.21] stroke-[2px] stroke-red-600 w-[13px]"
          />
          <div className="shrink-0 rounded-full border-2 border-white border-solid h-[27px] stroke-[2px] w-[27px]" />
        </div>
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center p-8 w-full rounded-xl border border-solid bg-neutral-800 border-neutral-800 max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d747a93a0e814dba9d75c3865694aa4d55f68912a37d941eada3daec33f88cf7?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d747a93a0e814dba9d75c3865694aa4d55f68912a37d941eada3daec33f88cf7?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d747a93a0e814dba9d75c3865694aa4d55f68912a37d941eada3daec33f88cf7?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d747a93a0e814dba9d75c3865694aa4d55f68912a37d941eada3daec33f88cf7?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d747a93a0e814dba9d75c3865694aa4d55f68912a37d941eada3daec33f88cf7?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d747a93a0e814dba9d75c3865694aa4d55f68912a37d941eada3daec33f88cf7?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d747a93a0e814dba9d75c3865694aa4d55f68912a37d941eada3daec33f88cf7?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d747a93a0e814dba9d75c3865694aa4d55f68912a37d941eada3daec33f88cf7?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                        className="shrink-0 max-w-full aspect-square w-[118px] max-md:mt-7"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                      <div className="self-stretch my-auto text-2xl font-semibold tracking-tighter leading-9 text-white max-md:mt-10 max-md:max-w-full">
                        Dedicated placement assistance for OneYear
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-5 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-1 my-auto text-lg tracking-tight leading-7 text-slate-400 max-md:max-w-full">
                    We provide dedicated one year placement assistance for our
                    students who{" "}
                  </div>
                  <div className="flex flex-col justify-center items-start p-4 bg-slate-600 rounded-[145.455px] max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcb44a5368c3919eb29d499cd6fd0642b2267817871ab66d0843cc228385d91a?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="aspect-square w-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center p-8 w-full rounded-xl border border-solid bg-neutral-800 border-neutral-800 max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/62b415d92e4a255a94576bf0aeea4e272e23db2125045e90cb91bc756681672c?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                        className="shrink-0 max-w-full aspect-square w-[118px] max-md:mt-7"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                      <div className="self-stretch my-auto text-2xl font-semibold tracking-tighter leading-9 text-white max-md:mt-10 max-md:max-w-full">
                        Mock Interviews and Preparation
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-5 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-1 my-auto text-lg tracking-tight leading-7 text-slate-400 max-md:max-w-full">
                    During and after our bootcamp you will be continuously
                    trained by providing technical exams and mock interviews.
                  </div>
                  <div className="flex flex-col justify-center items-start p-4 bg-slate-600 rounded-[145.455px] max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/75f3b61578a04703d9ab3399365cc30e17c38ac31e68d8ffc6b4c7542ace6e9e?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="aspect-square w-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center p-8 w-full rounded-xl border border-solid bg-neutral-800 border-neutral-800 max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ab640c842bbab6349dab57ec7155ff9abcbc1aafb8f8f63ee94cd911389e609?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                        className="grow shrink-0 max-w-full aspect-[0.97] w-[118px] max-md:mt-7"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                      <div className="self-stretch my-auto text-2xl font-semibold tracking-tighter leading-9 text-white max-md:mt-10 max-md:max-w-full">
                        A Professional network for learning and growing{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-5 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-1 text-lg tracking-tight leading-7 text-slate-400 max-md:max-w-full">
                    You will be connected with like minded people and industry
                    experts during and after the program. Your access to the
                    community is Lifetime
                  </div>
                  <div className="flex flex-col justify-center items-start p-4 my-auto bg-slate-600 rounded-[145.455px] max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/83ceec92bc74e19fc79a03f8258f1565d814addf6d43af8123e5e000f34c4839?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="aspect-[1.03] w-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center p-8 w-full rounded-xl border border-solid bg-neutral-800 border-neutral-800 max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/352a98a2086159c29fd83512a485957c9519b9587096925c30d027e2865d1bc2?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/352a98a2086159c29fd83512a485957c9519b9587096925c30d027e2865d1bc2?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/352a98a2086159c29fd83512a485957c9519b9587096925c30d027e2865d1bc2?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/352a98a2086159c29fd83512a485957c9519b9587096925c30d027e2865d1bc2?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/352a98a2086159c29fd83512a485957c9519b9587096925c30d027e2865d1bc2?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/352a98a2086159c29fd83512a485957c9519b9587096925c30d027e2865d1bc2?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/352a98a2086159c29fd83512a485957c9519b9587096925c30d027e2865d1bc2?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/352a98a2086159c29fd83512a485957c9519b9587096925c30d027e2865d1bc2?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                        className="shrink-0 max-w-full aspect-square w-[118px] max-md:mt-7"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                      <div className="self-stretch my-auto text-2xl font-semibold tracking-tighter leading-9 text-white max-md:mt-10 max-md:max-w-full">
                        Soft Skill Training
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-5 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-1 text-lg tracking-tight leading-7 text-slate-400 max-md:max-w-full">
                    Not just with the tech skills here you will learn the soft
                    skills essential for your career development and you will
                    ace your race in the tech and soft skills
                  </div>
                  <div className="flex flex-col justify-center items-start p-4 my-auto bg-slate-600 rounded-[145.455px] max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5832fe68a80006aff3c59a59005d9d689e43e6d6780f1369dbbc6222729796ad?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                      className="aspect-square w-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start mt-40 text-6xl font-bold text-white bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[69.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Your Journey with us
        </div>
        <div className="mt-4 text-base font-medium tracking-normal leading-6 text-white w-[713px] max-md:max-w-full">
          Cultivate your expertise and advance your career with our immersive
          technical bootcamp. From hands-on projects to personalized mentorship,
          embark on a journey tailored to propel your success in the
          ever-evolving world of technology
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ea3a2a7137d3e3167a108680df21498570e42348734f9f05ca7c489a39eff05c?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea3a2a7137d3e3167a108680df21498570e42348734f9f05ca7c489a39eff05c?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea3a2a7137d3e3167a108680df21498570e42348734f9f05ca7c489a39eff05c?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea3a2a7137d3e3167a108680df21498570e42348734f9f05ca7c489a39eff05c?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea3a2a7137d3e3167a108680df21498570e42348734f9f05ca7c489a39eff05c?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea3a2a7137d3e3167a108680df21498570e42348734f9f05ca7c489a39eff05c?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea3a2a7137d3e3167a108680df21498570e42348734f9f05ca7c489a39eff05c?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea3a2a7137d3e3167a108680df21498570e42348734f9f05ca7c489a39eff05c?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
          className="self-center mt-20 w-full aspect-[2.08] max-w-[1231px] stroke-[4px] stroke-fuchsia-500 max-md:mt-10 max-md:max-w-full"
        />
      </div>
      {/* <div className='relative flex-col px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full '>
         <img src={imgup} alt="" />
      </div> */}
      <div className="self-center mt-44 text-6xl font-bold text-white bg-clip-text bg-[linear-gradient(92deg,#FF8E26_30.11%,#9C4DFF_80.07%)] leading-[69.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <span className="text-white">Upcomming</span> bootcamps
      </div>
      
        
      <div className="self-center mt-2.5 text-lg font-medium tracking-normal leading-7 text-slate-400 max-md:max-w-full">
        Here is our upcoming bootcamp schedules .
      </div>
      <div className="justify-center px-16 mt-11 ml-4 max-w-full w-[1425px] max-md:px-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-8 mx-auto w-full font-semibold rounded-lg bg-neutral-800 leading-[150%] max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/396f3e98d7086fc73044970124035a2ba6bfbf459ea571cf0c2967d48232b332?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/396f3e98d7086fc73044970124035a2ba6bfbf459ea571cf0c2967d48232b332?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/396f3e98d7086fc73044970124035a2ba6bfbf459ea571cf0c2967d48232b332?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/396f3e98d7086fc73044970124035a2ba6bfbf459ea571cf0c2967d48232b332?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/396f3e98d7086fc73044970124035a2ba6bfbf459ea571cf0c2967d48232b332?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/396f3e98d7086fc73044970124035a2ba6bfbf459ea571cf0c2967d48232b332?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/396f3e98d7086fc73044970124035a2ba6bfbf459ea571cf0c2967d48232b332?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/396f3e98d7086fc73044970124035a2ba6bfbf459ea571cf0c2967d48232b332?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                className="w-full aspect-[1.28]"
              />
              <div className="mt-6 text-lg tracking-tight text-slate-500">
                Upcoming bootcamp{" "}
              </div>
              <div className="mt-3 text-2xl tracking-tighter text-white">
                UI/UX design Mini Bootcamp{" "}
              </div>
              <div className="mt-1.5 text-base tracking-normal leading-6 text-slate-400">
                Master the essentials of UI/UX design in our Mini Bootcamp. Dive
                into hands-on projects, learn from industry experts
              </div>
              <div className="flex gap-5 mt-3.5 text-sm font-medium text-white">
                <div className="flex gap-1.5 px-3.5 py-1.5 whitespace-nowrap rounded-3xl border border-solid bg-zinc-900 border-neutral-800 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/07ace8312b1b59ab581fa2ea8defa963420c24458580c383fe7966209f3cf0e2?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                    className="shrink-0 self-start w-5 aspect-square"
                  />
                  <div>Live</div>
                </div>
                <div className="flex gap-1 px-3.5 py-1.5 rounded-3xl border border-solid bg-zinc-900 border-neutral-800 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/15a429a504a486319e0aef21efc803d4e9300bfa7d327f217f56b109951b9535?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                    className="shrink-0 self-start w-5 aspect-square"
                  />
                  <div>26 June 2024</div>
                </div>
              </div>
              <div className="flex gap-2 justify-center self-start px-5 py-3 mt-10 text-base text-white lowercase rounded-lg">
                <div>
                  <span className="uppercase">P</span>review
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/417ebaf87989c6a2d2be7b3650cdf9bc6b1a73b658be2879d7b2968d334853d0?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="shrink-0 my-auto w-5 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-8 mx-auto w-full font-semibold rounded-lg bg-neutral-800 leading-[150%] max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/acbddafdace6b1e5a941e0915db7d5d0be7e896ad7f4d84d704f54a05095ab1a?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/acbddafdace6b1e5a941e0915db7d5d0be7e896ad7f4d84d704f54a05095ab1a?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/acbddafdace6b1e5a941e0915db7d5d0be7e896ad7f4d84d704f54a05095ab1a?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/acbddafdace6b1e5a941e0915db7d5d0be7e896ad7f4d84d704f54a05095ab1a?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/acbddafdace6b1e5a941e0915db7d5d0be7e896ad7f4d84d704f54a05095ab1a?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/acbddafdace6b1e5a941e0915db7d5d0be7e896ad7f4d84d704f54a05095ab1a?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/acbddafdace6b1e5a941e0915db7d5d0be7e896ad7f4d84d704f54a05095ab1a?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/acbddafdace6b1e5a941e0915db7d5d0be7e896ad7f4d84d704f54a05095ab1a?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                className="w-full aspect-[1.28]"
              />
              <div className="mt-6 text-lg tracking-tight text-slate-500">
                Upcoming bootcamp{" "}
              </div>
              <div className="mt-3 text-2xl tracking-tighter text-white">
                UI/UX design Bootcamp{" "}
              </div>
              <div className="mt-1.5 text-base tracking-normal leading-6 text-slate-400">
                Embark on a comprehensive journey to master the dynamic
                landscape of digital marketing with our intensive Bootcamp
              </div>
              <div className="flex gap-5 mt-3.5 text-sm font-medium text-white whitespace-nowrap">
                <div className="flex gap-1.5 px-3.5 py-1.5 rounded-3xl border border-solid bg-zinc-900 border-neutral-800 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/07ace8312b1b59ab581fa2ea8defa963420c24458580c383fe7966209f3cf0e2?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                    className="shrink-0 self-start w-5 aspect-square"
                  />
                  <div>Live</div>
                </div>
                <div className="flex gap-1 px-3.5 py-1.5 rounded-3xl border border-solid bg-zinc-900 border-neutral-800 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/15a429a504a486319e0aef21efc803d4e9300bfa7d327f217f56b109951b9535?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                    className="shrink-0 self-start w-5 aspect-square"
                  />
                  <div>Upcoming</div>
                </div>
              </div>
              <div className="flex gap-2 justify-center self-start px-5 py-3 mt-10 text-base text-white lowercase rounded-lg">
                <div>
                  <span className="uppercase">P</span>review
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/417ebaf87989c6a2d2be7b3650cdf9bc6b1a73b658be2879d7b2968d334853d0?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                  className="shrink-0 my-auto w-5 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-8 mx-auto w-full font-semibold rounded-lg bg-neutral-800 leading-[150%] max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14f68016602e94cbbc448f11303408cdb142c020d8015fe81e67b4ac8e619651?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f68016602e94cbbc448f11303408cdb142c020d8015fe81e67b4ac8e619651?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f68016602e94cbbc448f11303408cdb142c020d8015fe81e67b4ac8e619651?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f68016602e94cbbc448f11303408cdb142c020d8015fe81e67b4ac8e619651?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f68016602e94cbbc448f11303408cdb142c020d8015fe81e67b4ac8e619651?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f68016602e94cbbc448f11303408cdb142c020d8015fe81e67b4ac8e619651?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f68016602e94cbbc448f11303408cdb142c020d8015fe81e67b4ac8e619651?apiKey=da51d65c0c6a4171975c02c87160b4fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14f68016602e94cbbc448f11303408cdb142c020d8015fe81e67b4ac8e619651?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                className="w-full aspect-[1.28]"
              />
              <div className="mt-6 text-lg tracking-tight text-slate-500">
                Upcoming bootcamp{" "}
              </div>
              <div className="mt-3 text-2xl tracking-tighter text-white">
                Web development
              </div>
              <div className="mt-1.5 text-base tracking-normal leading-6 text-slate-400">
                Dive into our immersive bootcamp designed to equip you with the
                skills and expertise needed to thrive in the digital landscape
              </div>
              <div className="flex gap-5 mt-3.5 text-sm font-medium text-white whitespace-nowrap">
                <div className="flex gap-1.5 px-3.5 py-1.5 rounded-3xl border border-solid bg-zinc-900 border-neutral-800 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/07ace8312b1b59ab581fa2ea8defa963420c24458580c383fe7966209f3cf0e2?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                    className="shrink-0 self-start w-5 aspect-square"
                  />
                  <div>Live</div>
                </div>
                <div className="flex gap-1 px-3.5 py-1.5 rounded-3xl border border-solid bg-zinc-900 border-neutral-800 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/15a429a504a486319e0aef21efc803d4e9300bfa7d327f217f56b109951b9535?apiKey=da51d65c0c6a4171975c02c87160b4fc&"
                    className="shrink-0 self-start w-5 aspect-square"
                  />
                  <div>Upcoming</div>
                </div>
              </div>
              <div className="flex gap-2 justify-center self-start px-5 py-3 mt-10 text-base text-white lowercase rounded-lg">
                <div>
                  <span className="uppercase">P</span>review
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
      
      {/* FAQ START */}
        <Faq/>
        {/* FAQ END */}
      <div className="flex flex-col mt-20 w-full bg-neutral-800 max-md:mt-10 max-md:max-w-full">
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
            <div>Terms & Conditions</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home