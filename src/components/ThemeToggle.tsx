import { useEffect, useState } from "react";
import { toggleTheme } from "../utils/theme";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setIsDark(saved);
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  return (
    <button
      className="bg-teal-500 py-2 px-2 text-center rounded text-sm"
      onClick={handleToggle}
      aria-label="Toggle Theme"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
