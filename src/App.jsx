import React from 'react';

// import { Navbar } from './components/Navbar';
// import { Portfolio } from './components/Portfolio';
import { Card } from './components/Card';
import AboutMe from './components/AboutMe'
import Review from './components/Review';
// import Video from './components/Video/Video';

function App() {
  return (
    <>
      <div className='w-full'>
      <AboutMe />
      <Card />
      <Review />

      {/* <Video /> */}
      </div>
      

    </>
  );
}

export default App;
