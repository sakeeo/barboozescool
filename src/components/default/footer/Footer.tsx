import Logo from "@/assets/logo.png";
import Image from "next/image";

export default function (){
    return (

        <footer className="bg-gray-900 py-6">
            <div className="container mx-auto flex flex-col items-center space-y-4">
                {/* Logo and Brand Name */}
                <div className="flex justify-center items-center space-x-4">
                    <Image width={100} height={100} src={Logo} alt={'barboozescool'} className="h-8 w-auto"/>
                    <span className="text-white text-2xl font-semibold">BAR Booze'S Cool</span>
                </div>

                {/* Copyright Text */}
                <div className="text-white font-light">Copyright 2024</div>
            </div>
        </footer>
    )
}