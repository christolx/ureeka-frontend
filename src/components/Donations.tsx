const Donations = () => (
    <div className="w-full mt-10 py-5 lg:py-10 overflow-x-hidden flex items-center max-w-7xl mx-auto rounded-2xl">
        <div className="container py-4 mx-auto">
            <h3 className="text-5xl max-w-lg text-[#3b463b] select-none tracking-tighter font-regular">Donate <span className="text-[#D1913C] font-serif text-5xl">NOW.</span></h3>
            <div className="flex flex-wrap mt-6">
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:scale-103 transition-all duration-300">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="src/assets/nutritious-food.jpg" alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">URGENT NEEDS</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Nutritious Food</h1>
                    <p className="leading-relaxed mb-3 overflow-hidden line-clamp-3 text-ellipsis">Your gift immediately delivers nutritious food to hungry people. Help us ensure nobody goes without a healthy meal today.</p>
                    <div className="flex items-center flex-wrap ">
                    <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank" className="text-indigo-500 inline-flex items-center cursor-pointer select-none hover:text-indigo-900 md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                        </svg>2.3K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>22
                    </span>
                    </div>
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:scale-103 transition-all duration-300">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="src/assets/volunteer-food-bank.jpg" alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">COMMUNITY SUPPORT</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Local Food Banks</h1>
                    <p className="leading-relaxed mb-3 overflow-hidden line-clamp-3 text-ellipsis">Support our local food banks in their mission to combat hunger. Your donation helps keep shelves stocked with essential food items for those in need.</p>
                    <div className="flex items-center flex-wrap">
                    <a href="https://foodbankindonesia.org/" target="_blank" className="text-indigo-500 inline-flex items-center cursor-pointer select-none hover:text-indigo-900 md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                        </svg>4.1K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>16
                    </span>
                    </div>
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:scale-103 transition-all duration-300">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="src/assets/sustainable-food-programs.jpg" alt="blog"/>
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">LONG-TERM IMPACT</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Empower Sustainable Food Programs</h1>
                    <p className="leading-relaxed mb-3 overflow-hidden line-clamp-3 text-ellipsis">Invest in long-term solutions to hunger by supporting sustainable food programs. Your donation helps create community gardens, food education initiatives, and lasting change.</p>
                    <div className="flex items-center flex-wrap ">
                    <a href="https://www.foodbanking.org/blogs/foodcycle-indonesia-community-impact-for-a-sustainable-future/" target="_blank" className="text-indigo-500 inline-flex items-center cursor-pointer select-none hover:text-indigo-900 md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                        </svg>3.7K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>19
                    </span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
);

export default Donations;