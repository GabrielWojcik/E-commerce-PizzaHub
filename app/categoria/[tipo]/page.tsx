import { BoxItemComponent } from "@/src/components/BoxItem/BoxItemComponent";
import Img from "../../../src/assets/pizzas-especiais.jpg"

export default function Pedido() {
    return(
        <div className="">
            <div className="p-4 text-3xl">
                <strong>Sabores Pizzas Tradicionais</strong>
            </div>
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center flex-wrap gap-4 p-4 w-4/5 ">
                <BoxItemComponent 
                    title="Margherita"
                    categorie="Pizza"
                    describe="Molho de tomate, mussarela fresca, manjericão e um fio de azeite de oliva extra virgem."
                    image={Img} 
                    price={30}           
                />
                <BoxItemComponent 
                    title="4 Queijos"
                    categorie="Pizza"
                    describe="Molho de tomate, mussarela fresca, manjericão e um fio de azeite de oliva extra virgem."
                    image={Img} 
                    price={30}           
                />
                <BoxItemComponent 
                    title="Frango"
                    categorie="Pizza"
                    describe="Molho de tomate, mussarela fresca, manjericão e um fio de azeite de oliva extra virgem."
                    image={Img} 
                    price={30}           
                />
                <BoxItemComponent 
                    title="Frango"
                    categorie="Pizza"
                    describe="Molho de tomate, mussarela fresca, manjericão e um fio de azeite de oliva extra virgem."
                    image={Img} 
                    price={30}           
                />
            </div>
        </div>
        </div>
    )
}