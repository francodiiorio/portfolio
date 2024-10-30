import React from 'react'

import { AboutData } from '@/app/Data/data'
import SkillCard from '../SkillsCard/SkillCard'

function SkillsList() {
  return (
    <div className='flex flex-row flex-wrap gap-5 items-center justify-center'>
        {
            AboutData.map((item, index) => (
                <SkillCard key={index} item={item}/>
              ))
        }
    </div>
  )
}

export default SkillsList