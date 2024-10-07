export default function (){
    return (
        <section className="py-16 bg-gray-100" id="contact">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Column 1: Address and Google Maps */}
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h3>
                        <p className="text-gray-600 mb-4">1234 Bar Street, Kuta, Bali, Indonesia</p>
                        <div className="w-full h-64">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=..."
                                width="100%"
                                height="100%"
                                style={{border: 0}}
                                aria-hidden="false"
                            ></iframe>
                        </div>
                    </div>

                    {/* Column 2: Social Media Links */}
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:info@barboozes.com" className="text-lg text-blue-500 hover:underline">
                                    📧 Email: info@barboozes.com
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer"
                                   className="text-lg text-blue-600 hover:underline">
                                    🌐 Facebook: /yourpage
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer"
                                   className="text-lg text-pink-600 hover:underline">
                                    📸 Instagram: /yourpage
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                                   className="text-lg text-green-600 hover:underline">
                                    📱 WhatsApp: +62 123 456 7890
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}