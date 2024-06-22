
import { useState } from 'react'
import { Helmet } from "react-helmet";

import {  useLoaderData } from "react-router-dom";
import DonateModal from '../components/modal/DonateModal';
import useAuth from '../hooks/useAuth';
const ViewDonationDetails = () => {
    const viewDonation = useLoaderData();
    const {user} = useAuth()
    console.log(user)
    const { petname,image, maxamount, description,shortnote} = viewDonation
    let [isOpen, setIsOpen] = useState(false)
    const closeModal =()=>
        {
            setIsOpen(false)
        }
    return (
        <div className="mx-auto container font-Lato flex justify-center flex-col">
              <Helmet>
                <title>
                    PetNest|View Donation Details 
                </title>
            </Helmet>
            <h3 className="font-semibold lg:text-3xl text-[16px] text-center my-7 text-[#5c715e]">Pet Details</h3>
            <section>
                <div className="dark:bg-violet-600 bg-[#ddeedf]">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                        <h1 className="lg:text-2xl text-xl font-bold  leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50 ">Name: {petname}</h1>
                        <h4 className="lg:text-xl text-[20px] font-bold  leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">Maximum Donation Amount :{maxamount}</h4>
                        <p className="mt-6 mb-8  text-[16px] sm:mb-12 xl:max-w-3xl dark:text-gray-50">{description}</p>
                        {/* <div className="flex flex-wrap justify-center">
                            <Link to={`/beavolunteer/${_id}`}type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 bg-[#155263] text-white dark:text-gray-900">Adopt</Link>
                            
                        </div> */}
                    </div>
                </div>
                <img src={image} alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
                <div className="container mx-auto my-4 flex flex-col justify-center items-center text-center font-Montserrat">
                    
                    <p className="my-3   lg:text-xl text-[16px] sm:mb-12 xl:max-w-3xl dark:text-gray-50">Note: {shortnote}</p>
                    <button onClick={() => setIsOpen(true)} className="btn bg-[#f1b963] text-white text-xl border-none">Donate Now</button>
                    <DonateModal 
                    isOpen={isOpen} 
                    closeModal={closeModal}
                    donationInfo={{
                        
                        maxamount: maxamount,
                        donator: {
                          donatorname: user?.displayName,
                          donatoremail: user?.email,
                          image: user?.photoURL,
                        },
                      }}
                    />
                </div>
            </section>
        </div>
    );
};

export default ViewDonationDetails;