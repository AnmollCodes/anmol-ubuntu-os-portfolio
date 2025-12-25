import React, { Component, useEffect } from 'react';
import confetti from 'canvas-confetti';
import ReactGA from 'react-ga4';

export class AboutAnmol extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "achievements": <Achievements />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about anmol" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="anmol's education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="anmol's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="anmol's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="achievements" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "achievements" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="anmol's achievements" src="./themes/Yaru/status/experience.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Achievements</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="anmol's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutAnmol;

export const displayAboutAnmol = () => {
    return <AboutAnmol />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Anmol Agarwal Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Anmol Agarwal</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Software Engineer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I’m a <span className=" font-medium">Software Development Engineer</span> and an undergraduate Computer Science student with hands-on experience building real-world products. I’ve completed a 3-month Software Engineering internship at <u className=' cursor-pointer '> <a href="https://jackaltechltd.com" target={"_blank"}>Jackal Tech Ltd (Rwanda, South Africa)</a> </u>, where I worked on production-grade systems and user-facing features.</li>
                <li className=" mt-3 list-building"> I enjoy building clean, scalable, and impact-driven software, with a strong focus on frontend engineering and full-stack problem solving. I’m currently seeking Software Engineering internships and full-time roles, where I can learn fast, ship quality code, and contribute to meaningful products from day one.</li>
                <li className=" mt-3 list-star"> If you’re hiring or building something exciting, let’s connect. <a className='text-underline' href='mailto:anmolagarwal2503@gmail.com'>📩 <u>anmolagarwal2503@gmail.com</u></a></li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Anand International College of Engineering, Jaipur
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2023 - Present</div>
                    <div className=" text-sm md:text-base">BTech in Computer Science Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 9.1/10</div>
                </li>

                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup>
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2022 - 2023</div>
                    <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 85.2%</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> I specialize in <strong className="text-ubt-gedit-orange"> full-stack development and AI-driven applications </strong>, building complete, production-ready products from idea to deployment.</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="anmol javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="anmol c++" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="anmol python" />
                        <img className="m-1" src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white" alt="anmol dart" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="anmol HTML" /></a>
                        <img src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff" alt="anmol SASS" className="m-1" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="anmol git" className="m-1" />
                        <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff" alt="anmol firebase" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="anmol next" />
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="anmol react" />
                        <img className="m-1" src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white" alt="anmol flutter" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="anmol tailwind css" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="anmol node.js" className="m-1" />
                        <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white" alt="anmol jquery" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white" alt="anmol redux" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="anmol linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Anmol's UbuntuOS Portfolio",
            date: "Dec 2025",
            link: "https://github.com/AnmollCodes/anmol-ubuntu-os-portfolio.git",
            description: [
                "A desktop-style portfolio inspired by Ubuntu 20.04, crafted with Next.js and Tailwind CSS to showcase real engineering work.",
            ],
            domains: ["javascript", "next.js", "tailwindcss"],
            metrics: {
                impact: "High user engagement",
                complexity: "Custom OS Simulation",
                outcome: "Production Ready"
            }
        },
        {
            name: "Barista StarBucks AI Agent",
            date: "Dec 2025",
            link: "https://github.com/AnmollCodes/Barista-StarBucks-AI-Agent",
            description: [
                "A production-grade conversational AI agent that works as a virtual Starbucks barista, handling natural drink ordering with real backend actions.",
            ],
            domains: ["conversational-ai", "llm-agents", "backend-engineering"],
            metrics: {
                impact: "Handles 50+ drink types",
                tech: "LLM + RAG Agents",
                outcome: "Zero-latency orders"
            }
        },
        {
            name: "JFFT Application for Students (South Africa)",
            date: "Dec 2025",
            link: "https://github.com/AnmollCodes/jfft-typing-voice-application-south-africa",
            description: [
                "A real-time typing and voice-based web application built to improve accessibility and user interaction, powered by modern frontend and cloud-backed infrastructure.",
            ],
            domains: ["frontend-development", "voice-interfaces", "web-accessibility"],
            metrics: {
                impact: "Used by Students in SA",
                tech: "Real-time Voice/Type",
                outcome: "Accessibility Boost"
            }
        },
        {
            name: "AffectTune - Spotify",
            date: "Nov 2025",
            link: "https://github.com/AnmollCodes/AffectTune-Facial-Emotion-Based-Music-Recommender",
            description: [
                "AffectTune is a real-time AI system that detects facial emotions and recommends Spotify playlists based on mood.",
            ],
            domains: ["artificial-intelligence", "computer-vision", "music-recommendation"],
            metrics: {
                impact: "Real-time Emotion Detect",
                tech: "Computer Vision API",
                outcome: "Instant Playlist Match"
            }
        },
        {
            name: "NeuroPDF",
            date: "Oct 2025",
            link: "https://github.com/AnmollCodes/NeuroPDF",
            description: [
                "A cognitive layer over PDFs that lets you reason, question, and discover insights instead of just reading.",
            ],
            domains: ["llm", "document-processing", "ai-applications"],
            metrics: {
                impact: "Multi-page Analysis",
                tech: "Vector Embeddings",
                outcome: "<200ms Query Time"
            }
        },
        {
            name: "Cover Letter Genius AI",
            date: "Aug 2025",
            link: "https://github.com/AnmollCodes/Cover-Letter-Genius-ai",
            description: [
                "A full-stack AI application using LLMs, resume parsing, job scraping, and real-time document generation.",
            ],
            domains: ["llm", "resume-parsing", "job-scraping"],
            metrics: {
                impact: "30sec generation time",
                tech: "Job Scraping + LLM",
                outcome: "Tailored Documents"
            }
        },
        {
            name: "Health.AI - Mobile App",
            date: "Mar 2025",
            link: "https://github.com/AnmollCodes/Health-AI_CodeForge25",
            description: [
                "Health.AI is an end-to-end AI healthcare system that transforms medical scans into actionable insights and bridges patients with doctors through intelligent, AI-driven diagnosis and consultation workflows.",
            ],
            domains: ["python", "tensorflow", "opencv", "flutter", "deep-learning", "computer-vision"],
            metrics: {
                impact: "Early Disease Detection",
                tech: "Deep Learning Models",
                outcome: "Doctor-Patient Bridge"
            }
        },
        {
            name: "DevMatch",
            date: "Feb 2025",
            link: "https://github.com/AnmollCodes/DevMatch",
            description: [
                "DevMatch is a full-stack developer collaboration platform that intelligently matches developers and recruiters while ranking resumes using data-driven analysis and real-world hiring signals.",
            ],
            domains: ["mongodb", "expressjs", "react", "nodejs"],
            metrics: {
                impact: "Smart Resume Matching",
                tech: "Algorithm-based Rank",
                outcome: "Hiring Efficiency"
            }
        },
        {
            name: "CodeQuanta",
            date: "Mar 2025",
            link: "https://github.com/AnmollCodes/CodeQuanta",
            description: [
                "CodeQuanta is a full-stack competitive programming platform that combines an online compiler, automated judging, and progress tracking to simulate real coding interview and contest environments.",
            ],
            domains: ["react", "flask", "mongodb", "docker", "jwt"],
            metrics: {
                impact: "Real-time Compiling",
                tech: "Docker Sandboxing",
                outcome: "Secure Execution"
            }
        }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>


            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=AnmollCodes&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase() + "-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
                                            })
                                            : null)
                                    }
                                </div>
                            </div>
                            {project.metrics && (
                                <div className="flex justify-between items-center mt-2 px-1 border-t border-gray-100 pt-2 w-full">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Impact</span>
                                        <span className="text-xs font-medium text-gray-600">{project.metrics.impact}</span>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Tech & Outcome</span>
                                        <span className="text-xs font-medium text-gray-600">{project.metrics.tech} • {project.metrics.outcome}</span>
                                    </div>
                                </div>
                            )}
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Anmol-Agarwal-Resume.pdf" title="anmol agarwal resume" frameBorder="0"></iframe>
    )
}

function Achievements() {
    const achievements_list = [
        {
            title: "Stanford Code in Place 2025 — Selected Participant",
            date: "Apr 2025",
            description: "Selected through a highly competitive global process for Stanford University’s flagship computer science program, focused on core CS fundamentals, structured problem-solving, and real-world application."
        },
        {
            title: "McKinsey Forward Program 2025 — Selected Participant",
            date: "May 2025",
            description: "Chosen for McKinsey’s selective global professional development program, recognizing strong analytical thinking, leadership potential, and structured business problem-solving skills."
        },
        {
            title: "Neoteric Summit Dubai 2025 — Selected International Delegate",
            date: "Nov 2025",
            description: "Selected from a large international applicant pool to represent student innovators at a prestigious global academic and leadership summit in Dubai."
        },
        {
            title: "Meta Hacker Cup 2025 — Global Rank 24 (AI Track)",
            date: "Oct 2025",
            description: "Ranked 24th worldwide among 9,000+ participants (Top 0.3%), demonstrating exceptional algorithmic problem-solving, optimization, and AI-oriented competitive programming skills."
        },
        {
            title: "Top 10 Finalist — LUB-IdeaThon 2025 (National | Incubation Award)",
            date: "Sep 2025",
            description: "Selected among the Top 10 startup ideas nationally; awarded 3 months of incubation and mentorship to build, validate, and iterate a real-world MVP."
        },
        {
            title: "National Top 31 Finalist — InnoVent 2026 (Tata Technologies × AWS)",
            date: "Aug 2025",
            description: "Advanced to the Top 31 nationwide out of 2,822+ teams, developing an AI-for-mobility solution under mentorship from Tata Technologies and AWS experts."
        },
        {
            title: "National Top 40 Finalist — Samsung Solve for Tomorrow 2025",
            date: "Aug 2025",
            description: "Selected among India’s Top 40 teams from thousands of applicants; presented at Samsung R&D centers and IIT Delhi, engaging with senior leadership and innovation mentors."
        },
        {
            title: "National Top 20 Innovator — Ideas for Future Hackathon 2025",
            date: "Apr 2025",
            description: "Recognized among the Top 20 most impactful innovations across Rajasthan for an environmental sustainability solution; awarded exclusive incubation and mentorship for real-world deployment."
        },
        {
            title: "Finalist — AlgoBash 2.0 (IIT Jammu)",
            date: "May 2024",
            description: "Finalist in a competitive coding contest hosted by IIT Jammu; solved beginner-to-advanced algorithmic challenges and excelled in team-based competitive rounds."
        },
        {
            title: "Participant — Fill the Void Hackathon (IIT Jammu)",
            date: "Mar 2024",
            description: "Competed in a national-level hackathon involving machine learning and competitive programming, demonstrating strong AI-ML fundamentals and collaborative problem-solving."
        },
        {
            title: "Top 1% Nationwide — Unstop Creative Hackathon",
            date: "Mar 2024",
            description: "Ranked in the Top 1% across India among 10,000+ participants, recognized for exceptional creativity and problem-solving; awarded Unstop PRO membership."
        },
        {
            title: "Winner — MachineKnight Season O2 Quiz Round",
            date: "Feb 2024",
            description: "Secured winner position (Rank 81) in a competitive AI/ML quiz, demonstrating strong conceptual depth in artificial intelligence, machine learning, and analytical reasoning."
        }
    ];

    useEffect(() => {
        var duration = 3 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#5D8C7B', '#F2D091', '#F2A679', '#D9695F', '#8C4646']
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#5D8C7B', '#F2D091', '#F2A679', '#D9695F', '#8C4646']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }, []);

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Achievements
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <div className=" text-base md:text-base font-normal my-4 px-2">
                Consistently selected across highly competitive global and national programs, ranking in the top tiers for technical excellence, innovation, and leadership potential.
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                {
                    achievements_list.map((achievement, index) => {
                        return (
                            <li className="list-disc mt-5" key={index}>
                                <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                                    {achievement.title}
                                </div>
                                <div className=" text-sm text-gray-400 mt-0.5">{achievement.date}</div>
                                <div className=" text-sm md:text-base mt-2">{achievement.description}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}