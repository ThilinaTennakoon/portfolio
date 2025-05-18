import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

const HomeHero = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Simulate a delay for the animation effect
        setTimeout(() => setShow(true), 100);
    }, []);

    const stats = [
        { label: "Projects", count: 24 },
        { label: "Experience", count: 2 },
        { label: "Clients", count: 15 },
    ];

    const [animatedCounts, setAnimatedCounts] = useState([0, 0, 0]);

    useEffect(() => {
        if (show) {
            const interval = setInterval(() => {
                setAnimatedCounts((prev) =>
                    prev.map((val, i) => (val < stats[i].count ? val + 1 : val))
                );
            }, 60);
            return () => clearInterval(interval);
        }
    }, [show]);

    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-4 text-white bg-black">

            <div className="flex flex-col items-center justify-between w-full gap-5 mt-20 lg:gap-10 lg:mt-0 max-w-7xl lg:flex-row">

                {/* Left Content */}
                <div
                    className={`flex-1 text-center lg:text-left lg:pl-4 transform transition-all duration-1000 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h1 className="mb-2 text-4xl font-bold md:text-5xl">Thilina Thennakoon</h1>
                    <h2 className="mb-6 text-xl text-gray-400 md:text-2xl">
                        Full Stack Developer
                    </h2>
                    <p className="max-w-xl mx-auto mb-6 text-gray-300 lg:mx-0">
                        I am a passionate full stack developer with a knack for crafting robust and scalable web applications.
                        With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js,
                        as well as back-end technologies like Laravel, Node.js,  and MySQL.
                        My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver
                        exceptional user experiences.
                    </p>

                    {/* <a
                        href="/resume.pdf"
                        className="inline-block px-5 py-2 text-sm font-medium text-black transition transform bg-white rounded-full hover:bg-gray-200 hover:scale-105"
                    >
                        Download Resume
                    </a> */}
                    <div className="flex items-center justify-center gap-2 lg:justify-start">
                        <span className="text-sm text-gray-400">🚀 Working at</span>
                        <a
                            href="https://axcertro.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gray-800 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-700 transition transform hover:scale-105"
                        >
                            <img src="assets/company-logo.png" alt="Company Logo" className="inline-block h-4 mr-1" />

                        </a>
                    </div>
                </div>

                {/* Right Content - Image and Icons */}
                <div
                    className={`flex-1 flex flex-col lg:gap-2 lg:flex-row items-center justify-center transform transition-all duration-1000 ease-out delay-200 ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                        }`}
                >
                    <img
                        src="assets/profile.jpg" // Replace with your actual image
                        alt="Ravi Kumar"
                        className="object-cover transition-transform duration-300 shadow-lg w-80 h-96 rounded-2xl hover:scale-105"
                    />

                    <div className="flex gap-4 mt-4 mb-4 text-xl lg:mb-0 lg:flex-col">
                        {[FaLinkedin, FaGithub, FaInstagram, FaXTwitter].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="transition-transform duration-300 transform hover:text-gray-400 hover:scale-110"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
            {/* Bottom Stats Section */}
            <div
                className={`mt-5 pb-4 w-full transform transition-all duration-1000 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="flex flex-row items-center justify-center gap-4 mx-auto">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center w-20 px-5 py-3 text-center text-white transition-all duration-300 border shadow-sm bg-white/5 backdrop-blur-xl border-white/10 sm:px-6 sm:py-4 rounded-xl hover:shadow-lg sm:w-40"
                        >
                            <p className="text-xl font-semibold text-indigo-400 sm:text-2xl drop-shadow">
                                {animatedCounts[idx]}<span className="text-indigo-300">+</span>
                            </p>
                            <p className="mt-1 text-xs text-gray-300 sm:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default HomeHero;
