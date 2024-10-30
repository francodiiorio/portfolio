import React from 'react'

function SkillCard({item}:{
  item: {
    title: string,
    img: string,
    array: string[]
  }
}) {
  return (
    <div className='flex flex-col w-40'>
      <p className='text-white mb-2 text-center'>{item.title}</p>
      <img className='h-16' src={item.img}/>
    </div>
  )
}

export default SkillCard