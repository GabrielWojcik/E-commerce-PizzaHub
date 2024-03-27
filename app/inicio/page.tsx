import Img from "../../src/assets/login.jpg"
import PizzasEspeciais from "../../src/assets/pizzas-especiais.jpg"
import CardComponenet from "@/src/components/Card/CardComponent"

export default function Inicio() {
    return(
        <div>
            <div className="p-4 text-3xl">
                <h1>Qual vai ser seu pedido hoje ? 😊</h1>
            </div>
            <div className="flex justify-center items-center flex-wrap p-4 -h-screen">
                <CardComponenet
                    title="Pizzas Tradicionais"
                    categorie="Pizzas Tradicionais"
                    description="Delicie-se com nossas pizzas clássicas, preparadas com ingredientes frescos e uma massa fina e crocante, assadas no forno a lenha para garantir o sabor autêntico da Itália em cada pedaço."
                    image={Img}
                    values={15}
                />
                <CardComponenet
                    title="Pizzas Especiais"
                    categorie="Pizzas Especiais"
                    description="Explore nossa seleção exclusiva de pizzas especiais, cuidadosamente elaboradas com combinações únicas de ingredientes frescos e sabores intensos que irão surpreender o seu paladar."
                    image={PizzasEspeciais}
                    values={15}
                />
            </div>
        </div>
    )
}