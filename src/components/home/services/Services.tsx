import {StarOutlined} from "@ant-design/icons";

const servicesData = [
    {
        title: "Beer Package",
        price: "AU$59 / IDR 590,000",
        details: [
                "1:30 to 2:00 hour Unlimited Beers",
                "Snack, Soft Drink, Water",
                "Music by request, Wi-Fi, CCTV, Ceiling Fan, Port Charger, Toilet",
            ],
        icon: <StarOutlined className="text-amber-500 text-3xl" />,
    },
    {
        title: "Smirnoff Package",
        price: "AU$59 / 590,000",
        details:  [
            "1:30 to 2:00 hour Unlimited Smirnoff Ice",
            "Snack, Soft Drink, Water",
            "Music by request, Wi-Fi, CCTV, Ceiling Fan, Port Charger, Toilet",
        ],
        icon: <StarOutlined className="text-amber-500 text-3xl" />,
    },
    {
        title: "Wine Package",
        price: "AU$70 / 700,000",
        details:  [
            "1:30 to 2:00 hour Unlimited Wines, Smirnoff Ice",
            "Snack, Soft Drink, Water",
            "Music by request, Wi-Fi, CCTV, Ceiling Fan, Port Charger, Toilet",
        ],
        icon: <StarOutlined className="text-amber-500 text-3xl" />,
    },
    {
        title: "Champagne Package",
        price: "AU$70 / 700,000",
        details:  [
            "1:30 to 2:00 hour Unlimited Champagne, Smirnoff Ice",
            "Snack, Soft Drink, Water",
            "Music by request, Wi-Fi, CCTV, Ceiling Fan, Port Charger, Toilet",
        ],
        icon: <StarOutlined className="text-amber-500 text-3xl" />,
    },
    {
        title: "Soft Package",
        price: "AU$30/ 300,000",
        details:  [
            "1:30 to 2:00 hour Unlimited Coke, Sprite (Lemonade), Fanta",
            "Snack, Soft Drink, Water",
            "Music by request, Wi-Fi, CCTV, Ceiling Fan, Port Charger, Toilet",
        ],
        icon: <StarOutlined className="text-amber-500 text-3xl" />,
    },
];


const Services = () => {
    return (
        <section id="Services" className="p-10 bg-gray-100 pt-28">
            <h2 className="text-3xl font-bold text-black text-center mb-8">Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.map((service, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                        <div className="flex items-center mb-2">
                            {service.icon} {/* Display the icon here */}
                            <h3 className="text-xl text-gray-600 font-semibold ml-2">{service.title}</h3>
                        </div>
                        <p className="text-lg text-amber-600 font-bold">{service.price}</p>
                        <ul className="mt-2 text-gray-600 list-disc list-inside">
                            {service.details.map((detail, detailIndex) => (
                                <li key={detailIndex}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;