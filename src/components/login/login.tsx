import Link from "next/link";
import ButtonComponent from "../Button/ButtonComponent";
import InputComponent from "../Input/InputComponent";

export default function LoginUser() {

    return(
        <div className="flex flex-col p-4 items-center justify-center rounded border-2 border-#C4C4C4 bg-red-500">

            <strong className="text-white text-lg">Fazer Login</strong>
                <InputComponent
                    type="user-name"
                    label="Usuário"
                />

                <InputComponent
                    type="password"
                    label="Senha"
                />
            <Link href="/inicio">
                <ButtonComponent
                    type="send"
                    label="Entrar"
                />
            </Link>
        </div>
    )
}