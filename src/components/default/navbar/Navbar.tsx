import Image from "next/image";
import  Logo from "@/assets/logo.png"
import {MenuOutlined} from "@ant-design/icons";
export default function (

){
    return (
        <div className={'w-full flex justify-between border-b-[1px] border-b-slate-300 shadow-xl py-3 px-4 items-center'}>
            <div className={'lg:w-1/2'}>
                <div className={'lg:text-3xl  flex items-center'}>
                    <Image width={50} height={50} src={Logo} alt={'barboozescool'} />
                    <div className={'px-4'}>BAR Booze'S Cool</div>
                </div>
            </div>
            <ul className={'lg:w-1/2 flex justify-end'}>
                <li className={'hidden lg:inline-flex px-4 py-2 cursor-pointer hover:bg-amber-300'}>Home</li>
                <li className={'hidden lg:inline-flex px-4 py-2 cursor-pointer hover:bg-amber-300'}>Abous us</li>
                <li className={'hidden lg:inline-flex px-4 py-2 cursor-pointer hover:bg-amber-300'}>Services</li>
                <li className={'hidden lg:inline-flex px-4 py-2 cursor-pointer hover:bg-amber-300'}>Gallery</li>
                <li className={'hidden lg:inline-flex px-4 py-2 cursor-pointer hover:bg-amber-300'}>Contact</li>
                <li className={'lg:hidden inline-flex px-4 py-2 cursor-pointer hover:bg-amber-300'}>
                    <MenuOutlined />
                </li>
            </ul>

        </div>
    )
}