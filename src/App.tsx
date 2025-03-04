import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden bg-[#FFFFFF] pt-16">
            <Navbar />

            {/* Main Hero Section */}
            <div className="bg-[#FDF7E9] p-10 rounded-2xl flex items-center max-w-5xl mx-auto mt-10">
                <div className="w-1/2 pr-10">
                    <h2 className="text-4xl font-serif font-bold text-[#5B6236]">
                        FEEDING <span className="text-[#D1913C] font-serif text-6xl">HOPE</span>
                    </h2>
                    <h3 className="text-xl text-[#97A38D] mt-2 font-serif font-semibold">
                        ONE MEAL AT A TIME.
                    </h3>
                    <p className="text-gray-600 mt-4">
                        Hunger shouldn’t be a barrier to a better future. Your support helps
                        feed families and strengthen communities. Donate today and help us
                        <span className="bg-[#FECACA] px-2 py-1 rounded-lg font-bold text-[#9B341F] ml-2">
                            thrive together!
                        </span>
                    </p>
                    <button className="mt-6 bg-[#FFB703] text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-[#E99C00] cursor-pointer">
                        DONATE NOW
                    </button>
                </div>
                <div className="w-1/2">
                    <img
                        src="src/images/feeding-hope.png" 
                        alt="Feeding Hope"
                        className="rounded-2xl w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Wrap additional sections with max-w-5xl */}
            <div className="max-w-5xl mx-auto">

                {/* Hunger Awareness Section */}
                <div className="text-[#526051] flex items-center gap-8 p-10 rounded-2xl">
                    <img src="src/images/food-everyone.jpg" alt="Hunger Awareness" className="w-1/3 rounded-xl" />
                    <div className="w-2/3">
                        <h2 className="text-[#6E826D] text-3xl font-serif font-bold">
                            A MEAL <span className="bg-[#FECACA] rounded-lg text-[#9B341F] px-2 py-1 ml-2">SHOULD NOT</span> BE FOR SOME PEOPLE!
                        </h2>
                        <p className="mt-4 text-gray-600">
                            It should be for <strong>all people</strong> instead! Indonesia faces a nutritional crisis with more than half of its population unable to meet the daily nutritional needs, exacerbated by the high price of healthy food and high cigarette consumption compared to animal protein. Food Loss and Food Waste also worsen the stunting rate, reducing public access to nutritious food.
                            <br /><br />
                            As such, our platform is here to connect donors with food distribution initiatives, provide the latest news, testimonials of recipients of assistance, and database programs that can be funded, in order to increase awareness and participation in supporting access to nutritious food for underprivileged families.
                        </p>
                    </div>
                </div>

                {/* How Can You Help Section */}
                <div className="mt-10">
                    <h3 className="text-2xl font-serif font-bold">HOW CAN YOU HELP?</h3>
                    <div className="flex justify-between gap-6 mt-6">
                        {/* Card 1 */}
                        <div className="bg-[#FDF7E9] p-6 rounded-xl text-black flex-1">
                            <img src="src/images/meal-icon.png" alt="Provide Meals" className="w-12 mb-3" />
                            <h4 className="font-bold">PROVIDE MEALS</h4>
                            <p>Contribute to the offering of nutritious meals...</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-[#FDF7E9] p-6 rounded-xl text-black flex-1">
                            <img src="src/images/impact-icon.png" alt="Make an Impact" className="w-12 mb-3" />
                            <h4 className="font-bold">MAKE AN IMPACT</h4>
                            <p>Giving is more than just a donation...</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-[#FDF7E9] p-6 rounded-xl text-black flex-1">
                            <img src="src/images/sustainable-icon.png" alt="Sustainable Giving" className="w-12 mb-3" />
                            <h4 className="font-bold">SUSTAINABLE GIVING</h4>
                            <p>Consistent support creates lasting change...</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </main>
    );
};

export default App;
