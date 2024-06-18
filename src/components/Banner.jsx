const Banner = () => {
    return (
        <div className="container mx-auto flex justify-center  flex-col items-center my-20 font-Lato">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/rctj3wD/animal-7140980-1280.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 lg:text-4xl sm:text-[18px] font-bold">Welcome to PetNest!</h1>
                        <p className="mb-5"> Discover your new best friend today! At PetNest, we connect loving pets with loving homes. Start your journey to find the perfect companion and give a pet a forever home.</p>
                        <button className="btn bg-[#f1b963] text-white text-xl border-none">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
