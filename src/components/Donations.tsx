const Donations = () => (
    <div className="w-full mt-10 py-5 lg:py-10 overflow-x-hidden flex items-center max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 lg:px-8">
        <div className="container py-4 mx-auto">
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-[#3b463b] select-none tracking-tighter font-regular text-center sm:text-left">
                FIGHTING HUNGER, <span className="text-[#D1913C] font-serif">BUILDING HOPE.</span>
            </h3>
            <div className="flex flex-wrap mt-6">
                {[
                    {
                        title: "Nutritious Food",
                        description:
                            "Your gift immediately delivers nutritious food to hungry people. Help us ensure nobody goes without a healthy meal today.",
                        image: "/images/nutritious-food.jpg",
                        link: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
                        stats: { views: "2.3K", comments: "22" },
                        category: "URGENT NEEDS",
                    },
                    {
                        title: "Local Food Banks",
                        description:
                            "Support our local food banks in their mission to combat hunger. Your donation helps keep shelves stocked with essential food items for those in need.",
                        image: "/images/volunteer-food-bank.jpg",
                        link: "https://foodbankindonesia.org/",
                        stats: { views: "4.1K", comments: "16" },
                        category: "COMMUNITY SUPPORT",
                    },
                    {
                        title: "Empower Sustainable Food Programs",
                        description:
                            "Invest in long-term solutions to hunger by supporting sustainable food programs. Your donation helps create community gardens, food education initiatives, and lasting change.",
                        image: "/images/sustainable-food-programs.jpg",
                        link: "https://www.foodbanking.org/blogs/foodcycle-indonesia-community-impact-for-a-sustainable-future/",
                        stats: { views: "5.6K", comments: "34" },
                        category: "LONG-TERM IMPACT",
                    },
                ].map((item, index) => (
                    <div key={index} className="p-4 w-full sm:w-1/2 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                            <img
                                className="w-full aspect-[4/3] object-cover"
                                src={item.image}
                                alt={item.title}
                            />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                    {item.category}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    {item.title}
                                </h1>
                                <p className="leading-relaxed mb-3 line-clamp-3">{item.description}</p>
                                <div className="flex items-center flex-wrap justify-between">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        className="text-indigo-500 inline-flex items-center cursor-pointer select-none hover:text-indigo-900"
                                    >
                                        Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <div className="flex gap-4 text-gray-400 text-sm">
                                        <span className="inline-flex items-center">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            {item.stats.views}
                                        </span>
                                        <span className="inline-flex items-center">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                            {item.stats.comments}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Donations;