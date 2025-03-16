const Contacts = () => {
    const features = [
        { title: "Easy to connect", description: "We're always here to listen and collaborate." },
        { title: "Fast and responsive", description: "Our team ensures quick responses to all inquiries." },
        { title: "Join our cause", description: "Be a part of something bigger, let's fight hunger together!" }
    ];

    const contactInfo = [
        { type: "Email", value: "foodfundcharity@outlook.com", link: "mailto:foodfundcharity@outlook.com" },
        { type: "Phone", value: "+62 881 2440 1810", link: "tel:+6288124401810" },
        { type: "Address", value: "Jl H Saidi 5/8, Sumatera Utara, Medan, 20112" },
        { type: "Discord", value: "@.icemotion", link: "https://discord.com" } // Add the actual Discord link if applicable
    ];

    return (
        <div className="flex flex-col min-h-screen text-black p-4 sm:p-6 lg:p-12">
            <div className="max-w-5xl mx-auto w-full">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#3b463b] font-semibold mb-4">
                        Let&apos;s make an impact <span className="text-[#D1913C] font-serif">together.</span>
                    </h1>
                    <p className="text-[#627a62] mb-8 max-w-2xl mx-auto">
                        Got questions? Want to collaborate? Reach out to us and be part of a movement to end hunger!
                    </p>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-md">
                            <div className="mt-1 text-[#D1913C]">
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Information Section */}
                <div className="bg-[#F5EDD9] rounded-lg p-6 sm:p-8 lg:p-10 shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-[#3b463b] text-center">Contact Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="bg-[#ffffff] p-5 rounded-lg flex flex-col items-center text-center shadow-md">
                                <h3 className="font-medium text-[#3b463b] text-lg">{info.type}</h3>
                                {info.link ? (
                                    <a href={info.link} className="text-blue-600 hover:underline text-sm break-all">
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="text-[#3b463b] text-sm">{info.value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
