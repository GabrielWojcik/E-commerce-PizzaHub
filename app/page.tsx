import LoginUser from "@/src/components/login/login";
import Logo from "../src/assets/Pizza-logo-vector-PNG-removebg-preview.png"
import Image from "next/image";
import { OpeningTime } from "@/src/components/OpeningTime/OpeningTime";

export default function Home() {
  const data = new Date()
  const horas = data.getHours();

  function verifyStatus() {
    if (horas < 17 || horas === 0 ) {
       return <p>Status: <strong>Fechado</strong> 🔴</p>
      } else {
      return <p>Status: <strong>Aberto</strong> 🟢</p>
    }
  }

  return (
    <div className="flex h-screen ">
        <div className="absolute inset-0 bg-login-background blur-sm bg-cover bg-center" style={{ zIndex: -1 }} />
        
        <div className="flex flex-col justify-center items-center bg-red-600 w-3/6 text-white">
            <Image src={Logo} alt="" width={140} height={140} />
            <h1 className="text-3xl">Horário de Atendimento</h1>

            <div className="p-4">
              <OpeningTime />
            </div>
              {verifyStatus()}
        </div>

        <div className="flex justify-center items-center w-3/6 ">
          <LoginUser />
        </div>

    </div>
  );
}
