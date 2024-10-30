import React from "react";

import SkillsList from "./SkillsList/SkillsList";

function AboutMe() {
  return (
    <div id="about-me" className="w-full min-h-[200px] bg-[#041012] py-12">
      <div className="container m-auto mb-10">
        <h2 className="text-[#EEEEEE] text-5xl md:text-5xl lg:text-8xl xl:text-8xl mb-5 text-center md:text-start lg:text-start xl:text-start">Sobre mi</h2>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-5/6 text-white text-l lg:text-xl xl:text-xl flex flex-col gap-5 leading-[1.8] pl-6">
            <p>
              Soy un FullStack Developer MERN de 23 años con experiencia en
              multiples proyectos
            </p>
            <p>
              También manejo tecnologías como .NET, Java y python, por lo que me
              adapto a distintos lenguajes y desafíos. Cuento con experiencia de
              trabajo en equipo en varios proyectos por lo que me integro
              correctamente a los grupos de trabajo.
            </p>
            <p>Tengo como hobby el análisis de datos por lo que manejo tecnologías como R, Pandas y Matplotlib</p>

          </div>
          <SkillsList />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
