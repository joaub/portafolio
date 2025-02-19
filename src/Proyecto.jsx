import "./skill.css"
import timerJs from "./assets/Timerjs.png"
import piano2 from "./assets/piano2.png"
import juegoDelAhorcado from "./assets/juego-del-ahorcado.png"
import pokeApi from "./assets/pokeapi.png"

const projects = [
    { name: "Juego del Ahorcado", link: "https://joaub.github.io/ahorcado-juego/", description: "Juego interactivo con JavaScript.", image: juegoDelAhorcado },
    { name: "Timerjs", link: "https://joaub.github.io/timerJS/", description: "temporizador de js", image: timerJs },
    {name:"Piano", link:"https://joaub.github.io/pianoJs/",description:"piano hecho con js",image:piano2},
    {name:pokeApi, link:"https://joaub.github.io/pokeapi/", description:"pokedex con react",image:pokeApi},
  ];

function Proyecto() {
    return(
        <>
        <section className="projects " id="proyectos">
            <h1 className='titulo'>Proyectos</h1>
            <div className="project-grid">
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                <img src={project.image} alt={project.name} className="project-image" />
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreerrer" className="project-button">
                    Ver Proyecto
                </a>
                </div>
            ))}
            </div>
        </section>
      
        </>
    )
}

export default Proyecto