import React from 'react';
import { useDispatch } from 'react-redux';
import { bagActions } from '../store/bag';
import { productItem as products } from '../data/product';

const Product = () => {
    const dispatch = useDispatch();

    const handleAddToBag = (productObject) => {
        dispatch(bagActions.addToBag(productObject));

    };

    return (
        <div className="flex flex-wrap justify-center gap-4 p-10">
            {products.map((product) => (
                <div key={product.id} className="w-80 mb-2 hover:shadow-lg transition-shadow duration-300 p-2">
                    <img src={product.img} alt={product.title} className="w-full h-96 object-cover" />
                    <div className="pt-1">
                        <h4 className="text-sm mb-[3px]">{product.title}</h4>
                        <p className="text-sm font-semibold text-gray-800 mb-4">${product.price}</p>
                        <button
                            onClick={() => handleAddToBag(product)} 
                            className="text-black border-2 border-black py-2 px-4 hover:bg-black hover:text-white transition"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;
