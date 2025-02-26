import React from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import AboutMe from "./assets/components/AboutMe";
import Technologies from "./assets/components/Technologies";
// import Experience from "./assets/components/Experience";
import Contact from "./assets/components/Contact";
import Projects from "./assets/components/Projects";

const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased overflow-x-hidden text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">

      <div className="fixed inset-0 bg-fixed bg-cover bg-center">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
        
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto px-8">
          <Navbar/>
          <Hero />
          <AboutMe />
          <Projects />
          {/* <Experience /> */}
          <Technologies />
          <Contact />
        </div>


      </div>
  )
}

export default App;