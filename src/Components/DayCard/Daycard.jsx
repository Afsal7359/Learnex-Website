import React from 'react';

const DayCard = ({ day, title, details, isVisible }) => {
  return (
    isVisible && (
      <div className="flex flex-col justify-center mt-12 p-10 w-full text-2xl font-semibold leading-10 text-white rounded-2xl border border-solid bg-neutral-800 border-neutral-800 max-w-[1275px] max-md:px-5 max-md:max-w-full">
        <div className="text-3xl text-center max-md:max-w-full">{day}</div>
        <div className="mt-7 text-center max-md:max-w-full">{title}</div>
        <div className="mt-2 text-lg leading-7 text-slate-400 max-md:max-w-full">{details[0]}</div>
        <div className="mt-9 text-center max-md:max-w-full">{details[1]}</div>
        <div className="mt-2 text-lg leading-7 text-slate-400 max-md:max-w-full">{details[2]}</div>
      </div>
    )
  );
};

export default DayCard;
