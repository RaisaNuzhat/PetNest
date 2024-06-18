import img1 from '../assets/cat-8446390_1280.jpg'
import img2 from '../assets/cat-8620369_1280.png'
import img3 from '../assets/dogs-5021085_1280.jpg'
const SuccessStories = () => {
    return (
        <div className="container mx-auto my-10 font-Lato text-center">
            <div className="bg-white p-10 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold mb-4 text-[#155263]">Success Stories</h2>
                <p className="text-xl mb-6">
                    Hear from our happy adopters! These heartwarming stories showcase the joy and companionship that adopting a pet can bring.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4">
                        <img src={img1} alt="Success Story 1" className="w-full h-60 object-cover rounded-lg shadow-lg" />
                        <p className="text-lg mt-4">Adopting Bella was the best decision we ever made. She has brought so much joy into our lives! - Sarah</p>
                    </div>
                    <div className="p-4">
                        <img src={img2} alt="Success Story 2" className="w-full h-60 object-cover rounded-lg shadow-lg" />
                        <p className="text-lg mt-4">Max is a bundle of energy and love. We are so grateful to have found him. - John and Emily</p>
                    </div>
                    <div className="p-4">
                        <img src={img3} alt="Success Story 3" className="w-full h-60 object-cover rounded-lg shadow-lg" />
                        <p className="text-lg mt-4">Our home feels complete with Luna. Thank you, PetNest! - The Smith Family</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStories;
