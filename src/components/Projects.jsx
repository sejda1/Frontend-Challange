import { useEffect, useState } from "react";

import trData from "../data/dataTr.json";
import enData from "../data/dataEng.json";
import proje1 from "../../public/assets/projects/Pizza-project.png";
import proje1mobil from"../../public/assets/projects/pizza-mobil.png";
import proje2 from "../../public/assets/projects/mest.png";
import proje2mobil from "../../public/assets/projects/mest-mobil.png";
import proje3 from "../../public/assets/projects/movie-project.png";
import proje3mobil from "../../public/assets/projects/movie-project-mobil.png";


import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const projectImages = {
  1: proje1,
  2: proje2,
  3: proje3,
};

const projectImagesMobile = {
  1: proje1mobil,
  2: proje2mobil,
  3: proje3mobil,
};

export default function Projects() {
    const { language } = useLanguage();
    const [projects, setProjects] = useState(trData.projects);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      setIsMobile(window.innerWidth < 768);
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    useEffect(() => {
      setProjects(language === "tr" ? trData.projects : enData.projects);
    }, [language]);
  
    return (
      <section className="flex flex-col items-center bg-[#CBF281] dark:bg-[#1A210B] p-8 overflow-hidden border-t">
        <div className="w-full max-w-screen-lg flex flex-col">
          <h1 className="text-3xl font-semibold text-[#4731D3] dark:text-[#CBF281] p-4 px-8">
            {language === "tr" ? "Projeler" : "Projects"}
          </h1>
  
          {projects.projectList.map((project, index) => (
            <div key={index} className="p-4">
              <div className="flex flex-col md:flex-row md:h-96 rounded-3xl bg-white border-2 dark:bg-[#2B2727] shadow-lg">
                <div className="w-full md:w-3/5 overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
                  <img
                    src={
                      isMobile
                        ? projectImagesMobile[project.id]
                        : projectImages[project.id]
                    }
                    alt={`${project.heading} photo`}
                    className="h-96 w-full object-contain md:object-contain md:h-full"
                  />
                </div>
                <div className="flex flex-col justify-between p-10 gap-2 h-full w-full">
                  <div>
                    <h2 className="text-[32px] font-semibold text-[#4731D3] dark:text-[#C1BAED] mb-2">
                      {project.heading}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {(project.teknologies || project.technologies).map(
                        (item, techIndex) => (
                          <span
                            className="bg-[#4731D3] dark:bg-[#8173DA] text-white font-semibold text-sm rounded-full px-3 py-1"
                            key={techIndex}
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.link}
                      className="text-black dark:text-[#CBF281] dark:hover:text-blue-300 scale-90 hover:scale-100 duration-200 underline"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-black dark:text-[#CBF281] dark:hover:text-blue-300 scale-90 hover:scale-100 duration-200 underline"
                    >
                      View App <FaRegArrowAltCircleRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  