export const AI_KNOWLEDGE = {
    profile: {
        name: "Anmol Agarwal",
        role: "Software Development Engineer (SDE) & AI Specialist",
        education: "BTech in Computer Science Engineering, Anand International College of Engineering (2023-Present) | CGPA: 9.1/10",
        internships: "Software Engineering Intern at Jackal Tech Ltd (Rwanda/South Africa) - Worked on production-grade systems.",
        email: "anmolagarwal2503@gmail.com",
        github: "https://github.com/AnmollCodes",
        linkedin: "https://www.linkedin.com/in/anmol-agarwal25/",
        summary: "I am a product-focused Software Engineer who bridges the gap between Full Stack Engineering and Artificial Intelligence. Unlike many who stop at the model, I build the full application—database to deployment. I have real-world experience shipping code at Jackal Tech Ltd and have secured global ranks in competitive programming (Meta Hacker Cup)."
    },
    skills: {
        frontend: ["React.js", "Next.js", "Tailwind CSS", "Flutter", "HTML5/SASS", "Redux"],
        backend: ["Node.js", "Express.js", "Python (Django/Flask)", "Firebase", "MongoDB", "SQL"],
        ai_ml: ["LLMs (Large Language Models)", "RAG (Retrieval Augmented Generation)", "AI Agents", "TensorFlow", "OpenCV", "Computer Vision", "Prompt Engineering"],
        tools: ["Docker", "Git/GitHub", "AWS", "Linux (Ubuntu)", "Postman"]
    },
    projects: [
        {
            name: "Barista StarBucks AI Agent",
            keywords: ["starbucks", "agent", "coffee", "order", "conversational", "ai", "bot"],
            description: "A production-grade Conversational AI agent acting as a Starbucks barista. It processes complex natural language orders, manages state, and triggers simulated backend fulfillment.",
            tech_stack: ["LLM Agents", "RAG", "Python", "Backend Engineering"],
            impact: "Handles 50+ unique drink variations with zero latency in order parsing."
        },
        {
            name: "NeuroPDF",
            keywords: ["pdf", "document", "chat", "reading", "cognitive", "ai", "parsing"],
            description: "A cognitive AI layer over PDF documents. Instead of just reading, users can have a dialogue with their documents to extract insights, summaries, and answers instantly.",
            tech_stack: ["Vector Embeddings (Pinecone)", "LLM", "React"],
            impact: "Reduces document analysis time by 90% with <200ms query latency."
        },
        {
            name: "UbuntuOS Portfolio",
            keywords: ["portfolio", "ubuntu", "os", "system", "website", "react"],
            description: "This very portfolio! A fully functional browser-based operating system simulation including window management, a terminal, and app ecosystem.",
            tech_stack: ["Next.js", "Tailwind CSS", "React"],
            impact: "High user engagement time (>3 mins) due to gamified UX."
        },
        {
            name: "AffectTune",
            keywords: ["spotify", "music", "emotion", "face", "mood", "recommendation"],
            description: "A facial emotion-based music recommender system. It scans your face using computer vision and plays Spotify tracks that match your mood.",
            tech_stack: ["Computer Vision (OpenCV)", "Spotify API", "AI"],
            impact: "Real-time emotion detection and instant playlist matching."
        },
        {
            name: "Health.AI",
            keywords: ["health", "medical", "doctor", "disease", "scan", "diagnosis", "mobile"],
            description: "An end-to-end AI healthcare mobile app. It analyzes medical scans (X-Rays, MRIs) to assist in diagnosis and connects patients with doctors.",
            tech_stack: ["Flutter", "TensorFlow", "Deep Learning"],
            impact: "Bridging the gap in accessible healthcare with early disease detection models."
        },
        {
            name: "DevMatch",
            keywords: ["hiring", "resume", "recruiter", "developer", "platform", "match"],
            description: "A developer collaboration and hiring platform. It uses algorithms to intelligently match developers to job roles based on resume scoring.",
            tech_stack: ["MERN Stack", "Algorithm-based Ranking"],
            impact: "Optimizes hiring efficiency by filtering candidates automatically."
        },
        {
            name: "JFFT Application",
            keywords: ["voice", "typing", "accessibility", "students", "south africa"],
            description: "Built for students in South Africa, this real-time voice-to-text and typing application enhances digital accessibility for education.",
            tech_stack: ["Frontend", "Voice Interfaces", "Accessibility"],
            impact: "Deployed for real student use, improving digital access."
        }
    ],
    achievements: [
        {
            title: "Meta Hacker Cup 2025 (Global Rank 24 - AI Track)",
            keywords: ["meta", "hacker", "cup", "contest", "rank", "competition"],
            description: "Achieved a Global Rank of 24 in the AI Track, placing in the top 0.3% of 9,000+ participants."
        },
        {
            title: "Stanford Code in Place 2025",
            keywords: ["stanford", "code", "place", "university"],
            description: "Selected as a participant in Stanford University's flagship CS program."
        },
        {
            title: "McKinsey Forward Program",
            keywords: ["mckinsey", "forward", "leadership", "business"],
            description: "Selected for McKinsey's global leadership and problem-solving development program."
        },
        {
            title: "Samsung Solve for Tomorrow (Top 40 National)",
            keywords: ["samsung", "solve", "tomorrow", "innovation"],
            description: "National Top 40 Finalist for innovative tech solutions."
        },
        {
            title: "LUB-IdeaThon (Top 10 National)",
            keywords: ["lub", "ideathon", "startup", "incubation"],
            description: "Top 10 National Finalist, awarded incubation for startup MVP."
        }
    ],
    differentiation: {
        keywords: ["different", "unique", "hire", "why", "special"],
        points: [
            "🏆 **Proven Excellence**: I don't just participate; I rank globally (Meta Hacker Cup Rank 24). Ranking in the top 1% signals raw problem-solving speed and accuracy.",
            "🛠️ **End-to-End Engineering**: Most portfolios show simple clones. I build systems—like this Ubuntu OS simulation or live AI agents handling real orders. I manage the full stack, from vector databases to pixel-perfect UI.",
            "🌍 **Global Impact**: My code runs in the real world, from internships in Jackal Tech (Rwanda) to accessibility tools for students in South Africa.",
            "🚀 **AI Native**: I am not just 'using' AI APIs; I am building cognitive layers (NeuroPDF) and agentic workflows (Starbucks Agent). I understand the engineering behind the hype."
        ]
    }
};

export class AIEngine {
    constructor() {
        this.data = AI_KNOWLEDGE;
    }

    getGreeting() {
        return `
            <div class="text-ubt-blue font-bold text-base mb-2">👋 Welcome to Anmol's Portfolio Terminal</div>
            
            <div class="text-gray-300 text-sm mb-4">
                I am an <span class="text-ubt-green font-bold">AI-Powered Assistant</span> trained on Anmol's entire professional background.<br>
                You can type <b>natural questions</b> or use standard <b>listing commands</b>.
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <div class="text-ubt-blue font-bold mb-1">🤖 Ask me anything:</div>
                    <ul class="list-disc ml-4 text-gray-400 text-xs space-y-1">
                        <li><span class="text-white">"Who is Anmol?"</span></li>
                        <li><span class="text-white">"Show me his AI projects"</span></li>
                        <li><span class="text-white">"What is his tech stack?"</span></li>
                        <li><span class="text-white">"Why is he different from others?"</span></li>
                        <li><span class="text-white">"Show achievements"</span></li>
                        <li><span class="text-white">"Contact info"</span></li>
                    </ul>
                </div>
                
                <div>
                    <div class="text-ubt-gedit-orange font-bold mb-1">💻 Standard Commands:</div>
                    <div class="text-gray-400 text-xs leading-relaxed">
                        <span class="bg-gray-800 px-1 rounded">ls</span> 
                        <span class="bg-gray-800 px-1 rounded">cd</span> 
                        <span class="bg-gray-800 px-1 rounded">pwd</span> 
                        <span class="bg-gray-800 px-1 rounded">clear</span> 
                        <span class="bg-gray-800 px-1 rounded">mkdir</span> 
                        <span class="bg-gray-800 px-1 rounded">code</span> <br>
                        <span class="bg-gray-800 px-1 rounded">spotify</span> 
                        <span class="bg-gray-800 px-1 rounded">chrome</span> 
                        <span class="bg-gray-800 px-1 rounded">about-anmol</span> <br>
                        <span class="bg-gray-800 px-1 rounded">todoist</span> 
                        <span class="bg-gray-800 px-1 rounded">settings</span> 
                        <span class="bg-gray-800 px-1 rounded">sendmsg</span> 
                        <span class="bg-gray-800 px-1 rounded">exit</span>
                    </div>
                </div>
            </div>

            <div class="text-gray-500 text-xs italic">
                Type correctly to get the best results! 🚀
            </div>
        `;
    }

    processQuery(query) {
        const lowerQuery = query.toLowerCase();

        // --- 1. Identity / Who is ---
        if (lowerQuery.includes("who are you") || lowerQuery.includes("who is anmol") || lowerQuery.includes("introduce")) {
            return `
                <div class="mb-2">
                    <span class="text-ubt-blue font-bold">AI Analysis:</span> 
                    Anmol Agarwal is a <span class="font-bold text-white">${this.data.profile.role}</span>.
                </div>
                <div class="text-gray-200">
                    ${this.data.profile.summary}<br><br>
                    🎓 <u>Education</u>: ${this.data.profile.education}<br>
                    💼 <u>Experience</u>: ${this.data.profile.internships}
                </div>
            `;
        }

        // --- 2. Hidden Command: Differentiation ---
        if (lowerQuery.includes("why-are-you-different") || lowerQuery.includes("different from others") || lowerQuery.includes("stand out")) {
            return `
                <div class="mb-2">
                    <span class="text-ubt-gedit-orange font-bold">⚡ AI Strategic Analysis: Competitive Advantage</span> 
                </div>
                <div class="text-gray-200">
                    Most candidates show potential. Anmol shows <b>proof</b>. Here is the data-backed difference:
                    <ul class="list-disc ml-5 mt-2 space-y-2">
                        ${this.data.differentiation.points.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // --- 3. Projects Query ---
        if (lowerQuery.includes("project") || lowerQuery.includes("built") || lowerQuery.includes("work")) {
            // Check for specific project types
            const isAI = lowerQuery.includes("ai") || lowerQuery.includes("ml") || lowerQuery.includes("smart");

            let filteredProjects = this.data.projects;
            if (isAI) {
                filteredProjects = this.data.projects.filter(p => p.keywords.some(k => ["ai", "llm", "agent", "vision"].includes(k)));
            }

            // Limit to top 3 for brevity unless asked for "all"
            const displayProjects = filteredProjects.slice(0, 4);

            return `
                <div class="mb-2">
                    <span class="text-ubt-blue font-bold">AI Retrieval (${isAI ? "AI Projects" : "All Projects"}):</span>
                </div>
                <ul class="list-none space-y-3">
                    ${displayProjects.map(p => `
                        <li>
                            <span class="text-ubt-green font-bold">${p.name}</span> 
                            <span class="text-xs text-gray-400 mb-1">[${p.tech_stack.join(', ')}]</span><br>
                            <span class="text-gray-300 text-xs">${p.description}</span><br>
                            <span class="text-xs italic text-gray-500">Impact: ${p.impact}</span>
                        </li>
                    `).join('')}
                </ul>
                <div class="mt-2 text-xs text-gray-400">Type <span class="text-white">"ls projects"</span> to browse the full directory.</div>
            `;
        }

        // --- 4. Skills / Stack ---
        if (lowerQuery.includes("skill") || lowerQuery.includes("stack") || lowerQuery.includes("tech") || lowerQuery.includes("language")) {
            return `
                 <div class="mb-2">
                    <span class="text-ubt-blue font-bold">AI Tech Stack Scan:</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div>
                        <span class="text-ubt-gedit-orange font-bold">Frontend:</span><br>
                        ${this.data.skills.frontend.join(", ")}
                    </div>
                    <div>
                        <span class="text-ubt-gedit-orange font-bold">Backend:</span><br>
                        ${this.data.skills.backend.join(", ")}
                    </div>
                    <div>
                        <span class="text-ubt-gedit-orange font-bold">AI & ML (Specialization):</span><br>
                        ${this.data.skills.ai_ml.join(", ")}
                    </div>
                    <div>
                        <span class="text-ubt-gedit-orange font-bold">DevOps & Tools:</span><br>
                        ${this.data.skills.tools.join(", ")}
                    </div>
                </div>
            `;
        }

        // --- 5. Achievements ---
        if (lowerQuery.includes("achievement") || lowerQuery.includes("award") || lowerQuery.includes("hacker cup") || lowerQuery.includes("honor")) {
            return `
                <div class="mb-2">
                    <span class="text-ubt-blue font-bold">AI Achievement Record:</span>
                </div>
                <ul class="list-disc ml-5 space-y-1">
                    ${this.data.achievements.map(a => `
                        <li>
                            <span class="text-white font-bold">${a.title}</span><br>
                            <span class="text-gray-400 text-xs">${a.description}</span>
                        </li>
                    `).join('')}
                </ul>
            `;
        }

        // --- 6. Contact / Socials ---
        if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("github") || lowerQuery.includes("linkedin") || lowerQuery.includes("reach")) {
            return `
                <div class="mb-1">
                    <span class="text-ubt-blue font-bold">AI Contact Card:</span>
                </div>
                📧 <a href="mailto:${this.data.profile.email}" class="underline text-blue-400">${this.data.profile.email}</a><br>
                🐙 <a href="${this.data.profile.github}" target="_blank" class="underline text-blue-400">GitHub Profile</a><br>
                🔗 <a href="${this.data.profile.linkedin}" target="_blank" class="underline text-blue-400">LinkedIn Profile</a>
            `;
        }

        // --- 7. Hiring / Why Hire ---
        if (lowerQuery.includes("hire") || lowerQuery.includes("job")) {
            return `
                 <div class="mb-2">
                    <span class="text-ubt-blue font-bold">AI Hiring Recommendation: Strong Yes</span>
                </div>
                <div class="text-gray-200 text-sm">
                    Anmol is a high-ROI candidate because he merges <b>Frontend Polish</b> with <b>Backend Scale</b> and <b>AI Innovation</b>.
                    <br><br>
                    ✅ <b>Immediate Impact</b>: Can deploy full-stack apps day one.<br>
                    ✅ <b>Future Proof</b>: Deeply skilled in AI Agents & LLMs.<br>
                    ✅ <b>Proven</b>: Global rankings and internship experience.<br>
                    <br>
                    <span class="italic text-gray-400">"He builds things that work and look good doing it."</span>
                </div>
            `;
        }

        // --- Default Fallback ---
        return null;
    }
}
