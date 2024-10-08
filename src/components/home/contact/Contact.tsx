import { MailOutlined, FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'; // Importing the icons

export default function (){
    return (

    <section id="Contact" className="bg-gray-100 p-2 pt-28">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Column 1: Address and Google Maps */}
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">Our Location</h3>
                    <p className="text-gray-600 mb-4">Jl. Patih Jelantik No.200X, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361</p>
                    <div className="w-full h-64">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8284072701254!2d115.11367761539448!3d-8.68496309134757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2471e209ffa41%3A0x7390d102383940e!2sBar%20Booze%27S%20Cool%20Bali!5e0!3m2!1sen!2sid!4v1649994299905!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* Column 2: Social Media Links */}
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-center text-2xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
                    <ul className="space-y-4 p-5">
                        <li className="flex items-center">
                            <MailOutlined className="text-4xl text-blue-500 mr-2" />
                            <a href="mailto:barboozescool@gmail.com" className="text-xl text-blue-500 hover:underline">
                                barboozescool@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center">
                            <FacebookOutlined className="text-4xl text-blue-600 mr-2" />
                            <a href="https://www.facebook.com/profile.php?id=61566142966702" target="_blank" rel="noopener noreferrer"
                               className="text-xl text-blue-600 hover:underline">
                                Bar Booze'S Cool Bali
                            </a>
                        </li>
                        <li className="flex items-center">
                            <InstagramOutlined className="text-4xl text-pink-600 mr-2" />
                            <a href="https://instagram.com/barboozescoolbali" target="_blank" rel="noopener noreferrer"
                               className="text-xl text-pink-600 hover:underline">
                                @barboozescoolbali
                            </a>
                        </li>
                        <li className="flex items-center">
                            <WhatsAppOutlined className="text-4xl text-green-600 mr-2" />
                            <a href="https://wa.me/6285333683334" target="_blank" rel="noopener noreferrer"
                               className="text-xl text-green-600 hover:underline">
                                +62 85 333 683 334
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>


)
}