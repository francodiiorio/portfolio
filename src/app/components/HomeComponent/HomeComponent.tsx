import React from "react";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function HomeComponent() {
  return (
    <React.Fragment>
      <div
        id="home"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #041012 0 50%, #172427 0% 100%)",
          minHeight: "500px",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <div className="grid grid-cols-12">
            <div className="bg-[#172427] flex flex-col justify-center col-span-12 md:col-span-5 md:bg-transparent">
              <div className="container m-auto">
                <div className="lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center">
                  <p
                    className={`text-[#76ABAE] text-3xl md:text-base lg:text-2xl ${hind.className}`}
                  >
                    Bienvenidos
                  </p>
                  <h1 className="text-[#EEEEEE] text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3">
                    Soy Franco
                  </h1>
                  <h2 className={`text-[#EEEEEE] py-2 font-bold uppercase md:text-xl ${hind.className}`}>FullStack Developer</h2>
                  <a href="/#portfolio"
                    className={`cursor-pointer inline-block bg-[#76ABAE] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#202b2d] hover:show-lg ${hind.className}`}>
                    Proyectos
                  </a>
                  <a href="diioriocv.pdf" download="di iorio franco cv.pdf"
                    className={`ml-10 cursor-pointer inline-block bg-[#76ABAE] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#202b2d] hover:show-lg ${hind.className}`}>
                    Mi CV
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 pt-[50px] md:bg-transparent bg-[#76ABAE] md:pt-[130px] md:col-span-7">
              <div className="container m-auto">
                <img
                  src="/perfil2.png"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
