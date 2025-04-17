import React, { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../../helper/ContextApi';
import Card from '../../component/Card';

const Home = () => {
    const { getAllDevelopers, developers } = useContext(ContextApi);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDevelopers, setFilteredDevelopers] = useState([]);

    useEffect(() => {
        if (!developers) {
            getAllDevelopers();
        }
    }, [getAllDevelopers, developers]);

    useEffect(() => {
        if (developers) {
            if (searchTerm === '') {
                setFilteredDevelopers(developers);
            } else {
                const results = developers.filter((developer) =>
                    developer.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredDevelopers(results);
            }
        }
    }, [searchTerm, developers]);

    return (
        <>
            <div className="bg-gradient-to-tr from-sky-700 via-indigo-800 to-fuchsia-800 text-white min-h-screen px-4 sm:px-6 lg:px-8 py-8">
                {/* 🔍 Search Input and Button */}
                <div className="p-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search developers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-3 rounded-xl w-full sm:w-[300px] text-black bg-white/80 border border-gray-300 shadow-md focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={() => { }}
                        className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white px-6 py-3 cursor-pointer rounded-xl shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
                    >
                     Search
                    </button>
                </div>

                {/* 🖼️ Developer Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {filteredDevelopers?.length > 0 ? (
                        filteredDevelopers.map((developer, index) => (
                            <Card
                                key={index}
                                name={developer.title}
                                imageSrc={developer.image || 'https://via.placeholder.com/150'}
                                description={`Location: ${developer.creator[0]} | Email: ${developer.episodes}`}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-white font-medium">
                            No developers found
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-black text-white py-6 mt-8">
                <h1 className="text-center italic font-semibold tracking-wide">
                    @ Developer Asad 2025
                </h1>
            </footer>
        </>
    );
};

export default Home;
