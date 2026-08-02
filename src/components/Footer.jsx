import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { lang } = useLanguage();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 py-10 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left space-y-1">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        © {new Date().getFullYear()} Ngô Đức Mạnh. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                        {lang === "vi"
                            ? "Thiết kế & phát triển với React 19, Vite, Tailwind CSS v4."
                            : "Built & designed with React 19, Vite, Tailwind CSS v4."}
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        title={lang === "vi" ? "Về đầu trang" : "Back to top"}
                        className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-slate-600 dark:text-slate-300 transition-all duration-200 cursor-pointer shadow-xs"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
