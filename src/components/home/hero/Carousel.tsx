"use client"
import React, { useState } from 'react';
import Image from 'next/image'; // Masih menggunakan Image dari next/image

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Path gambar dari direktori public/images
    const images = [
        '/images/hero1.jpg',
        '/images/hero2.jpg',
        '/images/hero3.jpg'
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full h-[500px] overflow-hidden"> {/* Ubah tinggi menjadi 500px */}
            {/* Slides */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index}
                         className="relative w-full h-[500px] flex-shrink-0"> {/* Tambah tinggi pada setiap slide */}
                        {/* Overlay Gelap */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                        {/* Gambar dari folder public menggunakan path langsung */}
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />

                        {/* Teks di Tengah Gambar */}
                        <div
                            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
                            {/* Header */}
                            <h2 className="text-4xl font-bold mb-3">BAR Booze'S
                                Cool</h2> {/* Ganti dengan header yang sesuai */}

                            {/* Tagline */}
                            <p className="text-xl mb-5">Don’t stay sober!</p> {/* Ganti dengan tagline yang sesuai */}

                            {/* CTA */}
                            <div>
                                <p className="text-lg mb-3">Join Us for a fun filled 2 hour cruising tour</p>
                                <button
                                    onClick={() => window.open('https://wa.me/6285333683334', '_blank')} // Replace with your phone number
                                    className="bg-transparent text-white text-lg px-6 py-3 rounded border border-amber-300 hover:bg-amber-300 hover:text-black transition duration-300">
                                    Book Now!
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* Tombol Previous */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-30"
            >
                &#10094;
            </button>

            {/* Tombol Next */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-30"
            >
                &#10095;
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? 'bg-white' : 'bg-gray-400'
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

