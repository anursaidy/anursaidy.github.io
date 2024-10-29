import React from 'react';
import matrixLL from './images/matrixLL.jpg'
function About() {
    return (
        <div className="flex min-h-screen">
            <div className="bg-black w-1/5 shadow-lg">
                <div className="text-white p-4">
                    <h2 className="text-xl font-bold text-center">Programming Knowledge</h2>
                    <ul>
                        <li className="py-2">Java</li>
                        <li className="py-2">C++</li>
                        <li className="py-2">HTML</li>
                        <li className="py-2">CSS</li>
                        <li className="py-2">JavaScript</li>
                    </ul>
                </div>
            </div>


            <div className="flex justify-center flex-col mx-10  w-screen p-4">
                <div className="bg-white shadow-lg rounded-lg h-1/4 w-full my-10 p-8">
                    <h2 className="text-xl font-bold">Introduction</h2>
                    <p>
                        intro message
                    </p>
                </div>


                <div className="bg-white shadow-lg rounded-lg h-1/4 w-full p-8">
                    <h2 className="text-xl font-bold">Extra Information</h2>
                    <p>
                       Extra content
                     </p>
                </div>
            </div>
        </div>
    );
}

export default About;