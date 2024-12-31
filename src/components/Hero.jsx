import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { useDarkMode } from "../contexts/DarkModeContext";
import heroImage from "../../public/assets/sej-vesikalik.jpeg";

function Hero() {
  const { toggleLanguage } = useLanguage();
  const { darkMode } = useDarkMode();

  return (
    <section
      className="p-8 md:p-16 pt-32 flex min-h-screen"
      style={{
        backgroundImage: darkMode
          ? "linear-gradient(90deg, rgba(22,15,36,1) 67%, rgba(26,33,11,1) 67%)"
          : "linear-gradient(90deg, rgba(71,49,211,1) 67%, rgba(203,242,129,1) 67%)",
      }}
    >
      <div className="flex flex-col w-full text-white gap-8 md:px-20">
        <p className="font-[700] text-[32px] text-[#CBF281]">
          Sejda ÖZGÜR FIÇICI
        </p>
        <div className="flex h-full items-center text-start xl:flex-row flex-col">
          <div className="w-full xl:w-3/5 py-4 flex flex-col">
            <p className="text-[44px] w-3/4 font-[700] text-[#CBF281]">
              {toggleLanguage("hero").heroTitle}
            </p>
            <p className="mt-4 text-[20px] font-[400]">
              {toggleLanguage("hero").heroDesc}
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <a
                href={toggleLanguage("hero").githubLink}
                className="bg-white flex items-center gap-2 text-black py-3 px-4 rounded hover:bg-black hover:text-white"
              >
                <FaGithub size={25} /> Github
              </a>
              <a
                href={toggleLanguage("hero").linedinLink}
                className="bg-white flex items-center gap-2 text-black py-3 px-4 rounded hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedin size={25} /> Linkedin
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 px-4 flex items-start justify-center md:justify-start">
            <img
              src={heroImage}
              alt="Frontend Developer"
              className="rounded-lg shadow-xl w-full max-w-[300px] min-w-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
