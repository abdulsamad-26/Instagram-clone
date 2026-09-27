"use client";

import {
    Home,
    Search,
    Compass,
    Heart,
    MessageCircle,
    PlusSquare,
    Menu,
} from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-[60px] max-w-[1000px] items-center justify-between px-5">

                {/* Instagram Logo */}
                <div className="text-[25px] font-bold tracking-[-1px] text-black">
                    Instagram
                </div>

                {/* Search Box */}
                <div className="hidden w-[270px] md:block">
                    <div className="flex h-[36px] items-center gap-2 rounded-lg bg-[#efefef] px-3">
                        <Search
                            size={17}
                            strokeWidth={2}
                            className="text-gray-500"
                        />

                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Navigation Icons */}
                <div className="flex items-center gap-5">

                    {/* Home */}
                    <button
                        className="text-black transition hover:scale-105"
                        aria-label="Home"
                    >
                        <Home size={24} strokeWidth={2} />
                    </button>

                    {/* Messages */}
                    <button
                        className="hidden text-black transition hover:scale-105 sm:block"
                        aria-label="Messages"
                    >
                        <MessageCircle size={24} strokeWidth={2} />
                    </button>

                    {/* Create */}
                    <button
                        className="hidden text-black transition hover:scale-105 sm:block"
                        aria-label="Create"
                    >
                        <PlusSquare size={24} strokeWidth={2} />
                    </button>

                    {/* Explore */}
                    <button
                        className="hidden text-black transition hover:scale-105 sm:block"
                        aria-label="Explore"
                    >
                        <Compass size={24} strokeWidth={2} />
                    </button>

                    {/* Notifications */}
                    <button
                        className="hidden text-black transition hover:scale-105 sm:block"
                        aria-label="Notifications"
                    >
                        <Heart size={24} strokeWidth={2} />
                    </button>

                    {/* Profile */}
                    <button
                        className="overflow-hidden rounded-full"
                        aria-label="Profile"
                    >
                        <img
                            src="/myphoto.jpg"
                            alt="My Profile"
                            className="h-7 w-7 rounded-full object-cover"
                        />
                    </button>

                    {/* Mobile Menu */}
                    <button
                        className="text-black sm:hidden"
                        aria-label="Menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
