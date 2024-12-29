import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useDarkMode } from "../contexts/DarkModeContext";
function Theme() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="flex p-2 md:p-2 items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          data-testid="darkMode-toggle"
          onChange={toggleDarkMode}
          checked={darkMode}
        />
        <div className="w-12 h-4 bg-red-600 rounded-full peer peer-focus:ring-4 border peer-checked:bg-black">
          <div
            className={`absolute top-[ 2px]  transition-transform duration-200 ease-in-out ${
              !darkMode ? "translate-x-5 left-3" : ""
            }`}
          >
            {!darkMode ? (
              <CiLight color="yellow" size={15} />
            ) : (
              <MdDarkMode color="yellow" size={15} />
            )}
          </div>
        </div>
        <span className="ml-2 font-medium text-xs text-black dark:text-gray-300">
          {darkMode ? "LIGHT MODE" : "DARK MODE"}
        </span>
      </label>
    </div>
  );
}

export default Theme;