import React, { useEffect, useState } from "react";
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
    <button onClick={handleToggle} aria-label="Toggle Theme">
      {isDark ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
