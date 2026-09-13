import { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isLight = stored === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className="grid h-10 w-10 place-items-center rounded-full border border-purple/40 bg-purple/10 text-purple transition-colors hover:bg-purple/25"
    >
      {light ? <BsMoonStars aria-hidden /> : <BsSun aria-hidden />}
    </button>
  );
}
