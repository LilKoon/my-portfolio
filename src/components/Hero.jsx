import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();
    const [inputVal, setInputVal] = useState("");
    const [history, setHistory] = useState([
        {
            command: "banner",
            outputType: "banner",
            typeData: null,
        },
        {
            command: "help",
            outputType: "help",
            typeData: null,
        },
    ]);
    const terminalBodyRef = useRef(null);
    const inputRef = useRef(null);

    // Scroll only the terminal container internally without affecting window scroll
    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [history]);

    const executeCommand = (cmdStr) => {
        const trimmed = cmdStr.trim().toLowerCase();
        if (!trimmed) return;

        if (trimmed === "clear") {
            setHistory([]);
            setInputVal("");
            return;
        }

        let typeData = null;
        let outputType = "text";

        if (trimmed === "help") {
            outputType = "help";
            typeData = t.hero?.terminal?.helpOutput;
        } else if (trimmed === "aboutme" || trimmed === "whoami") {
            outputType = "aboutme";
            typeData = t.hero?.terminal?.aboutmeOutput;
        } else if (trimmed === "contact") {
            outputType = "contact";
            typeData = t.hero?.terminal?.contactOutput;
        } else if (trimmed === "project" || trimmed === "projects" || trimmed === "writeup") {
            outputType = "project";
            typeData = t.hero?.terminal?.projectOutput;
        } else if (trimmed === "skills" || trimmed === "cve") {
            outputType = "skills";
            typeData = t.hero?.terminal?.skillsOutput;
        } else if (trimmed === "banner") {
            outputType = "banner";
        } else {
            outputType = "error";
            typeData = t.hero?.terminal?.cmdNotFound || "Command not found.";
        }

        setHistory((prev) => [
            ...prev,
            { command: cmdStr, outputType, typeData },
        ]);
        setInputVal("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        executeCommand(inputVal);
    };

    const handleQuickClick = (cmd) => {
        executeCommand(cmd);
        inputRef.current?.focus();
    };

    const renderOutput = (item) => {
        if (item.outputType === "help") {
            const helpList = t.hero?.terminal?.helpOutput || [];
            return (
                <div className="space-y-1.5 pt-1 text-slate-300 font-mono">
                    {helpList.map((h, i) => (
                        <div key={i} className="flex font-mono">
                            <span className="text-emerald-400 font-bold whitespace-pre shrink-0">
                                {h.cmd.padEnd(12, " ")}
                            </span>
                            <span className="text-slate-400">{h.desc}</span>
                        </div>
                    ))}
                </div>
            );
        }

        if (item.outputType === "aboutme" || item.outputType === "whoami") {
            const data = t.hero?.terminal?.aboutmeOutput;
            if (!data) return null;
            return (
                <div className="space-y-1.5 pt-1 font-mono">
                    <p className="text-amber-400 font-bold">{data.title}</p>
                    {data.items?.map((it, i) => (
                        <div key={i} className="flex font-mono">
                            <span className="text-emerald-500 font-bold mr-2 shrink-0">[+]</span>
                            <span className="text-slate-400 whitespace-pre shrink-0">
                                {it.label.padEnd(12, " ")}:{" "}
                            </span>
                            <span className="text-slate-200 font-semibold">{it.value}</span>
                        </div>
                    ))}
                </div>
            );
        }

        if (item.outputType === "contact") {
            const data = t.hero?.terminal?.contactOutput;
            if (!data) return null;
            return (
                <div className="space-y-1.5 pt-1 font-mono">
                    <p className="text-amber-400 font-bold">{data.title}</p>
                    {data.items?.map((it, i) => (
                        <div key={i} className="flex font-mono">
                            <span className="text-emerald-500 font-bold mr-2 shrink-0">[+]</span>
                            <span className="text-slate-400 whitespace-pre shrink-0">
                                {it.label.padEnd(10, " ")}:{" "}
                            </span>
                            <span className="text-slate-200 font-semibold">{it.value}</span>
                        </div>
                    ))}
                </div>
            );
        }

        if (item.outputType === "project") {
            const data = t.hero?.terminal?.projectOutput;
            if (!data) return null;
            return (
                <div className="space-y-1.5 pt-1 font-mono">
                    <p className="text-amber-400 font-bold">{data.title}</p>
                    {data.items?.map((it, i) => (
                        <div key={i} className="flex font-mono">
                            <span className="text-emerald-500 font-bold mr-2 shrink-0">[+]</span>
                            <span className="text-slate-200 font-semibold whitespace-pre shrink-0">
                                {it.label.padEnd(26, " ")}:{" "}
                            </span>
                            <span className="text-slate-400">{it.value}</span>
                        </div>
                    ))}
                </div>
            );
        }

        if (item.outputType === "skills") {
            const data = t.hero?.terminal?.skillsOutput;
            if (!data) return null;
            return (
                <div className="space-y-1.5 pt-1 font-mono">
                    <p className="text-amber-400 font-bold">{data.title}</p>
                    {data.items?.map((it, i) => (
                        <div key={i} className="flex font-mono">
                            <span className="text-emerald-500 font-bold mr-2 shrink-0">[+]</span>
                            <span className="text-slate-400 whitespace-pre shrink-0">
                                {it.label.padEnd(10, " ")}:{" "}
                            </span>
                            <span className="text-slate-200 font-semibold">{it.value}</span>
                        </div>
                    ))}
                </div>
            );
        }

        if (item.outputType === "banner") {
            const bannerLines = [
                "█▄  █ ▄█▀▀█ ▄█▀▀█▄   █▀▀█  █  █ ▄█▀▀█   █▄  ▄█ ▄█▀▀█▄ █▄  █ █  █",
                "█ ▀▄█ █  ▄▄ █    █   █   █ █  █ █       █ ▀▀ █ █▀▀▀▀█ █ ▀▄█ █▀▀█",
                "█   █ ▀█▄▄█ ▀█▄▄█▀   █▄▄█  ▀▄▄▀ ▀█▄▄█   █    █ █    █ █   █ █  █",
            ];
            return (
                <div className="py-2 overflow-x-hidden">
                    <pre className="text-blue-400 font-mono text-[10px] sm:text-xs font-bold leading-tight tracking-normal select-none">
                        {bannerLines.join("\n")}
                    </pre>
                </div>
            );
        }

        return <div className="text-rose-400 font-mono pt-1">{item.typeData}</div>;
    };

    return (
        <section
            id="home"
            className="min-h-screen relative flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 overflow-hidden"
        >
            {/* Grid Blueprint Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
                {/* Left Column: Hero Information */}
                <div className="lg:col-span-7 space-y-6">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {t.hero?.status}
                    </div>

                    {/* Name */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-600 dark:text-blue-500 tracking-tight">
                        {t.hero?.name}
                    </h1>

                    {/* Roles */}
                    <p className="font-mono text-slate-600 dark:text-slate-400 text-sm sm:text-base font-semibold">
                        {t.hero?.roles}
                    </p>

                    {/* About me prompt line */}
                    <div className="flex items-center gap-2 font-mono text-blue-600 dark:text-blue-400 font-bold text-lg pt-2">
                        <span>{t.hero?.aboutHeader}</span>
                        <span className="w-2.5 h-5 bg-blue-600 dark:bg-blue-400 animate-pulse inline-block" />
                    </div>

                    {/* Bio Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-normal">
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
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-6 py-2.5 bg-slate-200/70 dark:bg-slate-800/90 border border-slate-300/50 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:hover:text-white font-bold rounded-xl shadow-xs hover:shadow-md transition-all duration-200"
                        >
                            {t.hero?.btnProjects}
                        </a>
                        <a
                            href="#skills"
                            className="px-6 py-2.5 bg-slate-200/70 dark:bg-slate-800/90 border border-slate-300/50 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:hover:text-white font-bold rounded-xl shadow-xs hover:shadow-md transition-all duration-200"
                        >
                            {t.hero?.btnSkills}
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-2.5 bg-slate-200/70 dark:bg-slate-800/90 border border-slate-300/50 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:hover:text-white font-bold rounded-xl shadow-xs hover:shadow-md transition-all duration-200"
                        >
                            {t.hero?.btnContact}
                        </a>
                    </div>
                </div>

                {/* Right Column: Interactive Command Prompt Window */}
                <div className="lg:col-span-5 w-full">
                    <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col h-[480px]">
                        {/* Terminal Header Bar */}
                        <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                            {/* Mac Window dots */}
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                            </div>

                            {/* Window Title */}
                            <span className="font-mono text-xs text-slate-400 font-medium">
                                {t.hero?.terminal?.title || "manh@portfolio: ~"}
                            </span>

                            <div className="w-12" />
                        </div>

                        {/* Terminal Output & Command Body */}
                        <div
                            ref={terminalBodyRef}
                            className="p-4 font-mono text-sm flex-1 overflow-y-auto custom-scrollbar space-y-4 cursor-text bg-slate-900 selection:bg-rose-500 selection:text-white"
                            onClick={() => inputRef.current?.focus()}
                        >
                            {history.map((item, idx) => (
                                <div key={idx} className="space-y-1">
                                    <div className="flex items-center gap-2 font-bold">
                                        <span className="text-rose-500">{t.hero?.terminal?.prompt || "$ "}</span>
                                        <span className="text-slate-100 font-medium">{item.command}</span>
                                    </div>
                                    {renderOutput(item)}
                                </div>
                            ))}

                            {/* Active Input Line */}
                            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
                                <span className="text-rose-500 font-bold shrink-0">
                                    {t.hero?.terminal?.prompt || "$ "}
                                </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputVal}
                                    onChange={(e) => setInputVal(e.target.value)}
                                    className="flex-1 bg-transparent outline-none border-none text-slate-100 font-mono text-sm caret-rose-500"
                                    autoFocus
                                    spellCheck={false}
                                />
                            </form>
                        </div>

                        {/* Terminal Quick Action Buttons */}
                        <div className="p-3 bg-slate-950/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                            <span className="text-slate-400">
                                {t.hero?.terminal?.quickHint}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                                {["help", "aboutme", "project", "contact"].map((cmd) => (
                                    <button
                                        key={cmd}
                                        onClick={() => handleQuickClick(cmd)}
                                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition-all duration-150 font-medium cursor-pointer"
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
