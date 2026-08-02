import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
    const { t } = useLanguage();
    const skillsData = t.skillsSection || {};

    const categoryIcons = {
        languages: (
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        web: (
            <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
        "ai-ml": (
            <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        "nlp-rag": (
            <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        "data-db": (
            <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
        "ai-vibe": (
            <svg className="w-5 h-5 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        tools: (
            <svg className="w-5 h-5 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    };

    return (
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 text-xs font-extrabold tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                    {skillsData.badge || "TECHNICAL SKILLS"}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                    {skillsData.title}
                </h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                    {skillsData.subtitle}
                </p>
            </div>

            {/* Grid of Skill Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.categories?.map((cat) => {
                    const isFeatured = cat.isFeatured;
                    return (
                        <div
                            key={cat.id}
                            className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 relative group flex flex-col justify-between ${
                                isFeatured
                                    ? "bg-purple-50/80 dark:bg-purple-950/40 border-2 border-purple-400/80 dark:border-purple-500/60 shadow-lg shadow-purple-500/10"
                                    : "bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/40"
                            }`}
                        >
                            {/* Top Header Row: Icon + Title on left, Badge on top-right */}
                            <div>
                                <div className="flex items-start justify-between gap-3 mb-5">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`p-2.5 rounded-2xl shrink-0 ${
                                                isFeatured
                                                    ? "bg-purple-200/60 dark:bg-purple-900/50 border border-purple-300/80 dark:border-purple-700/60"
                                                    : "bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50"
                                            }`}
                                        >
                                            {categoryIcons[cat.id] || categoryIcons.tools}
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                                            {cat.title}
                                        </h3>
                                    </div>

                                    {isFeatured && (
                                        <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-purple-600 to-indigo-600 text-white uppercase tracking-wider shadow-sm shrink-0">
                                            AI & VIBE
                                        </span>
                                    )}
                                </div>

                                {/* Skill Badges */}
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills?.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`px-3.5 py-1.5 rounded-2xl text-xs font-semibold transition-all duration-200 cursor-default ${
                                                isFeatured
                                                    ? "bg-purple-100/90 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 border border-purple-200 dark:border-purple-800/80 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white"
                                                    : "bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:border-blue-600"
                                            }`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
