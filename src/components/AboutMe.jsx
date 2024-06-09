// src/components/AboutMe.js
import React from 'react';
import Education from './Education';
import Experience from './Experience';
import TechnicalSkill from './TechnicalSkill';
import Contact from './Contact';

const AboutMe = () => {
  return (
    <>
    <h1 className="text-8xl mx-24 mt-14 text-[#005C78] font-['Quick_Peachy']">ABOUT ME</h1>
    

    <div className="p-10 bg-[#005C78] font-['Quick_Peachy']">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <Education />
          <TechnicalSkill />
        </div>
        <div>
          <Contact />
          <Experience />
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutMe;
