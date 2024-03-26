import { BoxItemComponent } from "@/src/components/BoxItem/BoxItemComponent";
import Img from "../../../src/assets/pizzas-especiais.jpg"

export default function Pedido() {
    return(
        <div className="bg-blue-500">
            <BoxItemComponent 
                title="Margherita"
                categorie="Pizza"
                describe="Molho de tomate, mussarela fresca, manjericão e um fio de azeite de oliva extra virgem."
                image={Img} 
                price={30}           
                />
        </div>
    )
}