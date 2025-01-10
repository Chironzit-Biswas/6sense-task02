import React from "react";

function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4 text-white sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">PlayfulRedesign</div>
                <ul className="flex gap-6 text-lg">
                    <li className="hover:underline cursor-pointer">Features</li>
                    <li className="hover:underline cursor-pointer">Pricing</li>
                    <li className="hover:underline cursor-pointer">Contact</li>
                </ul>
                <button className="bg-white text-pink-500 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100">
                    Get Started
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
