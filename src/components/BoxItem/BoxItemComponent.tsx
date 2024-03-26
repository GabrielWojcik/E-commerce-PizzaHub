import Image from "next/image"
import Img from "../../assets/pizzas-especiais.jpg"

interface PropsBoxItemComponent {
    categorie: string
    image: any
    title: string
    describe: string
    price: number
}


export function BoxItemComponent( props: PropsBoxItemComponent ) {
    return(
        <div className="flex flex-col rounded border-2 border-#C4C4C4 bg-red-500">
            <div>
                {/* <Image src={props.image} alt="" width={100} height={100} /> */}
            </div>

            <div>
                <p>{props.title}</p>
                <p>{props.describe}</p>
            </div>

        </div>
    )
}