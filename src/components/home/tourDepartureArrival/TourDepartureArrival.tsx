import React from 'react';

const TourDepartureArrival = () => {
    const schedule = [
        { departure: '11 AM', arrival: '1 PM' },
        { departure: '2 PM', arrival: '4 PM' },
        { departure: '5 PM', arrival: '7 PM' },
        { departure: '8 PM', arrival: '10 PM' },
    ];

    return (
        <section className="w-full py-16 bg-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Tour Schedule</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {schedule.map((item, index) => (
                        <li
                            key={index}
                            className="bg-white shadow-lg rounded-lg py-6 px-4 hover:scale-105 transform transition duration-200"
                        >
                            <div className="flex justify-center items-center space-x-6">
                                <span className="text-xl font-semibold text-red-500">{item.departure}</span>
                                <span className="text-2xl font-bold text-gray-700">→</span>
                                <span className="text-xl font-semibold text-red-500">{item.arrival}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    );
};
export default TourDepartureArrival;