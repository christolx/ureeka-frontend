const Contacts = () => {
    const features = [
        {
            title: "Easy to connect",
            description: "We're always here to listen and collaborate."
        },
        {
            title: "Fast and responsive",
            description: "Our team ensures quick responses to all inquiries."
        },
        {
            title: "Join our cause",
            description: "Be a part of something bigger, let's fight hunger together!"
        }
    ];

    const contactInfo = [
        {
            type: "Email",
            value: "wearefoodfund@gmail.com",
        },
        {
            type: "Phone",
            value: "+62 881 2440 1810",
        },
        {
            type: "Address",
            value: "Jl H Saidi 5/8, Sumatera Utara, Medan, 20112",
        }
    ];

    return (
        <div className="flex flex-col min-h-screen text-black p-4 md:p-8">
            <div className="max-w-4xl mx-auto w-full">
                <nav className="mb-8">
                    <button 
                        className="py-1 px-4 rounded-full border border-black text-sm"
                    >
                        Contact
                    </button>
                </nav>

                <div className="mb-12">
                    <h1 className="text-3xl md:text-5xl text-[#3b463b] tracking-tighter font-regular mb-4">Let&apos;s make an impact <span className="text-[#D1913C] font-serif text-5xl">together.</span></h1>
                    <p className="text-[#627a62] mb-8 max-w-2xl">Got questions? Want to collaborate? Reach out to us and be part of a movement to end hunger.</p>

                    <div className="space-y-6 mb-12">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <div className="mt-1 mr-3">
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
                </div>

                <div className="bg-[#F5EDD9] rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-[#3b463b]">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contactInfo.map((info, index) => (
                        <div key={index} className="bg-[#ffffff] p-4 rounded-lg flex items-start">
                            <div>
                                <h3 className="font-medium text-[#3b463b]">{info.type}</h3>
                                <p className="text-[#3b463b]">{info.value}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;