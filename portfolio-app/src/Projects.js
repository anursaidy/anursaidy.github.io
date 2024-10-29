import React from 'react';
import fractalImage from './images/fractal.jpg'
function Projects() {
  return (
    <div className="flex justify-center py-10">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={fractalImage} alt="Fractal" className="w-full h-auto rounded" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Fractals Project</div>
          <p class="text-gray-700 text-base">
            Displays Fractals from a Julia and Mandelbrot PPM.
          </p>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-10">
        <img src={fractalImage} alt="Fractal" className="w-full h-auto rounded" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Report Project</div>
          <p class="text-gray-700 text-base">
            Create and display reports.
          </p>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg ">
        <img src={fractalImage} alt="Fractal" className="w-full h-auto rounded" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Priority Queue</div>
          <p class="text-gray-700 text-base">
            A fully functioning priority queue.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;