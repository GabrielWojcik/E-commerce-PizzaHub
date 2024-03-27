import Image from "next/image"

interface PropsBoxItemComponent {
    categorie: string
    image: any
    title: string
    describe: string
    price: number
}


export function BoxItemComponent( props: PropsBoxItemComponent ) {
    return(
        <div className="flex flex-col rounded border-2 border-#C4C4C4 w-56 ">
            
            <div className="w-52 flex justify-center items-center p-2">
                <Image src={props.image} alt="" />
            </div>

            <div className="p-4">
                <p>{props.title}</p>
                <p>{props.describe}</p>
                <div className="flex justify-center items-center">
                    <p>R$ {props.price}</p>
                </div>
            </div>

            <div className="flex justify-center items-center ">
                <button className="bg-green-500 p-4 text-white w-full hover:bg-green-600">
                    Adicionar ao Carrinho
                </button>
            </div>

        </div>
    )
}