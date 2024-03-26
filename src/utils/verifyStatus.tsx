export function verifyStatus() {
    const data = new Date()
    const horas = data.getHours();

    if (horas < 17 || horas === 0 ) {
       return <p>Status: <strong>Fechado</strong> 🔴</p>
      } else {
      return <p>Status: <strong>Aberto</strong> 🟢</p>
    }
}


