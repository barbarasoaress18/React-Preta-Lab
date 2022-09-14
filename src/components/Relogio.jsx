import { useState } from 'react'


    function Relogio() {
     let time = new Date().toLocaleTimeString()
     const [horario , setHorario] = useState(time)

        function updateTime() {
           time = new Date().toLocalTimeString()
            setHorario(time)
        } 

        setInterval(updateTime, 1000)

        return (
        <h1>{horario}</h1>
    )
}

 export default Relogio 