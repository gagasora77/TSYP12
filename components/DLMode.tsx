"use client";
import styles from '@/app/index';
import { useState, useEffect } from 'react';
import { MdLightMode, MdNightlightRound } from "react-icons/md";

type Theme = 'light' | 'dark';

const DLMode = () => {
    const [ theme, setTheme ] = useState<Theme>('light');

    useEffect(() => {
        const browserTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme as Theme);
        } else {
            setTheme(browserTheme as Theme);
        }
        handleThemeChange(browserTheme as Theme);

        const themeChangeHandler = (e: MediaQueryListEvent) => {
            const newTheme = e.matches ? 'dark' : 'light';
            setTheme(newTheme);
            localStorage.setItem("theme", newTheme);
            handleThemeChange(newTheme);
        };

        const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        themeMediaQuery.addEventListener("change", themeChangeHandler);

        return () => {
            themeMediaQuery.removeEventListener("change", themeChangeHandler);
        };
    }, []);

    function toggleMode() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        handleThemeChange(newTheme);
    }

    function handleThemeChange(selectedTheme: Theme) {
        if (selectedTheme === 'dark') {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    return (
        <div>
            <button onClick={toggleMode} className={styles.navMode}>
                {theme === "dark" ? <MdLightMode /> : <MdNightlightRound />}
            </button>
        </div>
    );
};

export default DLMode;
