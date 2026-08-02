import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();
    const [inputVal, setInputVal] = useState("");
    const [history, setHistory] = useState([]);
    const terminalBodyRef = useRef(null);
    const inputRef = useRef(null);

    // Initial banner trigger
    useEffect(() => {
        setHistory([
            {
                command: "banner",
                outputType: "banner",
            },
            {
                command: "help",
                outputType: "help",
            },
        ]);
    }, []);

    // Auto-scroll terminal body to bottom on history change
    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (rawCmd) => {
        const cmd = rawCmd.trim().toLowerCase();
        if (!cmd) return;

        if (cmd === "clear") {
            setHistory([]);
            return;
        }

        let outputType = "unknown";
        if (["help", "aboutme", "project", "skills", "contact", "banner"].includes(cmd)) {
            outputType = cmd;
        }

        setHistory((prev) => [
            ...prev,
            {
                command: rawCmd,
                outputType,
                typeData: outputType === "unknown" ? t.hero?.terminal?.cmdNotFound : null,
            },
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCommand(inputVal);
        setInputVal("");
    };

    const handleQuickClick = (cmd) => {
        handleCommand(cmd);
        inputRef.current?.focus();
    };

    const renderOutput = (item) => {
        if (item.outputType === "help") {
            const list = t.hero?.terminal?.helpOutput || [];
            return (
                <div className="space-y-1.5 pt-1 text-xs sm:text-sm font-mono">
                    {list.map((it, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                            <span className="text-emerald-400 font-bold w-24 shrink-0">{it.cmd}</span>
                            <span className="text-slate-300 font-normal">{it.desc}</span>
                        </div>
                    ))}
                </div>
            );
        }

        if (item.outputType === "aboutme") {
            const data = t.hero?.terminal?.aboutmeOutput;
            if (!data) return null;
            return (
                <div className="space-y-1.5 pt-1 text-xs sm:text-sm font-mono">
                    <p className="text-amber-400 font-bold">{data.title}</p>
                    {data.items?.map((it, i) => (
                        <div key={i} className="flex flex-col min-[480px]:flex-row min-[480px]:items-start gap-0.5 sm:gap-0">
                            <div className="flex items-center shrink-0">
                                <span className="text-emerald-500 font-bold mr-1.5 shrink-0">[+]</span>
                                <span className="text-slate-200 font-semibold mr-2">{it.label}:</span>
                            </div>
                            <span className="text-slate-300 font-normal">{it.value}</span>
                        </div>
                    ))}
                </div>
            );
        }

        if (item.outputType === "contact") {
            const data = t.hero?.terminal?.contactOutput;
            if (!data) return null;
            return (
                <div className="space-y-1.5 pt-1 text-xs sm:text-sm font-mono">
                    <p className="text-amber-400 font-bold">{data.title}</p>
                    {data.items?.map((it, i) => (
                        <div key={i} className="flex flex-col min-[480px]:flex-row min-[480px]:items-start gap-0.5 sm:gap-0">
                            <div className="flex items-center shrink-0">
                                <span className="text-emerald-500 font-bold mr-1.5 shrink-0">[+]</span>
                                <span className="text-slate-200 font-semibold mr-2">{it.label}:</span>
                            </div>
                            <span className="text-slate-300 font-normal break-all">{it.value}</span>
                        </div>
                    ))}
                </div>
            );
        }

        if (item.outputType === "project") {
            const data = t.hero?.terminal?.projectOutput;
            if (!data) return null;
            return (
                <div className="space-y-1.5 pt-1 text-xs sm:text-sm font-mono">
                    <p className="text-amber-400 font-bold">{data.title}</p>
                    {data.items?.map((it, i) => (
                        <div key={i} className="flex flex-col min-[480px]:flex-row min-[480px]:items-start gap-0.5 sm:gap-0">
                            <div className="flex items-center shrink-0">
                                <span className="text-emerald-500 font-bold mr-1.5 shrink-0">[+]</span>
                                <span className="text-slate-200 font-semibold mr-2">{it.label}:</span>
                            </div>
                            <span className="text-slate-300 font-normal">{it.value}</span>
                        </div>
                    ))}
                </div>
            );
        }

        if (item.outputType === "skills") {
            const data = t.hero?.terminal?.skillsOutput;
            if (!data) return null;
            return (
                <div className="space-y-1.5 pt-1 text-xs sm:text-sm font-mono">
                    <p className="text-amber-400 font-bold">{data.title}</p>
                    {data.items?.map((it, i) => (
                        <div key={i} className="flex flex-col min-[480px]:flex-row min-[480px]:items-start gap-0.5 sm:gap-0">
                            <div className="flex items-center shrink-0">
                                <span className="text-emerald-500 font-bold mr-1.5 shrink-0">[+]</span>
                                <span className="text-slate-300 mr-2">{it.label}:</span>
                            </div>
                            <span className="text-slate-200 font-semibold">{it.value}</span>
                        </div>
                    ))}
                </div>
            );
        }

        if (item.outputType === "banner") {
            const bannerLines = [
                "█▄\u00A0\u00A0█\u00A0▄█▀▀█\u00A0▄█▀▀█▄\u00A0\u00A0\u00A0█▀▀█\u00A0\u00A0█\u00A0\u00A0█\u00A0▄█▀▀█\u00A0\u00A0\u00A0█▄\u00A0\u00A0▄█\u00A0▄█▀▀█▄\u00A0█▄\u00A0\u00A0█\u00A0█\u00A0\u00A0█",
                "█\u00A0▀▄█\u00A0█\u00A0\u00A0▄▄\u00A0█\u00A0\u00A0\u00A0\u00A0█\u00A0\u00A0\u00A0█\u00A0\u00A0\u00A0█\u00A0█\u00A0\u00A0█\u00A0█\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0█\u00A0▀▀\u00A0█\u00A0█▀▀▀▀█\u00A0█\u00A0▀▄█\u00A0█▀▀█",
                "█\u00A0\u00A0\u00A0█\u00A0▀█▄▄█\u00A0▀█▄▄█▀\u00A0\u00A0\u00A0█▄▄█\u00A0\u00A0▀▄▄▀\u00A0▀█▄▄█\u00A0\u00A0\u00A0█\u00A0\u00A0\u00A0\u00A0█\u00A0█\u00A0\u00A0\u00A0\u00A0█\u00A0█\u00A0\u00A0\u00A0█\u00A0█\u00A0\u00A0█",
            ];
            return (
                <div className="py-2 overflow-x-auto custom-scrollbar select-none">
                    <pre className="text-blue-400 font-mono text-[1.9vw] min-[380px]:text-[2.1vw] sm:text-xs font-bold leading-tight tracking-tighter sm:tracking-normal inline-block whitespace-pre">
                        {bannerLines.join("\n")}
                    </pre>
                </div>
            );
        }

        return <div className="text-rose-400 font-mono text-xs sm:text-sm pt-1">{item.typeData}</div>;
    };

    return (
        <section
            id="home"
            className="min-h-screen relative flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 overflow-hidden"
        >
            {/* Grid Blueprint Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center z-10">
                {/* Left Column: Hero Information */}
                <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {t.hero?.status}
                    </div>

                    {/* Name */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-blue-600 dark:text-blue-500 tracking-tight">
                        {t.hero?.name}
                    </h1>

                    {/* Roles */}
                    <p className="font-mono text-slate-600 dark:text-slate-400 text-xs sm:text-base font-semibold">
                        {t.hero?.roles}
                    </p>

                    {/* About me prompt line */}
                    <div className="flex items-center gap-2 font-mono text-blue-600 dark:text-blue-400 font-bold text-base sm:text-lg pt-1 sm:pt-2">
                        <span>{t.hero?.aboutHeader}</span>
                        <span className="w-2.5 h-5 bg-blue-600 dark:bg-blue-400 animate-pulse inline-block" />
                    </div>

                    {/* Bio Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                        {t.hero?.bio?.p1}
                        <strong className="text-blue-600 dark:text-blue-400 font-semibold">
                            {t.hero?.bio?.csHighlight}
                        </strong>
                        {t.hero?.bio?.p2}
                        <strong className="text-blue-600 dark:text-blue-400 font-semibold">
                            {t.hero?.bio?.rolesHighlight}
                        </strong>
                        {t.hero?.bio?.p3}
                    </p>

                    {/* Action Buttons: Scrolls page to section when clicked */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <a
                            href="#projects"
                            className="px-5 py-2.5 sm:px-6 bg-slate-200/70 dark:bg-slate-800/90 border border-slate-300/50 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:hover:text-white font-bold rounded-xl text-xs sm:text-base shadow-xs hover:shadow-md transition-all duration-200"
                        >
                            {t.hero?.btnProjects}
                        </a>
                        <a
                            href="#skills"
                            className="px-5 py-2.5 sm:px-6 bg-slate-200/70 dark:bg-slate-800/90 border border-slate-300/50 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:hover:text-white font-bold rounded-xl text-xs sm:text-base shadow-xs hover:shadow-md transition-all duration-200"
                        >
                            {t.hero?.btnSkills}
                        </a>
                        <a
                            href="#contact"
                            className="px-5 py-2.5 sm:px-6 bg-slate-200/70 dark:bg-slate-800/90 border border-slate-300/50 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:hover:text-white font-bold rounded-xl text-xs sm:text-base shadow-xs hover:shadow-md transition-all duration-200"
                        >
                            {t.hero?.btnContact}
                        </a>
                    </div>
                </div>

                {/* Right Column: Interactive Command Prompt Window */}
                <div className="lg:col-span-5 w-full">
                    <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col h-[580px] sm:h-[500px]">
                        {/* Terminal Header Bar */}
                        <div className="px-3.5 py-2.5 sm:px-4 sm:py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                            {/* Mac Window dots */}
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500 inline-block" />
                                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500 inline-block" />
                                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 inline-block" />
                            </div>

                            {/* Window Title */}
                            <span className="font-mono text-[11px] sm:text-xs text-slate-400 font-medium">
                                {t.hero?.terminal?.title || "manh@portfolio: ~"}
                            </span>

                            <div className="w-8 sm:w-12" />
                        </div>

                        {/* Terminal Output & Command Body */}
                        <div
                            ref={terminalBodyRef}
                            role="button"
                            tabIndex={0}
                            className="p-3 sm:p-4 font-mono text-xs sm:text-sm flex-1 overflow-y-auto custom-scrollbar space-y-3 sm:space-y-4 cursor-text bg-slate-900 selection:bg-rose-500 selection:text-white focus:outline-none"
                            onClick={() => inputRef.current?.focus()}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    inputRef.current?.focus();
                                }
                            }}
                        >
                            {history.map((item, idx) => (
                                <div key={idx} className="space-y-1">
                                    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                                        <span className="text-rose-500">{t.hero?.terminal?.prompt || "$ "}</span>
                                        <span className="text-slate-100 font-medium">{item.command}</span>
                                    </div>
                                    {renderOutput(item)}
                                </div>
                            ))}

                            {/* Active Input Line */}
                            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1 text-xs sm:text-sm">
                                <span className="text-rose-500 font-bold shrink-0">
                                    {t.hero?.terminal?.prompt || "$ "}
                                </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputVal}
                                    onChange={(e) => setInputVal(e.target.value)}
                                    className="flex-1 bg-transparent outline-none border-none text-slate-100 font-mono text-xs sm:text-sm caret-rose-500"
                                    spellCheck={false}
                                />
                            </form>
                        </div>

                        {/* Terminal Quick Action Buttons */}
                        <div className="p-2.5 sm:p-3 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] sm:text-xs font-mono">
                            <span className="text-slate-400 font-medium">
                                {t.hero?.terminal?.quickHint}
                            </span>
                            <div className="flex flex-wrap gap-1 sm:gap-1.5">
                                {["help", "aboutme", "project", "contact"].map((cmd) => (
                                    <button
                                        key={cmd}
                                        onClick={() => handleQuickClick(cmd)}
                                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition-all duration-150 font-medium cursor-pointer"
                                    >
                                        {cmd}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
