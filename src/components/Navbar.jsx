import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("home");
    const { lang, toggleLang, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { id: "home", name: t.nav.home, href: "#home" },
        { id: "projects", name: t.nav.projects, href: "#projects" },
        { id: "skills", name: t.nav.skills, href: "#skills" },
        { id: "contact", name: t.nav.contact, href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map((link) => link.id);
            const scrollPosition = window.scrollY + 100;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveTab(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navLinks]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header height increased to h-20 (80px) for a larger, more prominent header */}
                <div className="relative flex items-center justify-between h-20">
                    {/* Left space to balance header alignment */}
                    <div className="w-1/4 flex justify-start items-center">
                        <a 
                            href="#home" 
                            className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            Portfolio
                        </a>
                    </div>

                    {/* Centered nav links on desktop */}
                    <nav className="hidden md:flex items-center justify-center space-x-10 font-medium">
                        {navLinks.map((link) => {
                            const isActive = activeTab === link.id;
                            return (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    onClick={() => setActiveTab(link.id)}
                                    className={`relative py-1.5 text-base font-semibold transition-colors duration-150 ${
                                        isActive
                                            ? "text-blue-600 dark:text-blue-400"
                                            : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                                    }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300" />
                                    )}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Right side controls: Darkmode + Switch Language */}
                    <div className="w-1/4 flex items-center justify-end space-x-3.5">
                        {/* Dark mode toggle button */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle Dark Mode"
                            title={theme === "dark" ? "Chuyển sang Giao diện Sáng" : "Chuyển sang Giao diện Tối"}
                            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer ${
                                theme === "dark"
                                    ? "bg-blue-500/10 dark:bg-slate-800 border border-blue-500/30 text-blue-500 dark:text-blue-400 shadow-xs"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                            }`}
                        >
                            {/* Moon Icon: Colored Blue in Dark Mode */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-5 h-5 transition-transform duration-300 ${
                                    theme === "dark"
                                        ? "text-blue-500 dark:text-blue-400 fill-blue-500/20 rotate-[-12deg]"
                                        : "text-slate-600"
                                }`}
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                            </svg>
                        </button>

                        {/* Switch Language Pill Toggle */}
                        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full border border-slate-200/50 dark:border-slate-700/50">
                            <button
                                onClick={() => lang !== "vi" && toggleLang()}
                                aria-pressed={lang === "vi"}
                                className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                                    lang === "vi"
                                        ? "bg-blue-600 text-white shadow-xs"
                                        : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                                }`}
                            >
                                VI
                            </button>
                            <button
                                onClick={() => lang !== "en" && toggleLang()}
                                aria-pressed={lang === "en"}
                                className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                                    lang === "en"
                                        ? "bg-blue-600 text-white shadow-xs"
                                        : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                                }`}
                            >
                                EN
                            </button>
                        </div>

                        {/* Hamburger Button for Mobile */}
                        <button
                            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-6 py-4 space-y-3">
                    {navLinks.map((link) => {
                        const isActive = activeTab === link.id;
                        return (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={() => {
                                    setActiveTab(link.id);
                                    setIsOpen(false);
                                }}
                                className={`block text-center py-2 text-base font-semibold transition-colors ${
                                    isActive
                                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-lg"
                                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                                }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>
            )}
        </header>
    );
}
