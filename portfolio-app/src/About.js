import React from 'react';
import matrixLL from './images/matrixLL.jpg'
function About() {
    return (
        <div className="flex h-[calc(100vh-60px)]">
            <div className="bg-gray-300 w-1/5 rounded-lg shadow-lg mx-2 my-10">
                <div className="text-black p-4">
                    <h2 className="text-xl font-bold text-center">Programming Knowledge</h2>
                    <ul>
                        <li className="py-2">Java</li>
                        <li className="py-2">C++</li>
                        <li className="py-2">HTML</li>
                        <li className="py-2">CSS</li>
                        <li className="py-2">JavaScript</li>
                        <li className="py-2">React</li>
                        <li className="py-2">NextJS</li>
                        <li className="py-2">MongoDB</li>
                    </ul>
                </div>
            </div>


            <div className="flex justify-center flex-col mx-10  w-screen p-4">
                <div className="bg-white shadow-lg rounded-lg h-1/4 w-full my-5 p-8">
                    <h2 className="text-xl font-bold">Introduction</h2>
                    <p>
                        Hello, I am a 3rd year Computer Science student at Simon Fraser University. I have a strong interest in software development and planning
                        on pursuing a career as a front-end developer. Currently, I am improving my skills in web development and project management through my CMPT 
                        276 class and personal projects. I am always excited to collaborate and make projects with new people.
                    </p>
                </div>


                <div className="bg-white shadow-lg rounded-lg h-1/4 w-full my-5 p-8">
                    <h2 className="text-xl font-bold">Extra Information</h2>
                    <p>
                        Apart from coding, I play many video games during my free time. I play many different genres of games, and I can not seem
                        to stick to one since I enjoy them many. Currently, I am playing many roleplaying games and sandbox games.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg h-1/4 w-full my-5 p-8">
                    <h2 className="text-xl font-bold">Links</h2>
                    <p>
                        <a href="https://github.com/anursaidy"
                            className="text-blue-500 inline-block mt-5">
                            Link to my GitHub
                        </a>
                        </p>
                        <p>
                        <a href="https://www.sfu.ca/students/calendar/2023/spring/programs/computing-science/major/bachelor-of-science-or-bachelor-of-arts.html"
                            className="text-blue-500 inline-block mt-5">
                            Link to SFU Computing Science Major
                        </a>
                        </p>
                   
                </div>
            </div>
        </div>
    );
}

export default About;