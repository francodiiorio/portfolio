import React from 'react'

import ProjectCard from '../ProjectCard/ProjectCard'
import { DataArray } from '@/app/Data/data'


function ProjectsList({ selectedTechnology }: {
  selectedTechnology: string
}) {
  const filteredProjects = selectedTechnology === "Todas"
    ? DataArray
    : DataArray.filter(({ technologies }) =>
      technologies.includes(selectedTechnology.toLowerCase())
    );
  return (
    <div className='flex flex-row flex-wrap gap-5 items-center justify-center'>
      {filteredProjects.length > 0 ? (
        filteredProjects.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))
      ) : (
        <p className='text-white'>Not proyects found</p>
      )

      }
    </div>
  )
}

export default ProjectsList
