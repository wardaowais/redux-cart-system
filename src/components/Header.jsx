import React, { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import Sidebar from './Sidebar';
import shopstore from '../store/indes';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Header = () => {
    const bag = useSelector(store => store.bag)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    console.log(bag)


 
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    return (
        <>
            
            <div className="bg-gray-200 text-black text-center p-2 text-sm font-medium">
                <span>✨ Free Shipping</span> on orders over <span className="font-bold">$100</span>!
            </div>

          
            <header className="bg-gray-900 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    
                    <div className="text-xl font-bold">
                        <Link to="/" className="hover:text-gold">Shop.com</Link>
                    </div>

                   
                    <nav className="space-x-8">
                        <a href="/men" className="hover:text-gold">Men</a>
                        <a href="/women" className="hover:text-gold">Women</a>
                        <a href="/kids" className="hover:text-gold">Kids</a>
                    </nav>


                    <div className="relative">
                        <button onClick={toggleSidebar} className="relative">
                            <FaShoppingBag className="text-2xl" />
                            <span className="absolute top-[-2px] left-[13px] right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                                {bag?.length || 0}
                            </span>

                        </button>
                    </div>
                </div>

               
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </header>
        </>
    );
};

export default Header;
