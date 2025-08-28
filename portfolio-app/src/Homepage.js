import React from "react";
import Header from "./Header";
import profileImage from "./images/person.jpg";
function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Content */}
      <main className="flex flex-1 px-12 py-8">
        {/* About Me */}
        <section className="flex-1">
          {/* <h2 className="font-bold text-lg mb-6">About me</h2> */}
          <div className = "mb-12"> {/*mb adds spacing*/}
            <h2>HELLO</h2>
            <h3 className="text-6xl text-blue-500 mb-12">I am Ameer Nur Saidy</h3>
            <p>
              A 4th year Simon Fraser University Computer Science student and an
              aspiring software developer eager to improve my skills. I am
              excited to showcase my portfolio and demonstrate the projects I
              have taken a part in. Navigate to the About page to learn a little
              more about me or the Project page to see some of the projects I
              have made.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="w-28 h-28 rounded-full bg-red-500 flex items-center justify-center text-white font-medium shadow-md hover:scale-110 transition">
              My Resume
            </div>
            <div className="w-28 h-28 rounded-full bg-blue-400 flex items-center justify-center text-white font-medium shadow-md hover:scale-110 transition">
              My Projects
            </div>
            <div className="w-28 h-28 rounded-full bg-green-500 flex items-center justify-center text-white font-medium shadow-md hover:scale-110 transition">
              My Skills
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="flex-1 ml-12">
          <h2 className="font-bold text-lg mb-6">Recent Work</h2>
          <div className="grid grid-cols-2 gap-4 bg-gray-200 p-6 rounded-md">
            <div className="bg-blue-600 rounded-lg h-24 shadow-md"></div>
            <div className="bg-blue-600 rounded-lg h-24 shadow-md"></div>
            <div className="bg-blue-600 rounded-lg h-24 shadow-md"></div>
            <div className="bg-blue-600 rounded-lg h-24 shadow-md"></div>
            <h1 className="font-bold text-lg mb-6">View More...</h1>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-gray-200 h-12"></footer>
    </div>
  );
}

export default HomePage;
