import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 px-3">
            <div className="container mx-auto flex justify-between items-center">
                
             
                <div className="flex items-center space-x-8">
                  
                    <div className="text-xl font-bold">
                        <Link href="/" className="hover:text-orange-500">Shop.com</Link>
                    </div>

                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="hover:text-blue-500 text-xl" />
                        </a>
                        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="hover:text-green-500 text-xl" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-pink-500 text-xl" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="hover:text-blue-400 text-xl" />
                        </a>
                    </div>
                </div>

                <div className="flex space-x-8">
                    <a href="/terms" className="hover:text-orange-500">Terms of Service</a>
                    <a href="/privacy" className="hover:text-orange-500">Privacy Policy</a>
                    <a href="/faq" className="hover:text-orange-500">FAQ</a>
                    <a href="/contact" className="hover:text-orange-500">Contact Us</a>
                </div>

                <div className="flex items-center">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-2 rounded-l-md border border-gray-400 outline-none focus:border-orange-500"
                    />
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600">
                        Send Message
                    </button>
                </div>
            </div>

            <div className="mt-8 text-center text-gray-400">
                <p>© Warda @ 2024. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
