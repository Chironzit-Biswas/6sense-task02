import React from "react";

function HeroSection() {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-extrabold mb-6">Where work connects</h1>
                <p className="text-lg mb-8">
                    Connect work to goals and automate workflows with AI as your teammate.
                </p>
                <button className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100">
                    Get Started Now
                </button>
            </div>
        </div>
    );
}

export default HeroSection;
