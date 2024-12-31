import { CiTwitter } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { useDarkMode } from "../contexts/DarkModeContext";

function Footer() {
  const { darkMode } = useDarkMode();
  const { toggleLanguage } = useLanguage();

  return (
    <footer className="bg-[#F9F9F9] dark:bg-[#252128] flex justify-center">
      <div className="flex flex-col items-center justify-center p-20 gap-8 w-full md:w-1/2 text-center">
        <h1 className="font-[700] text-[40px] text-center w-80 md:w-144 text-[#4731D3] dark:text-[#8F88FF]">
          {toggleLanguage("footer").heading1}
        </h1>
        <p className="text-[20px] dark:text-white">
          {toggleLanguage("footer").heading2}
        </p>
        <a
          className="text-[#4731D3] dark:text-[#8F88FF] underline"
          href={`mailto:${toggleLanguage("footer").email || "sejdaozgur@gmail.com"}`}
        >
          {toggleLanguage("footer").email || "sejdaozgur@gmail.com"}
        </a>
        <div className="flex text-lg gap-2">
          <a
            className="flex gap-2 items-center w-full p-2 rounded-xl hover:text-white"
            href="https://www.twitter.com/sejdaozgurficici/"
          >
            <CiTwitter color={darkMode ? "white" : "#4731D3"} size={35} />
          </a>
          <a
            href={`mailto:${toggleLanguage("footer").email || "sejdaozgur@gmail.com"}`}
          >
            <MdAlternateEmail color={darkMode ? "white" : "#4731D3"} size={35} />
          </a>
          <a
            className="flex gap-2 items-center w-full justify-between p-2 rounded-xl hover:text-white"
            href="https://www.instagram.com/sejdaozgurficici/"
          >
            <FaInstagram size={35} color={darkMode ? "white" : "#4731D3"} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
