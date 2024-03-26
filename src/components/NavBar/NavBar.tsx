import Logo from "../../assets/Pizza-logo-vector-PNG-removebg-preview.png"
import Image from "next/image";

export default function NavBar() {
    return(
        <div className="flex justify-between items-center  bg-red-600 text-white">
            <div className="p-4">
                <Image src={Logo} alt="" width={120} height={120} />
            </div>
            <div className="absolute w-1/4 right-0">
                <ul className="flex gap-4">
                    <li>Menu</li>
                    <li>Carrinho</li>
                    <li>Conta</li>
                </ul>
            </div>
        </div>
    )
}