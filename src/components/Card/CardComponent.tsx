import Image from "next/image"
import Link from "next/link"

interface PropsCardComponent {
    title: string
    image: any
    categorie: string
    description: string
    values: number
}

export default function CardComponenet( props: PropsCardComponent ) {
    return(
        <div className="flex flex-col rounded border-2 border-#C4C4C4 w-1/3 h-[600px] m-2">
            <div className="p-4 text-3xl font-bold">
                <h1>
                    {props.title}
                </h1>
            </div>

            <div className="cursor-pointer">
                <Image src={props.image} alt="img" placeholder="blur" />
            </div>

            <div className="p-4 h-[300px]">
                <p>{props.description}</p>
            </div>
     
            <div className="flex justify-center items-center p-4">
                <Link href="/categoria/pizza-tradicional">
                    <button className="bg-green-500 text-white rounded-sm cursor-pointer p-4 w-full hover:bg-green-600">
                    📒 Abrir Cardápio
                    </button>
                </Link>
            </div>
        </div>
    )
}