import Logo from "@/assets/logo.png";
import Image from "next/image";

export default function (){
    return (

        <footer className="bg-white py-6 drop-shadow-lg">
            <div className="container mx-auto flex flex-col items-center space-y-4">
                {/* Logo and Brand Name */}
                <div className="flex justify-center items-center space-x-4">
                    <Image width={200} height={200} src={Logo} alt={'barboozescool'} className="h-8 w-auto"/>
                    <span className="text-black text-2xl font-semibold">BAR Booze'S Cool</span>
                </div>

                {/* Copyright Text */}
                <div className="text-black font-light">Copyright 2024</div>
            </div>
        </footer>
    )
}