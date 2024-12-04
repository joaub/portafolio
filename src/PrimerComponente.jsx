import '../App.css'
import Typewriter from 'typewriter-effect';
import persona from '../assets/persona.jpg' 
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

function PrimerComponente() {
  return (
    <>
    <div >
      <nav className='inicio'>
        
          <a href="#contacto" className='nav'>contacto</a>
          <a href="#skills" className='nav'>skills</a>
          <a href="#proyectos" className='nav'>proyectos</a>
      </nav>
      
    </div>
    <section >         
          <article>
            <h1 className='titulo'>Acerca de mí</h1> 
            <img src={persona} alt="" className="persona"/>
            <h2 className='nombre'>
            <Typewriter
              options={{
                strings: ['Joaquin ugarte'],
                autoStart: true,
                loop: true,
              }}
            />
            </h2>
            <h2 className='nombre'><Typewriter
              options={{
                strings: ['Desarrollador Full Stack'],
                autoStart: true,
                loop: true,
              }}
            /></h2>       
            <p className='parrafo'>Tengo 23 años, vivo en Mendoza,Argentina. </p>
            <p className='parrafo'>Estudie en alura latam y argentina programa</p>
            <p className='parrafo'>Mi deseo es seguir expandiendo mi conocimiento y experiencia en este mundo.</p>
          </article>
      </section>

     
     <section className='contacto' id='contacto'>
      <h2 >Contacto</h2>  
        <h3>Correo</h3>
        <a className='correo' target="_blank">Ugartejoa12@gmail.com</a>
        <a className='icono' href="https://github.com/joaub" target="_blank"><FaGithub/></a>
        <a className='icono' href="#" target="_blank"><FaLinkedin  /></a>
    </section>
    </>
  )
}

export default PrimerComponente