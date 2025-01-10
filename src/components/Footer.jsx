import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Asana</h3>
                    <p>Making work enjoyable and productive.</p>
                </div>
                <ul className="flex gap-6">
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="text-center mt-6">
                © 2025 Chironzit Biswas. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
