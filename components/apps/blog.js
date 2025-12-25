import React from 'react';

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: 'How to Survive Your First Hackathon (and Actually Win) 🏆',
            date: 'Latest Post',
            summary: 'Participating in a hackathon can be daunting. Here are the key strategies to not only survive but thrive and take home the prize.',
            link: 'https://www.linkedin.com/feed/update/urn:li:activity:7347236446031835136/'
        },
        {
            id: 2,
            title: 'The 5 People Every Tech Student MUST Have Around Them 👥',
            date: 'Featured',
            summary: 'Your network is your net worth. These are the 5 types of people who changed my journey and why you need them in your circle.',
            link: 'https://www.linkedin.com/posts/anmol-agarwal25_build-break-rebuild-activity-7400437972166275072-20O0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERLBvABJXGxtnSZB5NYDD2flk3OLqgWIPY'
        },
        {
            id: 3,
            title: 'The Most Underrated Skill That Changed My Life: 𝗔𝘀𝗸𝗶𝗻𝗴 𝗕𝗲𝘁𝘁𝗲𝗿 𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀',
            date: 'Must Read',
            summary: 'Stop looking for answers and start refining your questions. How asking "dumb" questions can actually be your superpower in tech.',
            link: 'https://www.linkedin.com/posts/anmol-agarwal25_lookdumb-interrupt-ask-activity-7399711459770994688-IPZY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERLBvABJXGxtnSZB5NYDD2flk3OLqgWIPY'
        }
    ];

    const openLink = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className="h-full w-full bg-gray-100 text-gray-800 overflow-y-auto font-ubuntu">
            <div className="max-w-4xl mx-auto py-12 px-6">
                <h1 className="text-5xl font-bold mb-12 text-center text-gray-900 drop-shadow-sm">
                    My <span className="text-ub-orange">Blog</span>
                </h1>
                <div className="grid gap-8">
                    {posts.map((post, index) => (
                        <div
                            key={post.id}
                            onClick={() => openLink(post.link)}
                            className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-l-8 border-ub-orange overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-24 h-24 text-ub-orange" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01735C9.01735 15.0193 14.8966 9.60875 16.5915 10.3953C17.0652 10.6151 17.5857 10.4578 17.8727 10.0272L22.017 3.80104L2.01735 8.9711L7.54013 11.7325L7.54044 14.9998L7.54044 21L10.7788 17.7616L14.017 21Z" /></svg>
                            </div>

                            <div className="flex justify-between items-center mb-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide 
                                    ${index === 0 ? 'bg-green-100 text-green-800' : index === 1 ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                                    {post.date}
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-ub-orange transition-colors duration-200">
                                {post.title}
                            </h2>

                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {post.summary}
                            </p>

                            <div className="flex items-center text-ub-orange font-semibold group-hover:underline">
                                Read Article
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export const displayBlog = () => {
    return <Blog />;
}
