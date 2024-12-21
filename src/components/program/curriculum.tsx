"use client"
import React from 'react';

// Define the interface for the props
interface CurriculumProps {
    curriculamStyle: React.CSSProperties;
    title:String,
    curriculumData: {
    id: number;
    name: string;
    title: string;
    img: string;
  }[];
}

const Curriculum: React.FC<CurriculumProps> = ({ curriculamStyle,curriculumData,title }) => {
  return (
    <div className='w-10/12 m-auto mt-10' >
      <h4 className="text-4xl text-[#002060] font-bold text-center py-5">{title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" >
        {curriculumData.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg p-4" style={curriculamStyle}>
            <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h5 className="text-xl font-semibold mt-4">{item.name}</h5>
            <p className=" mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
