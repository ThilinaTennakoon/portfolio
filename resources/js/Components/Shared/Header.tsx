import { useState } from 'react';
import {  } from "react-icons/fa6";


export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const routes = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* Header */}
            <header className="fixed top-0 left-0 z-50 w-full shadow-md bg-black/90 backdrop-blur-sm animate-fade-in">
                <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-2 lg:px-4">
                    {/* Logo */}
                    <div className="text-xl font-bold text-white">
                        <a href="#home">TT
                            {/* <img src="assets/company-logo.png" alt="Company Logo" className="inline-block h-4 ml-2" /> */}

                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden space-x-6 md:flex">
                        {routes.map((route) => (
                            <a
                                key={route.name}
                                href={route.href}
                                className="font-medium text-gray-300 transition hover:text-white"
                            >
                                {route.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-white md:hidden"
                        aria-label="Open menu"
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Sidebar Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-zinc-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-700">
                    <h2 className="text-lg font-semibold text-white">Menu</h2>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-gray-400 hover:text-white"
                        aria-label="Close menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="flex flex-col p-4 space-y-4">
                    {routes.map((route) => (
                        <a
                            key={route.name}
                            href={route.href}
                            onClick={() => setSidebarOpen(false)}
                            className="font-medium text-gray-300 transition hover:text-white"
                        >
                            {route.name}
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    );
}
