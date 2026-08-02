import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
    const { t } = useLanguage();
    const projectsData = t.projectsSection || {};
    const [expandedCards, setExpandedCards] = useState({
        "edtech-ai": true,
        "hr-face-recognition": true,
        "hand-sign-recognition": true,
        "interactive-portfolio": true,
    });

    const toggleExpand = (id) => {
        setExpandedCards((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 text-xs font-extrabold tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                    {projectsData.badge || "FEATURED PROJECTS"}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                    {projectsData.title}
                </h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                    {projectsData.subtitle}
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-8">
                {projectsData.items?.map((project) => {
                    const isExpanded = expandedCards[project.id];
                    return (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 group"
                        >
                            {/* Top Header: Title & Time Period & GitHub Button */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 border-b border-slate-100 dark:border-slate-800/80 pb-4">
                                <div className="space-y-1">
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 italic">
                                        {project.summary}
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-3 shrink-0">
                                    <span className="inline-block px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono font-semibold border border-slate-200/50 dark:border-slate-700/50">
                                        {project.period}
                                    </span>
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-white font-semibold text-xs transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
                                        >
                                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                            <span>{projectsData.viewCode || "GitHub"}</span>
                                            <svg className="w-3 h-3 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Project Key Highlights */}
                            <div className="space-y-3 mb-6">
                                <ul className="space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                                    {(isExpanded ? project.highlights : project.highlights.slice(0, 3)).map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-blue-600 dark:text-blue-400 font-bold mt-1 text-xs select-none">
                                                ❖
                                            </span>
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {project.highlights.length > 3 && (
                                    <button
                                        onClick={() => toggleExpand(project.id)}
                                        className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline pt-1 inline-flex items-center gap-1 cursor-pointer"
                                    >
                                        {isExpanded ? "▲ Thu gọn thông tin" : `▼ Xem thêm (${project.highlights.length - 3} ý chi tiết)`}
                                    </button>
                                )}
                            </div>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                                {project.tags?.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50 text-xs font-semibold"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
