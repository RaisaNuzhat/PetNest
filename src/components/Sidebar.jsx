import logo from '../assets/logo.png'
import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
//import { FcSettings } from 'react-icons/fc'
import { BsFillHouseAddFill } from 'react-icons/bs'
// import { GrUserAdmin,BsFingerprint } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { RiHeartAdd2Fill } from "react-icons/ri";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { IoCreateSharp } from "react-icons/io5";
import { BsMinecart } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
//import { BsGraphUp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const { logOut } = useAuth()
    const [isActive, setActive] = useState(false)

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            <img
                                // className='hidden md:block'
                                src={logo}
                                alt='logo'
                                width='100'
                                height='100'
                            />
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#155263]  w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto'>
                            <Link to='/'>
                                <img
                                    // className='hidden md:block'
                                    src={logo}
                                    alt='logo'
                                    width='100'
                                    height='100'
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        

                        {/*  Menu Items */}
                        <nav>
                           
                            <NavLink
                                to='addapet'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform hover:text-[#f1b963] ${isActive ? 'bg-[#f1b963]  text-white' : 'text-white'
                                    }`
                                }
                            >
                                <RiHeartAdd2Fill className='w-5 h-5' />

                                <span className='mx-4 font-medium'>Add A Pet</span>
                            </NavLink>

                            {/* Add Room */}
                            <NavLink
                                to='myaddedpets'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform     hover:text-[#f1b963] ${isActive ? 'bg-[#f1b963]  text-white' : 'text-white'
                                    }`
                                }
                            >
                                <BsFillHouseAddFill className='w-5 h-5' />

                                <span className='mx-4 font-medium'>My Added Pets</span>
                            </NavLink>
                            {/* My Listing */}
                            <NavLink
                                to='adoptionrequest'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:text-[#f1b963] ${isActive ? 'bg-[#f1b963]  text-white' : 'text-white'
                                    }`
                                }
                            >
                                <IoGitPullRequestSharp  className='w-5 h-5' />
                                <span className='mx-4 font-medium'>Adoption Requests</span>
                            </NavLink>
                            {/* create donation */}
                            <NavLink
                                to='createdonation'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:text-[#f1b963] ${isActive ? 'bg-[#f1b963]  text-white' : 'text-white'
                                    }`
                                }
                            >
                                <IoCreateSharp className='w-5 h-5' />
                                <span className='mx-4 font-medium'>Create Donation Campaign</span>
                            </NavLink>
                            <NavLink
                                to='mycampaigns'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:text-[#f1b963] ${isActive ? 'bg-[#f1b963]  text-white' : 'text-white'
                                    }`
                                }
                            >
                                <BsMinecart className='w-5 h-5' />
                                <span className='mx-4 font-medium'>My Donation Campaigns</span>
                            </NavLink>
                            <NavLink
                                to='mydonations'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:text-[#f1b963] ${isActive ? 'bg-[#f1b963]  text-white' : 'text-white'
                                    }`
                                }
                            >
                                <FaHandHoldingHeart className='w-5 h-5' />
                                <span className='mx-4 font-medium'>My Donations</span>
                            </NavLink>
                        </nav>
                    </div>
                </div>
                <div>
                    <hr />
                    <button
                        onClick={logOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-[#f1b963]   hover:text- transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
