import Img from "../../src/assets/login.jpg"
import PizzasEspeciais from "../../src/assets/pizzas-especiais.jpg"
import Saladas from "../../src/assets/saladas.jpg"
import Bebidas from "../../src/assets/bebidas.jpg"

import CardComponenet from "@/src/components/Card/CardComponent"
import Link from "next/link"

export default function Inicio() {
    return(
        <div className="p-32">
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
                {/* <CardComponenet
                    title="Saladas"
                    categorie="Saladas"
                    description="Refresque-se com nossas saladas frescas e saudáveis, preparadas com os ingredientes mais frescos e acompanhadas de molhos deliciosos. Uma maneira perfeita de equilibrar sua refeição e satisfazer seu paladar."
                    image={Saladas}
                    values={15}
                />
                <CardComponenet
                    title="Bebidas"
                    categorie="Bebidas"
                    description="Acompanhe sua refeição com nossa seleção de bebidas cuidadosamente escolhidas. Desde cervejas artesanais e vinhos selecionados até refrigerantes gelados e sucos naturais, temos algo para todos os gostos e ocasiões."
                    image={Bebidas}
                    values={15}
                />
                <CardComponenet
                    title="Sobremesas"
                    categorie="Sobremesas"
                    description="Termine sua refeição com uma explosão de sabor com nossas sobremesas irresistíveis. De clássicos italianos como tiramisu a indulgentes sorvetes e pudins caseiros, cada sobremesa é uma celebração do doce prazer da vida."
                    image={Img}
                    values={15}
                /> */}
            </div>
        </div>
    )
}