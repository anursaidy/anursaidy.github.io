import React from 'react';
import fractalImage from './images/fractal.jpg'
import reportImage from './images/report.png'
import matrixLL from './images/matrixLL.jpg'
function Projects() {
  return (
    <div className="flex justify-center py-10">
      <div class="max-w-sm rounded overflow-hidden shadow-lg w-1/2">
        <img src={fractalImage} alt="Fractal" className="w-full h-1/2 rounded" />
        <div class="px-6 py-4 flex-grow">
          <div class="font-bold text-xl mb-2">Fractals Project</div>
          <p class="text-gray-700 text-base">
            Displays Fractals  of Julia and Mandelbrot PPM.
          </p>
          <a href="https://github.com/anursaidy/Fractals-Lab"
            className="text-blue-500 inline-block mt-5">
            View on GitHub
          </a>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-10 w-1/2">
        <img src={reportImage} alt="Report" className="w-full h-1/2 rounded" />
        <div class="px-6 py-4 flex-grow">
          <div class="font-bold text-xl mb-2">Report Project</div>
          <p class="text-gray-700 text-base">
            Create and display reports.
          </p>
          <a href="https://github.com/anursaidy/report-application"
            className="text-blue-500 inline-block mt-5">
            View on GitHub
          </a>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg w-1/2">
        <img src={matrixLL} alt="Matrix Linked List" className="w-full h-1/2 rounded" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Matrix Linked List</div>
          <p class="text-gray-700 text-base">
            A fully functioning Linked List using a Matrix.
          </p>
          <a href="https://github.com/anursaidy/Matrix-Linked-List"
            className="text-blue-500 inline-block mt-5">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;