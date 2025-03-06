import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Donations from "./components/Donations";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden bg-[#FFFFFF] pt-16">
            <Navbar />

            <section id="home">
                <Hero />
            </section>

            {/* Wrap additional sections with max-w-5xl */}
            <div className="max-w-5xl mx-auto">

                {/* Hunger Awareness Section */}
                <section id="about" className="text-[#526051] flex items-center gap-8 p-10 rounded-2xl">
                    <img src="src/images/food-everyone.jpg" alt="Hunger Awareness" className="w-1/2 rounded-xl" />
                    <div className="w-1/2">
                        <h2 className="text-[#6E826D] text-3xl font-regular">
                            A MEAL<span className="bg-[#FECACA] font-bold font-serif rounded-lg text-[#9B341F] px-2 py-1 ml-2">SHOULD NOT</span> BE FOR SOME PEOPLE!
                        </h2>
                        <p className="mt-4 text-gray-600 text-l leading-relaxed">
                            It should be for <strong>all people</strong> instead! Indonesia faces a nutritional crisis with more than half of its population unable to meet the daily nutritional needs, exacerbated by the high price of healthy food and high cigarette consumption compared to animal protein. Food Loss and Food Waste also worsen the stunting rate, reducing public access to nutritious food.
                            <br /><br />
                            As such, our platform is here to connect donors with food distribution initiatives, provide the latest news, testimonials of recipients of assistance, and database programs that can be funded, in order to increase awareness and participation in supporting access to nutritious food for underprivileged families.
                        </p>
                    </div>
                </section>

                {/* How Can You Help Section */}
                <div className="mt-10">
                    <h3 className="text-5xl max-w-lg text-[#3b463b] tracking-tighter font-regular">HOW CAN YOU HELP?</h3>
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
            <section id="donations">
                <Donations />
            </section>
            <section id="articles">
                <Articles />
            </section>
            <Footer />
        </main>
    );
};

export default App;
