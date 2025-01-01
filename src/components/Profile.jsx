import { useEffect, useState } from "react";
import trData from "../data/dataTr.json";
import enData from "../data/dataEng.json";
import profileImage from "../../public/assets/sejda.webp";
import { useLanguage } from "../contexts/LanguageContext";

export default function Profile() {
    const { toggleLanguage, language } = useLanguage();
    const [profile, setProfile] = useState({});
    
    useEffect(() => {
        setProfile(language === "tr" ? trData.profile : enData.profile);
    }, [language]);

   


    const defaultText = toggleLanguage("profile.unknown") || "Unknown";
    const infoFields = [
        { title: toggleLanguage("profile").birthday, value: profile.birthdayDetail || defaultText },
        { title: toggleLanguage("profile").city, value: profile.cityDetail || defaultText },
        { title: toggleLanguage("profile").edu, value: [profile.eduDetail1, profile.eduDetail2].filter(Boolean).join(", ") || defaultText },
        { title: toggleLanguage("profile").prefer, value: profile.preferD || defaultText },
    ];

    return (
        <section className="flex flex-col justify-center items-center h-full bg-[#4731D3] md:h-auto border-t dark:bg-[#171043] p-8">
            <div className="max-w-7xl w-full">
                <h1 className="text-[36px] font-semibold text-[#CBF281]">
                    {toggleLanguage("profile").profileH}
                </h1>
                <div className="flex flex-col items-center lg:flex-row gap-4 relative text-white">
                    <div className="relative flex-1 mx-auto w-full md:max-w-md lg:max-w-lg">
                        <div className="relative rounded-xl z-10 flex flex-col items-start gap-5 mt-4">
                            <h2 className="font-semibold text-lg sm:text-xl">
                                {toggleLanguage("profile").basicInfo}
                            </h2>
                            {infoFields.map((field, idx) => (
                                <p key={idx} className="flex w-full justify-between text-[#CBF281] font-medium transform transition-all duration-300 hover:scale-105">
                                    {field.title}: <span className="w-1/2 text-start font-normal">{field.value}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="flex w-3/12 rounded-lg">
                        <img src={profileImage} alt="Profil Resmi" />
                    </div>
                    <div className="flex-1 mx-auto rounded-xl w-full md:max-w-md lg:max-w-lg">
    <h2 className="text-start font-semibold text-lg sm:text-xl md:text-xl text-white mr-2 ">
        {toggleLanguage("profile").aboutH}
    </h2>
    <p className="text-[#CBF281] font-medium transform transition-all duration-300 hover:scale-105">
        {toggleLanguage("profile").aboutText1 || ""} <br />
        {toggleLanguage("profile").aboutText2 || ""}
    </p>
</div>

                </div>
            </div>
        </section>
    );
}
