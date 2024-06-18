const HowYouCanHelp = () => {
    return (
        <div className="container mx-auto my-10 font-Lato text-center flex justify-center ">
            <div className="bg-gray-100 p-10 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold mb-4 text-[#155263]">How You Can Help</h2>
                <p className="text-xl mb-6">
                    There are many ways to get involved and support our mission of finding loving homes for pets.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-3 text-[#155263]">Donate</h3>
                        <p className="text-lg">
                            Your donations help us provide food, shelter, and medical care for pets in need. Every contribution makes a difference.
                        </p>
                        <button className="btn bg-[#ff9a3c] text-white mt-4">Donate Now</button>
                    </div>
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-3 text-[#155263]">Volunteer</h3>
                        <p className="text-lg">
                            Join our team of dedicated volunteers. Help us with events, pet care, and more. Your time and skills are invaluable.
                        </p>
                        <button className="btn bg-[#ff9a3c] text-white mt-4">Get Involved</button>
                    </div>
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-3 text-[#155263]">Spread the Word</h3>
                        <p className="text-lg">
                            Share our mission with your friends and family. Follow us on social media and help us reach more potential adopters.
                        </p>
                        <button className="btn bg-[#ff9a3c] text-white mt-4">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowYouCanHelp;
