import {ReactNode} from "react";
import Navbar from "@/components/default/navbar/Navbar";
import Footer from "@/components/default/footer/Footer";

export default function (
    props : {children:ReactNode}
){
    return (

            <div className={'w-full h-full'}>
                <Navbar />
                <div>{props.children}</div>
                <Footer/>
            </div>

    )
}

