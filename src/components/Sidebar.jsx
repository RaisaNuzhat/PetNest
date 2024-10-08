import logo from '../assets/logo.png'
import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
//import { FcSettings } from 'react-icons/fc'
// import { GrUserAdmin,BsFingerprint } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
//import { BsGraphUp } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import useRole from '../hooks/useRole'
import UserMenu from './menu/UserMenu';
import AdminMenu from './menu/AdminMenu';
//import MenuItem from './menu/MenuItem'


const Sidebar = () => {

    const [isActive, setActive] = useState(false)
    const [role] = useRole();
    console.log(role)
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
                            {role === 'user' && <UserMenu />}
                            {role === 'admin' && <AdminMenu />}
                        </nav>
                    </div>
                </div>
                <div>
                    <hr />
                    <Link
                        to='/'
                        className=' btn flex w-full items-center px-4 py-2 mt-5 text-white bg-[#f1b963] '
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Back to Home</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar
