import React from 'react';

const RecruiterMode = ({ toggleRecruiterMode }) => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200 selection:text-black overflow-y-auto">
            {/* Top Bar with Toggle */}
            <div className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center z-50">
                <div className="font-bold text-xl tracking-tight">Anmol Agarwal</div>
                <button
                    onClick={toggleRecruiterMode}
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-sm"
                >
                    <span>Exit Recruiter Mode</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Hero Section */}
            <div className="pt-32 pb-16 px-6 md:px-12 max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                    Software Engineer <br />
                    <span className="text-blue-600">Full Stack & AI Specialist</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
                    I build production-grade systems and AI agents. Interned at <span className="font-semibold text-gray-900">Jackal Tech Ltd</span>.
                    Top 24 Global Rank in Meta Hacker Cup (AI Track). Focused on shipping code that drives real impact.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a href="mailto:anmolagarwal2503@gmail.com" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30">
                        Hire Me
                    </a>
                    <a href="https://github.com/AnmollCodes" target="_blank" rel="noreferrer" className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
                        View GitHub
                    </a>
                </div>
            </div>

            {/* Top Projects Section */}
            <div className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="px-6 md:px-12 max-w-5xl mx-auto">
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Top Projects & Impact</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Project 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-2xl font-bold mb-2">Barista StarBucks AI Agent</h3>
                            <p className="text-gray-600 mb-6">Production-grade conversational AI that handles complex natural language orders with real backend fulfillment actions.</p>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                                    <span className="text-sm text-gray-500 font-medium">Outcome</span>
                                    <span className="text-sm font-bold text-gray-900">Handles 50+ unique drink variations</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                                    <span className="text-sm text-gray-500 font-medium">Tech Depth</span>
                                    <span className="text-sm font-bold text-gray-900">LLM Agents, RAG, Function Calling</span>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-2xl font-bold mb-2">NeuroPDF</h3>
                            <p className="text-gray-600 mb-6">Cognitive layer over PDFs allowing users to reason with documents using AI, not just read them.</p>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                                    <span className="text-sm text-gray-500 font-medium">Performance</span>
                                    <span className="text-sm font-bold text-gray-900">&lt;200ms Query Latency</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                                    <span className="text-sm text-gray-500 font-medium">Architecture</span>
                                    <span className="text-sm font-bold text-gray-900">Vector Embeddings (Pinecone)</span>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-2xl font-bold mb-2">UbuntuOS Portfolio</h3>
                            <p className="text-gray-600 mb-6">Fully functional desktop environment in the browser with window management and filesystem simulation.</p>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                                    <span className="text-sm text-gray-500 font-medium">Complexity</span>
                                    <span className="text-sm font-bold text-gray-900">Custom Window Manager & File System</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                                    <span className="text-sm text-gray-500 font-medium">Engagement</span>
                                    <span className="text-sm font-bold text-gray-900">Average Session &gt; 3 mins</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Skills */}
            <div className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Technical Arsenal</h2>
                <div className="flex flex-wrap gap-3">
                    {["Next.js", "React", "TypeScript", "Node.js", "Python", "TensorFlow", "Tailwind CSS", "MongoDB", "Redux", "Docker", "AWS", "Git"].map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium text-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="font-bold text-lg">Anmol Agarwal</p>
                        <p className="text-gray-400">Ready to build the future.</p>
                    </div>
                    <a href="mailto:anmolagarwal2503@gmail.com" className="bg-white text-gray-900 px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition">
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RecruiterMode;
