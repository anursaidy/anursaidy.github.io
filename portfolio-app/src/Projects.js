import React from 'react';
import fractalImage from './images/fractal.jpg'
function Projects() {
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={fractalImage} alt="Fractal" className="w-full h-auto rounded" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Fractals Project</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;