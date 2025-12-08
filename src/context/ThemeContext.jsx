import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const getInitialTheme = () => {
        // Check if user has a saved preference
        const savedTheme = localStorage.getItem('kimi-theme');

        if (savedTheme) {
            // Return user's saved preference (subsequent visits)
            return savedTheme;
        }

        // First visit: detect system theme
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }

        // Fallback to light if system theme can't be detected
        return 'light';
    };

    const [themeMode, setThemeMode] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;

        if (themeMode === 'system') {
            // If user explicitly chooses 'system', detect current system preference
            const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            root.setAttribute('data-theme', isDark ? 'dark' : 'light');
        } else {
            root.setAttribute('data-theme', themeMode);
        }

        // Save user's theme preference
        localStorage.setItem('kimi-theme', themeMode);
    }, [themeMode]);

    // Listen for system theme changes when user has 'system' selected
    useEffect(() => {
        if (themeMode !== 'system') return;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            const root = document.documentElement;
            root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [themeMode]);

    const setTheme = (newTheme) => {
        setThemeMode(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ themeMode, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
