 import { useState} from 'react' // importando o hook que lida com estado 

function Contador() {
        const [contador , setContador] = useState (0) // usando o hook pra criar e atualizar um estado
        function somar() {
           setContador (contador+ 1) // usando a atualizadora do estado quando o clik soma for chamado
        }
       
        function diminuir () {
          setContador (contador -1) // usando a atualizadora do estado quando o clik diminuir for chamado
        }
          

    return (
        <div className="card">
            <button onClick={somar}>
                Soma 1
            </button>
           <h1>{contador}</h1>
          {/* estou usando o estado que conforme interação da pessoa usuária vai sendo alterado e refletido na tela */} 
            <button onClick={diminuir}>
                Diminiu 1
            </button>
       </div>
    )
}
  export default Contador