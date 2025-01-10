import React from "react";

function Features() {
    const features = [
        { title: "Collaborate with Ease", description: "Work together seamlessly." },
        { title: "Organize Your Work", description: "Keep tasks on track effortlessly." },
        { title: "Achieve More", description: "Boost productivity and hit your goals." },
    ];

    return (
        <div className="container mx-auto py-16">
            <h2 className="text-4xl font-bold text-center mb-10">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                    >
                        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-gray-700">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
