import { verifyStatus } from "@/src/utils/verifyStatus";
import Logo from "../../assets/Pizza-logo-vector-PNG-removebg-preview.png"
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return(
        <div className="flex justify-between items-center  bg-red-600 text-white w-screen h-32">
            <div className="p-4">
                <Image src={Logo} alt="" width={120} height={120} />
            </div>
            <div className="absolute right-0 px-4">
                <ul className="flex gap-4 px-4">
                    <li>{verifyStatus()}</li>
                    <Link href="/inicio">
                        <li >Menu</li>
                    </Link>
                    <Link href="/carrinho">
                        <li>Carrinho</li>
                    </Link>
                    <Link href="/conta">
                        <li>Conta</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}