import { useEffect, useState } from "react";
import BracketWord from "./bracketWord";

type Theme = "light" | "dark";

function getInitialTheme(): Theme{
  const saved = localStorage.getItem("theme");
  if (saved == "light" || saved == "dark") return saved;
  return window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
}

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")} className="">
      <BracketWord>
        {theme == "dark" ? "Light Mode" : "Dark Mode"}
      </BracketWord>
    </button>
  )
}
