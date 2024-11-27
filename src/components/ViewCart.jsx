import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../store/bag';


const ViewCart = () => {
    const bagitems = useSelector(store => store.bag)
    // Calculate total price and subtotal
    const subtotalPrice = bagitems.reduce((total, item) => total + (item.price * item.qty), 0);
    const shippingCost = 149;
    const totalPrice = subtotalPrice + shippingCost;
    const dispatch = useDispatch();
    const handleAddToBag = (item) => {
        dispatch(bagActions.addToBag(item))

    }
    const handleDecreaseQty = (item) => {
        dispatch(bagActions.decreaseQty(item))

    };
    const handleRemove = (item) => {
        dispatch(bagActions.removeFromBag(item))
    }


    return (

        <div className="container mx-auto p-10 flex min-h-[80vh]">

            <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

                <div className="flex flex-col gap-6">
                    {bagitems.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg  flex items-center">

                            {/* Adjusted Image */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-24 h-36 object-cover  mr-4"
                            />
                            <div className="flex-grow">
                                <div >
                                    <h4 className="text-sm font-bold">{item.title}</h4>
                                    <p className="text-sm font-semibold text-gray-800">PKR {item.price}</p>
                                    <div className="flex items-center">
                                        <label htmlFor="quantity" className="mr-2">Qty:</label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            value={item.qty}
                                            min="1"
                                            className="border w-16 p-1 text-center"
                                        />
                                    </div>

                                </div>

                                <button onClick={() => { handleAddToBag(item) }} className=" text-black border-2 mt-6 border-black  py-2 px-2  hover:bg-black hover:text-white transition">
                                    Add To Cart
                                </button>

                            </div>

                            <MdDelete className="cursor-pointer" size={24} onClick={() => { handleRemove(item) }} />

                        </div>
                    ))}

                </div>


                <button className="bg-gray-700 text-white py-2 px-4  hover:bg-gray-800 transition mt-4">
                    Update Shopping Cart
                </button>
            </div>

            {/* Order Summary Section */}
            <div className="ml-10 bg-gray-100 h-[60%] shadow-lg p-6 w-1/3">
                <h2 className="text-2xl font-bold mb-4">Summary</h2>
                <div className="flex justify-between items-center">
                    <span>Subtotal:</span>
                    <span>PKR {subtotalPrice}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span>Shipping (Fixed):</span>
                    <span>PKR {shippingCost}</span>
                </div>
                <div className="flex justify-between items-center mt-4 font-bold">
                    <span>Total:</span>
                    <span>PKR {totalPrice}</span>
                </div>
                <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition mt-4 w-full">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default ViewCart;
