
import React, { useState } from 'react';
import DayCard from './Daycard';

const Content = () => {
    const [visibleDay, setVisibleDay] = useState('Day 1');

    const handleDayClick = (day) => {
      setVisibleDay(day);
    };
  
    return (
        <div className="flex flex-col items-center mt-5 text-lg font-medium leading-7 text-center text-slate-400 w-full max-w-[878px] ">
            <div className="w-full">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using Lorem Ipsum.
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-4 max-w-[1231px] max-md:mt-2 max-md:max-w-full">
    {[1, 2, 3, 4, 5, 6].map(dayNumber => (
        <div
            key={`Day ${dayNumber}`}
            className={`flex flex-col justify-center leading-7 uppercase cursor-pointer ${visibleDay === `Day ${dayNumber}` ? 'active-day' : ''}`}
            onClick={() => handleDayClick(`Day ${dayNumber}`)}
        >
            <div className="flex flex-col justify-center items-center p-2 rounded-full border-2 border-dashed border-slate-700">
                <div className={`flex justify-center items-center rounded-full h-[100px] w-[100px] max-md:px-3 ${visibleDay === `Day ${dayNumber}` ? 'bg-amber-600' : 'bg-slate-700'}`}>
                    {'Day ' + dayNumber}
                </div>
            </div>
        </div>
    ))}
</div>






<DayCard
        day="Day 1"
        title="Design Principle"
        details={[
          "Discover human-centered design and Design methodology (Design research tools, Insight presentation software, Problem scoping tools, Ideation tools, User testing tools, Prototyping software training)",
          "Design Basics",
          "Discover human-centered design and Design methodology (Design research tools, Insight presentation software, Problem scoping tools, Ideation tools, User testing tools, Prototyping software training)"
        ]}
        isVisible={visibleDay === 'Day 1'} // Show if visibleDay is 'Day 1' or if no day has been clicked
      />
      <DayCard
        day="Day 2"
        title="Finding Problem Statement"
        details={[
          "In design thinking, finding the problem statement is a critical first step in the process. It's about defining the challenge or opportunity that the design team will focus on addressing.",
          "Walking through the problem statements",
          "Learning to find problem statement Understand the process"
        ]}
        isVisible={visibleDay === 'Day 2'}
      />
      <DayCard
        day="Day 3"
        title="User Research"
        details={[
          "The first step in user research is gaining a deep understanding of the target users. This involves identifying demographics, behaviors, goals, motivations, pain points, and preferences.",
          "Understanding the Users",
          "Methods for conducting user research Techniques for gathering user insights Analyzing and synthesizing research findings"
        ]}
        isVisible={visibleDay === 'Day 3'}
      />
      <DayCard
        day="Day 4"
        title="Ideation and Concept Development"
        details={[
          "Start by clearly defining the problem or opportunity your product aims to address. Understanding the problem space is crucial for generating relevant ideas.",
          "Define the Problem",
          "Brainstorming techniques Generating and refining product ideas Creating user personas and scenarios"
        ]}
        isVisible={visibleDay === 'Day 4'}
      />
       <DayCard
        day="Day 5"
        title="User Experience (UX) Design"
        details={[
          "User Experience (UX) design is the process of enhancing user satisfaction by improving the usability, accessibility, and desirability of a product or service",
          "User Flows and Wireframing",
          "Understanding user behaviors and motivations Designing seamless user experiences Conducting usability testing"
        ]}
        isVisible={visibleDay === 'Day 5'}
      />
       <DayCard
        day="Day 6"
        title="Visual Design"
        details={[
          "Visual design focuses on the aesthetics and visual elements of a product or service, including its overall look and feel, layout, typography, color scheme, and imagery.",
          "Define the Problem",
          "Fundamentals of visual design Typography, color theory, and layout Creating visually appealing designs"
        ]}
        isVisible={visibleDay === 'Day 6'}
      />
        </div>
    );
}

export default Content;
