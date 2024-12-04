import "./skill.css"
import encriptador from "./assets/encriptador.png"
import timer from "./assets/Timerjs.png"
import piano from "./assets/piano2.png"
import ahorcado from "./assets/juego-del-ahorcado.png"

function Proyecto() {
    return(
        <>
         <h1 id="proyectos">Mis Proyectos</h1>
         
         <ul  className='cards'>
            <li className="card_item">
                <div className='card'>
                    <h3 className="card_titulo">challenge 1 encriptador oracle/alura</h3>
                    <div className='card_content'>
                        
                            <a href="https://github.com/joaub/encriptador-challenge" target="_blank">
                                <button className='boton'><span >Repositório</span></button>
                            </a>
                        

                       
                            <a href="https://joaub.github.io/encriptador-challenge/" target="_blank">
                            <button className='boton'><span>Ver demo</span></button></a>
                       
                         
                    </div> 
                    <img src={encriptador} className='imagen'/>   
                </div>   
            </li>


            <li className="card_item">
                <div className='card'>  
                    <h3 className="card_titulo">temporizador con js</h3>
                    <div className='card_content'>
                        <span >
                            <a href="https://github.com/joaub/timerJS" target="_blank">
                                <button className='boton'><span >Repositório</span></button>
                            </a>
                        </span>

                        <span >
                            <a href="https://joaub.github.io/timerJS/" target="_blank">
                            <button className='boton'><span>Ver demo</span></button></a>
                        </span>
                         
                    </div>  
                    <img src={timer} className='imagen'/>  
                </div>                
            </li>


            <li className="card_item">
                <div className='card'>   
                    <h3 className="card_titulo">piano</h3>
                    <div className='card_content'>            
                        <span >
                            <a href="https://github.com/joaub/pianoJs" target="_blank">
                            <button className='boton'><span >Repositório</span></button>
                            </a>
                        </span>
            
                        <span >
                            <a href="https://joaub.github.io/pianoJs/" target="_blank">
                            <button className='boton'><span>Ver demo</span></button></a>
                        </span>
                    </div>
        
                    <img src={piano} className='imagen'/>
                </div>
            </li>

            <li className='card_item'>
                <div className='card'>              
                    <h3 className="card_titulo">juego del ahorcado</h3>
                    <div className='card_content'>            
                        <span >
                        <a href="https://github.com/joaub/ahorcado-juego" target="_blank">
                        <button className='boton'><span >Repositório</span></button>
                        </a>
                        </span>
                
                        <span >
                        <a href="https://joaub.github.io/ahorcado-juego/" target="_blank">
                            <button className='boton'><span>Ver demo</span></button></a>
                        </span>
                    </div>
                    <img src={ahorcado} className='imagen'/>
        
                </div>
            </li>
         </ul>
        </>
    )
}

export default Proyecto