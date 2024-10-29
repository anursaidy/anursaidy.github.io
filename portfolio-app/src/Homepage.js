import React from 'react';
import Header from './Header';
import profileImage from './images/person.jpg'
function HomePage() {
  return (
    <div>
     {/* <Header/> */}
     <div className="flex items-center">
        <div className="w-1/3 p-5">
     <img src= {profileImage} alt="Profile" className="h-auto rounded" />
     </div>
     <div className="w-2/3 p-5">
        <h2>HELLO</h2>
        <h3 className='text-6xl text-orange-500'>I am Ameer Nur Saidy</h3>
        
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries but also the leap into 
          electronic typesetting, remaining essentially unchanged. It was popularised in 
          the 1960s with the release of Letraset sheets containing.
        </p>
         </div>
        </div>
    </div>
  );
}

export default HomePage;