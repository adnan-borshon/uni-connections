import React from 'react';
import Calender from '/Icons/calender.png';
import Job from '/Icons/briefcase.png';
import Forum from '/Icons/forum.png';
import Badge from '/Icons/badge.png';
import { Link } from 'react-router-dom';
function Home() {
  return (
   <>
    {/* Hero page of the website */}
   <section className='HeroPage overflow-hidden lg:mt-20 lg:mb-10'>
    <div className="container shrink lg:grid grid-cols-2 gap-3 p-4"> 
      {/* left side of the hero page */}
      <div className='left pr-10 mb-10'>
    <div className='px-2 py-1 text-xs font-semibold bg-black text-white w-max rounded-2xl'>University Community</div>
    <h1 className='text-6xl font-bold'>Connect Collaborate and Grow Together</h1>
    <p className='p1 my-6 mb-10 lg:w-[70%] text-lg'>Join our university community platform to connect with students, alumni, and faculty. Share knowledge, find opportunities, and celebrate achievements.</p>
     <button className='button hover-effect-normal mr-5'>Join Now</button>   
     <button className=' text-black font-semibold border-2 py-[6px] px-3 rounded bg-white transform duration-300 ease-in-out cursor-pointer hover:bg-black hover:text-white hover:scale-110'>Learn More</button>   
      </div>

      {/* right side of the hero page */}
      <div className='right lg:grid grid-cols-2  grid-rows-2 space-x-4 '>
        {/* study group part  */}
      <Link to="/study-groups" className='hero-card '>
        <img src={Calender} className='h-10 w-10 p-2 mt-2 bg-gray-200 rounded-xl'/>
        <div className='p-1 ml-2'>
            <h2 className='h2'>Study Groups</h2>
        <p className='p1'> Schedule and join study sessions</p>
        </div>
      
      </Link>

      {/* job postings part */}
           <Link to="/job-postings" className='hero-card '>
        <img src={Job} className='h-10 w-10 p-2 mt-2 bg-gray-200 rounded-xl'/>
        <div className='p-1 ml-2'>
            <h2 className='h2'>Job Postings</h2>
        <p className='p1'>Find Internship and job opportunities</p>
        </div>
      
      </Link>

      {/* Forum part */}

               <Link to="/forums" className='hero-card '>
        <img src={Forum} className='h-10 w-10 p-2 mt-2 bg-gray-200 rounded-xl'/>
        <div className='p-1 ml-2'>
            <h2 className='h2'>Forum</h2>
        <p className='p1'>Discuss and share ideas with peers</p>
        </div>
      
      </Link>

      {/* Achievement part */}
               <Link to="/achievements" className='hero-card mr-3'>
        <img src={Badge} className='h-10 w-10 p-2 mt-2 bg-gray-200 rounded-xl'/>
        <div className='p-1 ml-2'>
            <h2 className='h2'>Achievements</h2>
        <p className='p1'>Showcase your accomplishments</p>
        </div>
      
      </Link>
      
      </div>
    </div>

   </section>
   </>
  );
}

export default Home;