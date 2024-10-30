'use client'
import HomeComponent from "./components/HomeComponent/HomeComponent";
import Projects from "./components/Project/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HomeComponent/>
      <Projects/>
      <AboutMe/>
    </main>
  );
}
