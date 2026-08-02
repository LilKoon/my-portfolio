export const translations = {
    vi: {
        nav: {
            home: "Trang chủ",
            projects: "Dự án",
            skills: "Kỹ năng",
            contact: "Liên hệ",
        },
        hero: {
            status: "STATUS: ONLINE",
            name: "Ngô Đức Mạnh",
            roles: "[ Fullstack Developer / AI Engineer / Machine Learning Engineer ]",
            aboutHeader: "$ about me >",
            bio: {
                p1: "Tôi là sinh viên đã tốt nghiệp ngành ",
                csHighlight: "Khoa học Máy tính",
                p2: " tại Đại học Duy Tân, với nền tảng vững chắc về lập trình và tư duy giải quyết vấn đề. Trong quá trình học tập và làm việc, tôi đã tích lũy kinh nghiệm thực tế ở vai trò ",
                rolesHighlight: "Fullstack Developer, AI Engineer và ML Engineer",
                p3: ", từ việc xây dựng ứng dụng web hoàn chỉnh đến huấn luyện và triển khai các mô hình học máy vào các sản phẩm thực tế. Tôi yêu thích việc kết hợp giữa phát triển phần mềm và trí tuệ nhân tạo để tạo ra những sản phẩm vừa có kiến trúc tốt, vừa mang lại giá trị thông minh cho người dùng. Hiện tại, tôi đang tiếp tục trau dồi kỹ năng và tìm kiếm cơ hội việc làm cho bản thân để áp dụng những gì mình học được vào các dự án thực tế.",
            },
            btnProjects: "Dự án",
            btnSkills: "Kỹ năng",
            btnContact: "Liên hệ",
            terminal: {
                title: "manh@portfolio: ~",
                prompt: "$ ",
                quickHint: "Gõ lệnh, hoặc bấm nhanh:",
                cmdNotFound: "Lệnh không hợp lệ. Gõ 'help' để xem danh sách lệnh.",
                helpOutput: [
                    { cmd: "help", desc: "hiện danh sách lệnh này" },
                    { cmd: "aboutme", desc: "thông tin nhanh về mình" },
                    { cmd: "project", desc: "danh sách các dự án tiêu biểu" },
                    { cmd: "skills", desc: "kỹ năng chuyên môn" },
                    { cmd: "contact", desc: "email và các kênh liên lạc" },
                    { cmd: "banner", desc: "vẽ lại banner đầu trang" },
                    { cmd: "clear", desc: "xoá màn hình" },
                ],
                aboutmeOutput: {
                    title: "Thông tin cá nhân:",
                    items: [
                        { label: "Tên", value: "Ngô Đức Mạnh" },
                        { label: "Vai trò", value: "Fullstack Dev / AI Engineer / ML Engineer" },
                        { label: "Trường", value: "Đại học Duy Tân (Khoa học Máy tính)" },
                        { label: "Định hướng", value: "Phát triển phần mềm & Ứng dụng Trí tuệ Nhân tạo" },
                    ],
                },
                contactOutput: {
                    title: "Kênh liên lạc:",
                    items: [
                        { label: "phone", value: "0356 353 560 (+84 356 353 560)" },
                        { label: "email", value: "ngdcmanh2004@gmail.com" },
                        { label: "github", value: "https://github.com/LilKoon" },
                        { label: "linkedin", value: "https://www.linkedin.com/in/lil-koon/" },
                        { label: "facebook", value: "https://www.facebook.com/Lil.Koon/" },
                    ],
                },
                projectOutput: {
                    title: "Dự án tiêu biểu:",
                    items: [
                        { label: "EdTech AI Platform", value: "RAG, Multi-LLM Router, FastAPI & React 19" },
                        { label: "My Portfolio", value: "React 19, Vite, Tailwind v4 & Terminal CLI" },
                        { label: "HR Face-Recognition", value: "DeepFace (ArcFace), OpenCV, Flask & MS SQL Server" },
                        { label: "Hand Sign Recognition", value: "MediaPipe, LSTM, TensorFlow & Real-time Voting" },
                    ],
                },
                skillsOutput: {
                    title: "Kỹ năng chuyên môn:",
                    items: [
                        { label: "Languages", value: "Python, JavaScript, TypeScript, Java, C/C++, C#, SQL" },
                        { label: "Web & Stack", value: "React 19, Vite, Tailwind v4, FastAPI, Flask, Django" },
                        { label: "AI & Vision", value: "PyTorch, TensorFlow, OpenCV, DeepFace, MediaPipe, YOLO" },
                        { label: "NLP & RAG", value: "FAISS, Groq API, Gemini 2.0, BM25, SentenceTransformers" },
                        { label: "AI & Vibe", value: "Antigravity IDE, Cursor AI, ChatGPT, Claude, Copilot" },
                    ],
                },
            },
        },
        projectsSection: {
            badge: "FEATURED PROJECTS",
            title: "Dự Án Tiêu Biểu",
            subtitle: "Các sản phẩm thực tế đã triển khai kết hợp giữa Phát triển Web Full-stack và Trí tuệ Nhân tạo (AI/ML).",
            viewCode: "Mã nguồn GitHub",
            liveDemo: "Trải nghiệm",
            items: [
                {
                    id: "edtech-ai",
                    title: "AI-Integrated EdTech Platform for English Self-Study",
                    period: "thg 3 2026 – thg 5 2026",
                    githubUrl: "https://github.com/LilKoon/KLTN",
                    summary: "Nền tảng học tiếng Anh tích hợp AI (Đồ án tốt nghiệp) - Vai trò Scrum Master kiêm Full-stack Developer.",
                    highlights: [
                        "Điều phối nhóm 5 thành viên theo mô hình Agile/Scrum, quản lý sprint 2 tuần, backlog grooming và stand-up hàng ngày, bàn giao dự án sớm 2 tuần so với kế hoạch.",
                        "Xây dựng hệ thống RAG kết hợp Hybrid Search (FAISS + BM25), Cross-Encoder Reranking và nén ngữ cảnh, đạt độ chính xác câu trả lời >92%, giảm 40% chi phí token LLM.",
                        "Phát triển bộ điều phối Multi-LLM định tuyến giữa Groq (LLaMA 3.3/3.1, Gemma 2) và Gemini 2.0 Flash với cơ chế tự động chuyển đổi, duy trì 99.9% uptime; tích hợp module phát hiện ảo giác và pipeline OCR (PyMuPDF, EasyOCR).",
                        "Xây dựng mô hình đánh giá năng lực đầu vào (XGBoost + GRU) để chẩn đoán điểm yếu kỹ năng và dự báo tiến bộ học viên; tối ưu suy luận bằng ONNX Runtime, giảm độ trễ xuống <15ms trên CPU.",
                        "Thiết kế thuật toán sinh lộ trình học thích ứng theo điểm số thực tế.",
                        "Trực tiếp phát triển toàn bộ ứng dụng Web Full-stack End-to-End từ Backend (FastAPI, SQLAlchemy, PostgreSQL, JWT, Google OAuth2) đến Frontend (React 19, Vite, Tailwind CSS v4)."
                    ],
                    tags: ["RAG", "LLM", "Python", "FastAPI", "React 19", "Tailwind CSS v4", "ONNX Runtime", "PostgreSQL"]
                },
                {
                    id: "interactive-portfolio",
                    title: "My Portfolio",
                    period: "thg 8 2026 – thg 8 2026",
                    githubUrl: "https://github.com/LilKoon/my-portfolio",
                    summary: "Trang Portfolio cá nhân tương tác cao tích hợp cửa sổ Terminal CLI, Dark Mode và Hỗ trợ Đa ngôn ngữ.",
                    highlights: [
                        "Xây dựng giao diện Web hiện đại bằng React 19, Vite và Tailwind CSS v4 với thiết kế sắc nét, tối ưu hiệu năng và trải nghiệm người dùng.",
                        "Tích hợp cửa sổ Terminal CLI tương tác thông minh cho phép người dùng gõ lệnh hoặc bấm nút nhanh để truy xuất thông tin dự án, kỹ năng và liên hệ.",
                        "Hỗ trợ chuyển đổi ngôn ngữ Việt - Anh linh hoạt (LanguageContext) và chuyển đổi giao diện Sáng/Tối (ThemeContext) lưu trạng thái người dùng.",
                        "Tương thích hoàn hảo trên mọi kích thước màn hình (Responsive Design) từ Mobile đến Desktop."
                    ],
                    tags: ["React 19", "Vite", "Tailwind CSS v4", "JavaScript", "Terminal CLI", "UI/UX Design", "i18n"]
                },
                {
                    id: "hr-face-recognition",
                    title: "Face-Recognition Integrated HR Management System",
                    period: "thg 9 2025 – thg 12 2025",
                    githubUrl: "https://github.com/LilKoon/QLNS-FaceAttend",
                    summary: "Hệ thống Quản lý Nhân sự Full-stack, tích hợp module chấm công tự động bằng nhận diện khuôn mặt.",
                    highlights: [
                        "Phát triển ứng dụng bằng Flask (Python), JavaScript và MS SQL Server, bao gồm phân quyền đa cấp (RBAC), quản lý hồ sơ nhân viên, xếp ca làm việc, xử lý yêu cầu nghỉ phép/ứng lương và tính lương tự động.",
                        "Xây dựng module chấm công khuôn mặt thời gian thực bằng DeepFace (kiến trúc ArcFace) và OpenCV, đạt độ chính xác ~99% thông qua thuật toán Cosine Similarity.",
                        "Tối ưu lưu trữ vector đặc trưng khuôn mặt (512 chiều) dưới dạng nhị phân (VARBINARY) trực tiếp trong SQL Server, tăng tốc độ truy vấn và giảm phụ thuộc hệ thống tệp.",
                        "Thiết kế luồng chấm công thông minh với cơ chế chống trùng lặp và phản hồi giọng nói tiếng Việt (gTTS), giảm hơn 85% thời gian chấm công thủ công.",
                        "Tự động hóa tính lương hàng tháng bằng APScheduler, kèm xuất báo cáo Excel/CSV và ghi log kiểm toán.",
                        "Dự án cá nhân, tự triển khai toàn bộ end-to-end."
                    ],
                    tags: ["Python", "Flask", "DeepFace", "ArcFace", "OpenCV", "MS SQL Server", "JavaScript", "gTTS", "APScheduler"]
                },
                {
                    id: "hand-sign-recognition",
                    title: "Real-time Vietnamese Hand Sign Language Recognition System",
                    period: "thg 4 2025 – thg 5 2025",
                    githubUrl: "https://github.com/LilKoon/Hand_Sign_Language",
                    summary: "Hệ thống nhận diện ký hiệu ngôn ngữ tiếng Việt theo thời gian thực, sử dụng MediaPipe và mạng LSTM.",
                    highlights: [
                        "Xây dựng pipeline trích xuất đặc trưng bằng MediaPipe (pose + hand landmarks) và mô hình LSTM phân loại chuỗi cho 6 lớp ký hiệu.",
                        "Loại bỏ face landmarks khỏi tập đặc trưng sau khi xác định chúng gây nhiễu, giảm ~90% số chiều dữ liệu đầu vào (1548 → 144 đặc trưng/khung hình), cải thiện đáng kể khả năng tổng quát hóa.",
                        "Thiết kế phương pháp chia tập train/test theo người dùng (person-independent split) thay vì chia ngẫu nhiên theo video, nhằm loại bỏ rò rỉ dữ liệu - đạt độ chính xác 91.25%, tăng đáng kể so với 27% khi đánh giá ngẫu nhiên ban đầu.",
                        "Xây dựng pipeline tăng cường dữ liệu (data augmentation) trực tiếp trên tọa độ keypoints (lật gương, xoay, scale, time-warping), mở rộng tập huấn luyện gấp 5 lần mà không cần thu thập thêm video.",
                        "Triển khai cơ chế làm mượt dự đoán bằng voting đa số cho pipeline nhận diện thời gian thực, khắc phục hiện tượng nhảy nhãn giữa các khung hình liên tiếp.",
                        "Phát hiện và khắc phục lỗi suy luận: pipeline real-time đưa dữ liệu chưa chuẩn hóa vào mô hình đã huấn luyện trên dữ liệu chuẩn hóa - khắc phục bằng cách lưu và tái sử dụng đúng StandardScaler."
                    ],
                    tags: ["TensorFlow", "Deep Learning", "MediaPipe", "LSTM", "Python", "Computer Vision", "Data Augmentation"]
                }
            ]
        },
        skillsSection: {
            badge: "TECHNICAL SKILLS",
            title: "Kỹ Năng Chuyên Môn",
            subtitle: "Tổng hợp các ngôn ngữ lập trình, web framework, mô hình AI/ML và công cụ Vibe Coding được làm chủ qua các dự án thực tế.",
            categories: [
                {
                    id: "languages",
                    title: "Programming Languages",
                    skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "C#", "SQL"]
                },
                {
                    id: "web",
                    title: "Web Frameworks & Full-stack",
                    skills: ["React 19", "Vite", "Tailwind CSS v4", "FastAPI", "Flask", "Django", "Node.js", "RESTful APIs", "HTML5/CSS3"]
                },
                {
                    id: "ai-ml",
                    title: "AI / Machine Learning & Computer Vision",
                    skills: ["PyTorch", "TensorFlow", "YOLO", "MediaPipe", "OpenCV", "DeepFace (ArcFace)", "scikit-learn", "XGBoost", "ONNX Runtime", "LSTM & GRU"]
                },
                {
                    id: "nlp-rag",
                    title: "NLP, LLM & RAG Architecture",
                    skills: ["RAG Architecture", "FAISS", "Sentence-Transformers", "Rank-BM25", "Hybrid Search", "Cross-Encoder Reranking", "Groq API (LLaMA 3.3/3.1)", "Google Gemini 2.0 API", "EasyOCR", "PyMuPDF"]
                },
                {
                    id: "data-db",
                    title: "Data Science & Databases",
                    skills: ["PostgreSQL", "MS SQL Server", "SQLAlchemy", "NumPy", "Pandas", "OpenPyXL"]
                },
                {
                    id: "ai-vibe",
                    title: "AI Tooling & Vibe Coding",
                    isFeatured: true,
                    skills: ["Antigravity IDE", "Cursor AI", "ChatGPT", "Claude", "GitHub Copilot", "Groq Cloud", "LLM Prompting & Workflows"]
                },
                {
                    id: "tools",
                    title: "Tools & Platforms",
                    skills: ["Git / GitHub", "Agile / Scrum", "Jupyter Notebook", "VS Code", "NetBeans", "Postman"]
                }
            ]
        },
        contactSection: {
            badge: "GET IN TOUCH",
            title: "Liên Hệ Với Tôi",
            subtitle: "Hãy gửi tin nhắn hoặc kết nối trực tiếp qua các kênh cá nhân bên dưới. Tôi luôn sẵn sàng lắng nghe các cơ hội hợp tác và dự án mới!",
            form: {
                nameLabel: "Họ và tên",
                namePlaceholder: "Nhập họ và tên của bạn...",
                emailLabel: "Địa chỉ Email",
                emailPlaceholder: "example@gmail.com",
                subjectLabel: "Tiêu đề",
                subjectPlaceholder: "Hợp tác dự án / Cơ hội việc làm",
                messageLabel: "Nội dung tin nhắn",
                messagePlaceholder: "Nhập nội dung chi tiết tin nhắn của bạn ở đây...",
                submitBtn: "Gửi Tin Nhắn",
                sendingBtn: "Đang Gửi...",
                autoReplyNotice: "⚡ Hệ thống sẽ tự động gửi thư xác nhận đã nhận mail về email của bạn.",
                successTitle: "Gửi tin nhắn thành công!",
                successDesc: "Cảm ơn bạn! Ngô Đức Mạnh đã nhận được email và sẽ phản hồi lại trong thời gian ngắn nhất.",
            },
            info: {
                title: "Thông Tin & Trang Cá Nhân",
                phoneLabel: "Số điện thoại / Zalo",
                phoneValue: "0356 353 560 (+84 356 353 560)",
                emailLabel: "Email chính thức",
                emailValue: "ngdcmanh2004@gmail.com",
                copyBtn: "Sao chép",
                copiedBtn: "Đã sao chép!",
                socialsTitle: "Kết nối nhanh qua MXH",
                githubText: "Ghé thăm GitHub",
                linkedinText: "Kết nối LinkedIn",
                facebookText: "Kết nối Facebook",
            }
        }
    },
    en: {
        nav: {
            home: "Home",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
        },
        hero: {
            status: "STATUS: ONLINE",
            name: "Ngo Duc Manh",
            roles: "[ Fullstack Developer / AI Engineer / Machine Learning Engineer ]",
            aboutHeader: "$ about me >",
            bio: {
                p1: "I am a Computer Science graduate from ",
                csHighlight: "Computer Science",
                p2: " at Duy Tan University, with a solid foundation in programming and problem-solving mindset. Throughout my academic and work experience, I have gained practical expertise as a ",
                rolesHighlight: "Fullstack Developer, AI Engineer and ML Engineer",
                p3: ", from building complete web applications to training and deploying machine learning models into real-world products. I enjoy combining software engineering and artificial intelligence to build well-architected solutions that bring intelligent value to users. Currently, I am actively honing my skills and seeking career opportunities to apply my knowledge to impactful projects.",
            },
            btnProjects: "Projects",
            btnSkills: "Skills",
            btnContact: "Contact",
            terminal: {
                title: "manh@portfolio: ~",
                prompt: "$ ",
                quickHint: "Type a command or tap:",
                cmdNotFound: "Command not found. Type 'help' for available commands.",
                helpOutput: [
                    { cmd: "help", desc: "show available commands list" },
                    { cmd: "aboutme", desc: "quick information about me" },
                    { cmd: "project", desc: "featured projects list" },
                    { cmd: "skills", desc: "technical skills overview" },
                    { cmd: "contact", desc: "email and contact channels" },
                    { cmd: "banner", desc: "display header ascii banner" },
                    { cmd: "clear", desc: "clear terminal screen" },
                ],
                aboutmeOutput: {
                    title: "Personal Information:",
                    items: [
                        { label: "Name", value: "Ngo Duc Manh" },
                        { label: "Roles", value: "Fullstack Dev / AI Engineer / ML Engineer" },
                        { label: "University", value: "Duy Tan University (Computer Science)" },
                        { label: "Focus", value: "Software Engineering & Artificial Intelligence" },
                    ],
                },
                contactOutput: {
                    title: "Contact Channels:",
                    items: [
                        { label: "phone", value: "+84 356 353 560 (0356 353 560)" },
                        { label: "email", value: "ngdcmanh2004@gmail.com" },
                        { label: "github", value: "https://github.com/LilKoon" },
                        { label: "linkedin", value: "https://www.linkedin.com/in/lil-koon/" },
                        { label: "facebook", value: "https://www.facebook.com/Lil.Koon/" },
                    ],
                },
                projectOutput: {
                    title: "Featured Projects:",
                    items: [
                        { label: "EdTech AI Platform", value: "RAG, Multi-LLM Router, FastAPI & React 19" },
                        { label: "My Portfolio", value: "React 19, Vite, Tailwind v4 & Terminal CLI" },
                        { label: "HR Face-Recognition", value: "DeepFace (ArcFace), OpenCV, Flask & MS SQL Server" },
                        { label: "Hand Sign Recognition", value: "MediaPipe, LSTM, TensorFlow & Real-time Voting" },
                    ],
                },
                skillsOutput: {
                    title: "Technical Skills:",
                    items: [
                        { label: "Languages", value: "Python, JavaScript, TypeScript, Java, C/C++, C#, SQL" },
                        { label: "Web & Stack", value: "React 19, Vite, Tailwind v4, FastAPI, Flask, Django" },
                        { label: "AI & Vision", value: "PyTorch, TensorFlow, OpenCV, DeepFace, MediaPipe, YOLO" },
                        { label: "NLP & RAG", value: "FAISS, Groq API, Gemini 2.0, BM25, SentenceTransformers" },
                        { label: "AI & Vibe", value: "Antigravity IDE, Cursor AI, ChatGPT, Claude, Copilot" },
                    ],
                },
            },
        },
        projectsSection: {
            badge: "FEATURED PROJECTS",
            title: "Featured Projects",
            subtitle: "Production-grade applications combining Full-stack Web Development and Artificial Intelligence (AI/ML).",
            viewCode: "GitHub Source Code",
            liveDemo: "Live Demo",
            items: [
                {
                    id: "edtech-ai",
                    title: "AI-Integrated EdTech Platform for English Self-Study",
                    period: "Mar 2026 – May 2026",
                    githubUrl: "https://github.com/LilKoon/KLTN",
                    summary: "AI-integrated English self-study platform (Graduation Thesis) - Scrum Master & Full-stack Developer.",
                    highlights: [
                        "Coordinated a team of 5 members using Agile/Scrum, managing 2-week sprints, backlog grooming, and daily stand-ups, delivering 2 weeks ahead of schedule.",
                        "Built a RAG system combining Hybrid Search (FAISS + BM25), Cross-Encoder Reranking, and context compression, achieving >92% answer accuracy and reducing LLM token cost by 40%.",
                        "Developed a Multi-LLM orchestrator routing between Groq (LLaMA 3.3/3.1, Gemma 2) and Gemini 2.0 Flash with auto-failover, maintaining 99.9% uptime; integrated hallucination detection and OCR pipeline (PyMuPDF, EasyOCR).",
                        "Constructed an entry diagnostic model (XGBoost + GRU) to evaluate skill weaknesses and predict progress; optimized inference with ONNX Runtime, reducing latency to <15ms on CPU.",
                        "Designed an adaptive learning path generation algorithm based on real-time test scores.",
                        "Independently developed the entire Full-stack Web application end-to-end from Backend (FastAPI, SQLAlchemy, PostgreSQL, JWT, Google OAuth2) to Frontend (React 19, Vite, Tailwind CSS v4)."
                    ],
                    tags: ["RAG", "LLM", "Python", "FastAPI", "React 19", "Tailwind CSS v4", "ONNX Runtime", "PostgreSQL"]
                },
                {
                    id: "interactive-portfolio",
                    title: "My Portfolio",
                    period: "Aug 2026 – Aug 2026",
                    githubUrl: "https://github.com/LilKoon/my-portfolio",
                    summary: "Interactive personal portfolio website featuring interactive Terminal CLI, Dark Mode, and Multilingual support.",
                    highlights: [
                        "Built modern Web UI using React 19, Vite, and Tailwind CSS v4 with crisp design, optimized performance, and user experience.",
                        "Integrated interactive Terminal CLI window enabling users to type commands or tap quick actions to inspect projects, skills, and contact details.",
                        "Supported seamless Vietnamese-English language switching (LanguageContext) and persistent Light/Dark theme toggling (ThemeContext).",
                        "Fully responsive layout across mobile, tablet, and desktop viewports."
                    ],
                    tags: ["React 19", "Vite", "Tailwind CSS v4", "JavaScript", "Terminal CLI", "UI/UX Design", "i18n"]
                },
                {
                    id: "hr-face-recognition",
                    title: "Face-Recognition Integrated HR Management System",
                    period: "Sep 2025 – Dec 2025",
                    githubUrl: "https://github.com/LilKoon/QLNS-FaceAttend",
                    summary: "Full-stack HR Management System integrated with automated facial recognition attendance module.",
                    highlights: [
                        "Developed application with Flask (Python), JavaScript, and MS SQL Server including RBAC multi-level authorization, employee profiling, shift scheduling, leave requests, and automated payroll.",
                        "Built real-time face recognition attendance module using DeepFace (ArcFace architecture) and OpenCV, achieving ~99% accuracy via Cosine Similarity algorithm.",
                        "Optimized storage of 512-dimensional face feature vectors as binary (VARBINARY) directly in SQL Server, boosting query speed and reducing file system dependency.",
                        "Designed intelligent attendance flow with duplicate prevention and Vietnamese voice feedback (gTTS), reducing manual attendance time by >85%.",
                        "Automated monthly payroll calculation using APScheduler, with Excel/CSV export and audit logging.",
                        "Personal project, independently implemented end-to-end."
                    ],
                    tags: ["Python", "Flask", "DeepFace", "ArcFace", "OpenCV", "MS SQL Server", "JavaScript", "gTTS", "APScheduler"]
                },
                {
                    id: "hand-sign-recognition",
                    title: "Real-time Vietnamese Hand Sign Language Recognition System",
                    period: "Apr 2025 – May 2025",
                    githubUrl: "https://github.com/LilKoon/Hand_Sign_Language",
                    summary: "Real-time Vietnamese sign language recognition system using MediaPipe and LSTM neural networks.",
                    highlights: [
                        "Built feature extraction pipeline using MediaPipe (pose + hand landmarks) and LSTM sequence classification model for 6 sign classes.",
                        "Removed face landmarks after identifying they caused noise, reducing input dimensionality by ~90% (1548 → 144 features/frame) and significantly improving generalization.",
                        "Designed person-independent train/test split method to prevent data leakage - achieving 91.25% accuracy compared to 27% baseline random split.",
                        "Constructed keypoint data augmentation pipeline (mirroring, rotation, scaling, time-warping), expanding training dataset 5x without extra video collection.",
                        "Implemented majority voting prediction smoothing mechanism for real-time recognition pipeline, eliminating label flickering between consecutive frames.",
                        "Diagnosed and fixed inference bug: real-time pipeline passing unnormalized data into a model trained on normalized data - resolved by persisting and reusing StandardScaler."
                    ],
                    tags: ["TensorFlow", "Deep Learning", "MediaPipe", "LSTM", "Python", "Computer Vision", "Data Augmentation"]
                }
            ]
        },
        skillsSection: {
            badge: "TECHNICAL SKILLS",
            title: "Technical Skills",
            subtitle: "A comprehensive overview of programming languages, web frameworks, AI/ML models, and Vibe Coding tools mastered through production projects.",
            categories: [
                {
                    id: "languages",
                    title: "Programming Languages",
                    skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "C#", "SQL"]
                },
                {
                    id: "web",
                    title: "Web Frameworks & Full-stack",
                    skills: ["React 19", "Vite", "Tailwind CSS v4", "FastAPI", "Flask", "Django", "Node.js", "RESTful APIs", "HTML5/CSS3"]
                },
                {
                    id: "ai-ml",
                    title: "AI / Machine Learning & Computer Vision",
                    skills: ["PyTorch", "TensorFlow", "YOLO", "MediaPipe", "OpenCV", "DeepFace (ArcFace)", "scikit-learn", "XGBoost", "ONNX Runtime", "LSTM & GRU"]
                },
                {
                    id: "nlp-rag",
                    title: "NLP, LLM & RAG Architecture",
                    skills: ["RAG Architecture", "FAISS", "Sentence-Transformers", "Rank-BM25", "Hybrid Search", "Cross-Encoder Reranking", "Groq API (LLaMA 3.3/3.1)", "Google Gemini 2.0 API", "EasyOCR", "PyMuPDF"]
                },
                {
                    id: "data-db",
                    title: "Data Science & Databases",
                    skills: ["PostgreSQL", "MS SQL Server", "SQLAlchemy", "NumPy", "Pandas", "OpenPyXL"]
                },
                {
                    id: "ai-vibe",
                    title: "AI Tooling & Vibe Coding",
                    isFeatured: true,
                    skills: ["Antigravity IDE", "Cursor AI", "ChatGPT", "Claude", "GitHub Copilot", "Groq Cloud", "LLM Prompting & Workflows"]
                },
                {
                    id: "tools",
                    title: "Tools & Platforms",
                    skills: ["Git / GitHub", "Agile / Scrum", "Jupyter Notebook", "VS Code", "NetBeans", "Postman"]
                }
            ]
        },
        contactSection: {
            badge: "GET IN TOUCH",
            title: "Get In Touch",
            subtitle: "Feel free to send a message or connect directly via my social channels below. I am always open to new opportunities and project collaborations!",
            form: {
                nameLabel: "Full Name",
                namePlaceholder: "Enter your full name...",
                emailLabel: "Your Email",
                emailPlaceholder: "example@gmail.com",
                subjectLabel: "Subject",
                subjectPlaceholder: "Project Collaboration / Job Opportunity",
                messageLabel: "Message",
                messagePlaceholder: "Write your message details here...",
                submitBtn: "Send Message",
                sendingBtn: "Sending...",
                autoReplyNotice: "⚡ An automated receipt response will be dispatched to your email address immediately.",
                successTitle: "✓ Message sent successfully!",
                successDesc: "Thank you! Ngo Duc Manh has received your message and will respond as soon as possible.",
            },
            info: {
                title: "Contact Info & Profiles",
                phoneLabel: "Phone / Zalo",
                phoneValue: "+84 356 353 560 (0356 353 560)",
                emailLabel: "Official Email",
                emailValue: "ngdcmanh2004@gmail.com",
                copyBtn: "Copy",
                copiedBtn: "Copied!",
                socialsTitle: "Quick Social Connections",
                githubText: "Visit GitHub",
                linkedinText: "Connect LinkedIn",
                facebookText: "Connect Facebook",
            }
        }
    },
};
