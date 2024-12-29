import { useLanguage } from "../contexts/LanguageContext";

function Language() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="flex p-2 items-center">
      {language === "eng" ? (
        <button
          onClick={() => setLanguage("tr")}
          className="text-xs dark:text-white"
        >
          <span className="font-semibold text-[#CBF281] hover:underline">
            TÜRKÇE
          </span>
          `YE GEÇ
        </button>
      ) : (
        <button
          onClick={() => setLanguage("eng")}
          className="text-xs dark:text-white"
        >
          SWITCH TO
          <span className="font-semibold text-[#CBF281] hover:underline">
            {" "}
            ENGLISH
          </span>
        </button>
      )}
    </div>
  );
}

export default Language;