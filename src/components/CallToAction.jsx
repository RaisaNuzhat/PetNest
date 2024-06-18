const CallToAction = () => {
    return (
        <div className="container mx-auto my-10 font-Lato text-center">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold mb-4">Give a Pet a Better Life</h2>
                <p className="text-xl">Your new best friend is waiting for you. Adopt a pet and make a difference today.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 justify-center text-[18px]">
                <div className="m-4">
                    <img src="https://i.ibb.co/6XzFqm5/beach-5064674-1280.jpg" alt="Adopt a pet" className="w-full h-80 object-cover rounded-lg shadow-lg" />
                    <p className="text-center mt-2">Saving one pet won’t change the world, but for that pet, the world will change forever.</p>
                </div>
                <div className="m-4">
                    <img src="https://i.ibb.co/nP6DGwp/cat-4923824-1280.jpg" alt="Give a pet a home" className="w-full h-80 object-cover rounded-lg shadow-lg" />
                    <p className="text-center mt-2">Adopting a pet is a journey of love and compassion. Start yours today.</p>
                </div>
                <div className="m-4">
                    <img src="https://i.ibb.co/CzSw16b/cat-3038243-1280.jpg" alt="Find your best friend" className="w-full h-80 object-cover rounded-lg shadow-lg" />
                    <p className="text-center mt-2">A pet will bring joy and companionship to your life. Adopt now and experience unconditional love.</p>
                </div>
                <div className="m-4">
                    <img src="https://i.ibb.co/3mzjwxZ/dog-5883275-1280.jpg" alt="Find your best friend" className="w-full h-80 object-cover rounded-lg shadow-lg" />
                    <p className="text-center mt-2">Open your heart and home to a pet in need. They will bring joy and companionship to your life. </p>
                </div>
            </div>
           
        </div>
    );
};

export default CallToAction;
