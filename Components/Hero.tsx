import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="bg-gray-100 py-05 px-20 mx-[220px] flex flex-col md:flex-row items-center justify-between">
            {/* Left Side Content */}
            <div className="max-w-md text-left space-y-4">
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                    Welcome to Chairy
                </p>
                <h1 className="text-4xl font-bold text-gray-800 leading-snug">
                    Best Furniture Collection For Your Interior.
                </h1>
                <button className="mt-6 px-8 py-3 bg-teal-500 text-white font-medium rounded-md shadow-md hover:bg-teal-600 transition-all">
                    Shop Now <span className="ml-2">→</span>
                </button>
            </div>

            {/* Right Side Image */}
            <div className="mt-8 md:mt-0">
                <Image
                    src="/banner-img.png"
                    alt="Chair"
                    width={584}
                    height={584}
                    className="object-contain mx-auto md:mx-0"
                    priority
                />
            </div>
        </section>
    );
};

export default Hero;
