const AboutUs = () => {
    return (
        <div className="container mx-auto my-10 font-Lato text-center">
            <div className="bg-gray-100 p-10 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold mb-4">About Us</h2>
                <p className="text-xl mb-6">
                    Welcome to PetNest! Our mission is to connect loving pets with loving homes. 
                    We believe every pet deserves a chance at a happy life, and we are here to make that happen.
                </p>
                <h3 className="text-2xl font-semibold mb-3">How It Works</h3>
                <p className="text-lg mb-6">
                    Our website makes it easy for you to find your perfect pet. Browse through our database of pets available for adoption, read their stories, and learn about their personalities.
                    Once you find a pet that you connect with, you can fill out an adoption application and arrange a meet-and-greet. We are here to support you every step of the way!
                </p>
                <h3 className="text-2xl font-semibold mb-3">Why We Were Made</h3>
                <p className="text-lg">
                    PetNest was created out of a passion for helping animals and a desire to reduce the number of pets in shelters. We aim to provide a platform where potential pet owners can easily find and adopt pets, giving them a second chance at a happy and fulfilling life.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
