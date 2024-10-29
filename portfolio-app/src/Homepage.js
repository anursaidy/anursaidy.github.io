import React from 'react';
import Header from './Header';
import profileImage from './images/person.jpg'
function HomePage() {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-1/3 p-5">
          <img src={profileImage} alt="Profile" className="h-auto rounded" />
        </div>
        <div className="w-2/3 p-5">
          <h2>HELLO</h2>
          <h3 className='text-6xl text-orange-500'>I am Ameer Nur Saidy</h3>

          <p>
            A 3rd year Simon Fraser University Computer Science student and an aspiring front-end developer eager
            to improve my skills. I am excited to showcase my portfolio and demonstrate the projects I have taken a part in. 
            Navigate to About page to learn a little more about me or the Project page to see some of the projects I have made.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;