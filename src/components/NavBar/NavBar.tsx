import { verifyStatus } from "@/src/utils/verifyStatus";
import Logo from "../../assets/Pizza-logo-vector-PNG-removebg-preview.png"
import Image from "next/image";

export default function NavBar() {
    return(
        <div className="flex fixed justify-between items-center  bg-red-600 text-white w-screen h-32">
            <div className="p-4">
                <Image src={Logo} alt="" width={120} height={120} />
            </div>
            <div className="absolute right-0 px-4">
                <ul className="flex gap-4 px-4">
                    <li>{verifyStatus()}</li>
                    <li>Menu</li>
                    <li>Carrinho</li>
                    <li>Conta</li>
                </ul>
            </div>
        </div>
    )
}