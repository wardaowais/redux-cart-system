import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../store/bag';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const bagItems = useSelector(store => store.bag);

    const dispatch = useDispatch();


    const handleIncreaseQty = (item) => {
        dispatch(bagActions.addToBag(item))


    };


    const handleDecreaseQty = (item) => {
        dispatch(bagActions.decreaseQty(item))

    };

    return (
        <div
            className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className="p-4 flex flex-col h-full">
                <h2 className="text-lg font-bold mb-4 text-black">Shopping Bag</h2>


                <button
                    onClick={toggleSidebar}
                    className="absolute top-4 right-4 text-xl"
                >
                    <ImCross color='black' size={20} />
                </button>

                <div className='items h-[70%] overflow-y-auto mb-3'>
                    {bagItems.length > 0 ? (
                        bagItems.map(item => (
                            <div key={item.id} className="flex items-center mb-4">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-28 h-28 object-cover mr-4"
                                />
                                <div className="flex-grow">
                                    <h4 className="text-md font-semibold text-black">{item.title}</h4>
                                    <p className="text-gray-500">${item.price.toFixed(2)}</p> {/* Format price */}
                                </div>
                                
                                <div className="flex items-center">
                                    <button onClick={() => handleDecreaseQty(item)} className="p-1 bg-gray-200 rounded-l hover:bg-gray-300">
                                        <FaMinus />
                                    </button>
                                    <span className="px-3 py-1 border text-black">{item.qty}</span> 
                                    <button onClick={() => handleIncreaseQty(item)} className="p-1 bg-gray-200 rounded-r hover:bg-gray-300">
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Your bag is empty.</p>
                    )}
                </div>


                <div className="flex flex-col mt-auto space-y-1">

                    <div className='text-black bg-[#F6F6F6] w-full h-12 flex justify-between items-center p-4'>
                        <p>Cart Subtotal:</p>
                        <p>
                            ${bagItems.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2)}
                        </p>
                    </div>


                    <Link to="/bag">
                        <button className='w-full text-black border border-black p-2 hover:bg-black hover:text-white transition-colors'>
                            View Cart
                        </button>
                    </Link>


                    <button className='w-full text-black border border-black p-2 hover:bg-black hover:text-white transition-colors'>
                        Check Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
