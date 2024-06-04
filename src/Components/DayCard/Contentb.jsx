import React, { useState } from 'react';
import DayCard from './Daycard';

const Contentb = () => {
  const [visibleDay, setVisibleDay] = useState('Prepare to get Started');

  const handleDayClick = (day) => {
    setVisibleDay(day);
  };

  return (
    <div className="flex flex-col items-center mt-5 text-lg font-medium leading-7 text-center text-slate-400 w-full max-w-[878px]">
      <div className="w-full">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-4 max-w-[1231px] max-md:mt-2 max-md:max-w-full">
        {["Prepare to get Started","2-3", "3-4", "5-6", "7-8", "9-10", "11-12","13-14","15-16"].map(weekNumber => (
          <div
            key={`Week ${weekNumber}`}
            className={`flex flex-col justify-center leading-7 uppercase cursor-pointer ${visibleDay === `Week ${weekNumber}` ? 'active-day' : ''}`}
            onClick={() => handleDayClick(weekNumber === "Prepare to get Started" ? weekNumber:`Week ${weekNumber}`)}
          >
            <div className="flex flex-col justify-center items-center p-2 rounded-full border-2 border-dashed border-slate-700">
              <div className={`flex justify-center items-center rounded-full h-[140px] w-[140px] max-md:px-3 ${ weekNumber === "Prepare to get Started"? visibleDay === weekNumber ? 'bg-amber-600' : 'bg-slate-700': visibleDay === `Week ${weekNumber}` ? 'bg-amber-600' : 'bg-slate-700'}`}>
                {weekNumber === "Prepare to get Started " ? weekNumber:`Week ${weekNumber}`}
              </div>
            </div>
          </div>
        ))}
      </div>

      <DayCard
        week="Prepare To Get Started"
        title="Foundations of Product Design (Weeks 1-2)"
        details={[
       'Introduction to product design principles and methodologies Overview of design thinking and human-centered design Understanding user needs and problem definition Basics of design tools and software',

        ]}
        isVisible={visibleDay === 'Prepare to get Started'} // Show if visibleDay is 'Week 1' or if no day has been clicked
      />
      <DayCard
        week="Week 2"
        title="Finding Problem Statement"
        details={[
          "In design thinking, finding the problem statement is a critical first step in the process. It's about defining the challenge or opportunity that the design team will focus on addressing.",
          "Walking through the problem statements",
          "Learning to find problem statement Understand the process"
        ]}
        isVisible={visibleDay === 'Week 2-3'}
      />
      <DayCard
        week="Week 3"
        title="User Research"
        details={[
          "The first step in user research is gaining a deep understanding of the target users. This involves identifying demographics, behaviors, goals, motivations, pain points, and preferences.",
          "Understanding the Users",
          "Methods for conducting user research Techniques for gathering user insights Analyzing and synthesizing research findings"
        ]}
        isVisible={visibleDay === 'Week 3'}
      />
      <DayCard
        week="Week 4"
        title="Ideation and Concept Development"
        details={[
          "Start by clearly defining the problem or opportunity your product aims to address. Understanding the problem space is crucial for generating relevant ideas.",
          "Define the Problem",
          "Brainstorming techniques Generating and refining product ideas Creating user personas and scenarios"
        ]}
        isVisible={visibleDay === 'Week 4'}
      />
      <DayCard
        week="Week 5"
        title="User Experience (UX) Design"
        details={[
          "User Experience (UX) design is the process of enhancing user satisfaction by improving the usability, accessibility, and desirability of a product or service",
          "User Flows and Wireframing",
          "Understanding user behaviors and motivations Designing seamless user experiences Conducting usability testing"
        ]}
        isVisible={visibleDay === 'Week 5'}
      />
      <DayCard
        week="Week 6"
        title="Visual Design"
        details={[
          "Visual design focuses on the aesthetics and visual elements of a product or service, including its overall look and feel, layout, typography, color scheme, and imagery.",
          "Define the Problem",
          "Fundamentals of visual design Typography, color theory, and layout Creating visually appealing designs"
        ]}
        isVisible={visibleDay === 'Week 6'}
      />
    </div>
  );
};

export default Contentb;
