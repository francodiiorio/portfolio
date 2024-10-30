import React from 'react'
import Link from 'next/link'

function ProjectCard({ item }: {
  item: {
    title: string,
    des: string,
    images: string[]
    repository: string
  }
}) {
  return (
    <Link href={item.repository}>
      <div
        className='bg-[#172427] rounded-xl w-[356px] lg:w-[416px] xl:w-[416px]'
        style={{
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h5
          className='text-white'
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.1em",
          }}
        >
          {item.title}
        </h5>
        <img
          className='rounded-xl'
          alt={`image of ${item.title}`}
          src={item.images[0]}
          style={{ width: "auto", height: "12rem", margin: "auto" }}
        />
      </div>
    </Link>
  )
}

export default ProjectCard
