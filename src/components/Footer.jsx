import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { lang } = useLanguage();

    return (
        <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 py-10 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-6">
                <div className="text-center space-y-1">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        © {new Date().getFullYear()} Ngô Đức Mạnh. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                        {lang === "vi"
                            ? "Thiết kế & phát triển với React 19, Vite, Tailwind CSS v4."
                            : "Built & designed with React 19, Vite, Tailwind CSS v4."}
                    </p>
                </div>
            </div>
        </footer>
    );
}
