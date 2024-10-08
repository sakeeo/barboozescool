import React from "react";
import Image from "next/image";

export default function (){
    return (
        <section id="TourRoute" className="p-5 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Tour Route</h2>
            <div className="flex justify-center">
                <Image
                    src="/Images/route.jpg" // Replace with your actual image path
                    alt="Tour Route Map"
                    layout="intrinsic" // You can use intrinsic for a smaller size
                    width={800} // Adjust the width as needed
                    height={400} // Adjust the height as needed
                    className="rounded-lg shadow-lg"
                />
            </div>
            <p className="mt-4 text-lg text-center text-gray-600">
                Our tour will take you through the vibrant streets of Kuta and Legian, showcasing the best sights and
                sounds along the way.
            </p>
        </section>
    )
}