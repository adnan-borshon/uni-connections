import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <section>
      {/* whole navbar container */}
        <div className="container flex justify-between align-center">
          
            {/* logo */}
            <div className='logo flex'> 
                <img src="" />
                <h1>UIU</h1>
            </div>
            {/* All Navigations buttons */}
            <div className='Navigation flex'>
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
                <Link to="/achievements">Achievements</Link>
                <Link to="/study-groups">Study Groups</Link>
                <Link to="/job-postings">Job Postings</Link>
                <Link to="/tutoring">Tutoring</Link>
                <Link to="/forums"> Forums</Link>
                <Link to="/about">About</Link>

            </div>
            {/* Search bar and login button section */}
            <div className='search-login'>
             <input type="text" />
            </div>
        </div>
    </section>
  );
}

export default Navbar;