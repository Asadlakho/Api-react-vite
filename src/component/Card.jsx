import React from 'react';

const Card = ({ name, imageSrc, description }) => {
    return (
        <div className="bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 p-[2px] rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] text-gray-900 p-6 cursor-pointer rounded-3xl h-full">
                <img
                    src={imageSrc}
                    alt={name}
                    className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
                />
                <h3 className="text-[20px] sm:text-[22px] font-extrabold text-center mb-2 text-purple-700 tracking-wide">
                    {name}
                </h3>
                <p className="text-sm sm:text-base text-center text-gray-700 font-medium leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
