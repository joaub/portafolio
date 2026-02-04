import timerJs from "./assets/Timerjs.png";
import cicloSexagenario from "./assets/ciclo-sexagenario.png"; 
import piano2 from "./assets/piano2.png";
import juegoDelAhorcado from "./assets/juego-del-ahorcado.png";
import pokeApi from "./assets/pokeapi.png";


const projects = [
    {name:"ciclo-sexagenario", link:"https://calendario-chino.vercel.app/", description:"Calculadora para saber tu animal y elemento chino",tecnologias:["HTML","Tailwind" ,"React", "JavaScript" ],image: cicloSexagenario},
    { name: "Juego del Ahorcado", link: "https://juego-del-ahorcado-v2.vercel.app/", description: "Famoso Juego del ahorcado con JavaScript.",tecnologias:["HTML","Tailwind", "React", "JavaScript" ] , image: juegoDelAhorcado },
    { name: "TimerJS", link: "https://joaub.github.io/timerJS/", description: "cronómetro hecho en JavaScript.",tecnologias:["HTML","CSS", "JavaScript" ] , image: timerJs },
    { name: "Piano", link: "https://joaub.github.io/pianoJs/", description: "Piano virtual con JavaScript.",tecnologias:["HTML","CSS", "JavaScript" ] , image: piano2 },
    { name: "PokeAPI", link: "https://joaub.github.io/pokeapi/", description: "Pokedex con React.",tecnologias:["HTML","Tailwind", "React", "JavaScript" ] , image: pokeApi },
];


function Proyecto() {
    return (
        <section className="py-10 text-center" id="proyectos">
            <h1 className="text-4xl font-bold  mb-6">Proyectos</h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className=" rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-blue-500">{project.name}</h3>
                            <p className=" mt-2 text-sm">{project.description}</p>
                            <p className=" mt-2 text-sm ">{project.tecnologias.map((tecnologia, index) => (
                                <span key={index} className="border border-blue-500 rounded-lg p-2 inline-block text-green-600">{tecnologia}{index = ''}</span>
                            ))}</p>
                            
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                            >
                                Ver Proyecto
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Proyecto;