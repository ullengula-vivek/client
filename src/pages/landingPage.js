import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'animate.css';

const LandingPage = () => {
    const message = useSelector((state) => state.sample.message);

    return (
        <div className="h-screen bg-gradient-to-r from-gray-800 to-black text-white flex flex-col items-center justify-center">
            <div className="text-center animate__animated animate__fadeInDown">
                <h1 className="text-6xl font-bold mb-4">{message}</h1>
                <p className="text-2xl mb-8">Your Name - Full Stack Developer</p>
                <Link to="/contact" className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition duration-300">
                    Contact Me
                </Link>
            </div>
            <div className="absolute bottom-10 text-center">
                <p className="text-xl animate__animated animate__bounce">Scroll Down</p>
            </div>
        </div>
    );
};

export default LandingPage;
