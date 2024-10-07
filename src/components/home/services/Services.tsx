const servicesData = [
    {
        title: "Beer Package",
        price: "AU$59 / IDR 590,000",
        details: [
                "1:30 to 2:00 hour Unlimited Beers",
                "Snack, Soft Drink, Water",
                "Music by request, Wi-Fi, CCTV, Ceiling Fan, Port Charger, Toilet",
            ],
    },
    {
        title: "Smirnoff Package",
        price: "AU$59 / 590,000",
        details:  [
            "1:30 to 2:00 hour Unlimited Smirnoff Ice",
            "Snack, Soft Drink, Water",
            "Music by request, Wi-Fi, CCTV, Ceiling Fan, Port Charger, Toilet",
        ],
    },
    {
        title: "Wine Package",
        price: "AU$70 / 700,000",
        details:  [
            "1:30 to 2:00 hour Unlimited Wines, Smirnoff Ice",
            "Snack, Soft Drink, Water",
            "Music by request, Wi-Fi, CCTV, Ceiling Fan, Port Charger, Toilet",
        ]
    },
    {
        title: "Champagne Package",
        price: "AU$70 / 700,000",
        details:  [
            "1:30 to 2:00 hour Unlimited Champagne, Smirnoff Ice",
            "Snack, Soft Drink, Water",
            "Music by request, Wi-Fi, CCTV, Ceiling Fan, Port Charger, Toilet",
        ]
    },
    {
        title: "Soft Package",
        price: "AU$30/ 300,000",
        details:  [
            "1:30 to 2:00 hour Unlimited Coke, Sprite (Lemonade), Fanta",
            "Snack, Soft Drink, Water",
            "Music by request, Wi-Fi, CCTV, Ceiling Fan, Port Charger, Toilet",
        ]
    },
];


const Services = () => {
    return (
        <div className="p-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.map((service, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-lg text-amber-600 font-bold">{service.price}</p>
                        <ul className="mt-2 text-gray-600 list-disc list-inside">
                            {service.details.map((detail, detailIndex) => (
                                <li key={detailIndex}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;