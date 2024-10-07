const facilities = [
    "TV for music request",
    "Sound system powered by JBL",
    "Wi-Fi",
    "CCTV",
    "Ceiling Fan",
    "Port Charger",
    "Toilet",
    "Rain Cover / Personal Rain Coat",
    "Security Guard",
    "Professional Driver",
    "Friendly Team Staff"
];

const Facilities = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Facilities</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {facilities.map((facility, index) => (
                        <li
                            key={index}
                            className="bg-white shadow-lg rounded-lg py-4 px-2 md:py-6 md:px-4 hover:scale-105 transform transition duration-200 mx-2"
                        >
                            <div className="text-md font-medium text-gray-700">{facility}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Facilities;