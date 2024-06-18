const SuccessStories = () => {
    return (
        <div className="container mx-auto my-10 font-Lato text-center">
            <div className="bg-white p-10 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
                <p className="text-xl mb-6">
                    Hear from our happy adopters! These heartwarming stories showcase the joy and companionship that adopting a pet can bring.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4">
                        <img src="https://daisyui.com/images/stock/photo-1517849845537-4d257902454a.jpg" alt="Success Story 1" className="w-full h-60 object-cover rounded-lg shadow-lg" />
                        <p className="text-lg mt-4">Adopting Bella was the best decision we ever made. She has brought so much joy into our lives! - Sarah</p>
                    </div>
                    <div className="p-4">
                        <img src="https://daisyui.com/images/stock/photo-1521305916504-4a1121188589.jpg" alt="Success Story 2" className="w-full h-60 object-cover rounded-lg shadow-lg" />
                        <p className="text-lg mt-4">Max is a bundle of energy and love. We are so grateful to have found him. - John and Emily</p>
                    </div>
                    <div className="p-4">
                        <img src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg" alt="Success Story 3" className="w-full h-60 object-cover rounded-lg shadow-lg" />
                        <p className="text-lg mt-4">Our home feels complete with Luna. Thank you, PetNest! - The Smith Family</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStories;
