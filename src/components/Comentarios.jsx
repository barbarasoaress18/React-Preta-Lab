import { useState} from 'react'

function Comentarios () {
    const [comentario , setComentario] = useState("seu comentário vai ficar aqui")
    function capturaComentario (e) {
        setComentario(e.target.value)
    }


    return (
        <>
            <input onChange={capturaComentario} placeholder="digite seu comentário"/>
            <p>{comentario}</p>
        </>
 )

}

 export default Comentarios