const About = () => {
    return (
        <div id="about" className="max-w-5xl mx-auto">
            <section id="about" className="text-[#526051] flex flex-col md:flex-row items-center gap-8 p-10 rounded-2xl">
                <img src="/images/food-everyone.jpg" alt="Hunger Awareness" className="w-full md:w-1/2 rounded-xl" />
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-[#6E826D] text-3xl font-regular">
                        A MEAL<span className="bg-[#FECACA] font-bold font-serif rounded-lg text-[#9B341F] px-2 py-1 ml-2">SHOULD NOT</span> BE RESTRICTED FOR SOME PEOPLE!
                    </h2>
                    <p className="mt-4 text-gray-600 text-l leading-relaxed">
                        It should be <strong>available for everyone</strong> instead! Indonesia faces a nutritional crisis with more than half of its population unable to meet the daily nutritional needs, exacerbated by the high price of healthy food and high cigarette consumption compared to animal protein. Food Loss and Food Waste also worsen the stunting rate, reducing public access to nutritious food.
                        <br /><br />
                        As such, our platform is here to connect donors with food distribution initiatives, provide the latest news, testimonials of recipients of assistance, and database programs that can be funded, in order to increase awareness and participation in supporting access to nutritious food for underprivileged families.
                    </p>
                </div>
            </section>

            <div className="mt-10">
                <h3 className="text-3xl md:text-5xl max-w-lg text-[#3b463b] tracking-tighter font-regular">HOW CAN YOU HELP?</h3>
                <div className="flex justify-between gap-3 sm:gap-4 md:gap-6 mt-6">
                    {/* Card 1 */}
                    <div className="bg-[#FDF7E9] p-6 rounded-xl text-black flex-1">
                        <img src="/images/meal-icon.png" alt="Provide Meals" className="w-12 mx-auto md:mx-0 mb-3" />
                        <h4 className="font-bold">PROVIDE MEALS</h4>
                        <p>Contribute to the offering of nutritious meals...</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-[#FDF7E9] p-6 rounded-xl text-black flex-1">
                        <img src="/images/impact-icon.png" alt="Make an Impact" className="w-12 mx-auto md:mx-0 mb-3" />
                        <h4 className="font-bold">MAKE AN IMPACT</h4>
                        <p>Giving is more than just a donation...</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-[#FDF7E9] p-6 rounded-xl text-black flex-1">
                        <img src="/images/sustainable-icon.png" alt="Sustainable Giving" className="w-12 mx-auto md:mx-0 mb-3" />
                        <h4 className="font-bold">SUSTAINABLE GIVING</h4>
                        <p>Consistent support creates lasting change...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;