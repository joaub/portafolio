import { useState } from "react";
import './App.css'
import Typewriter from 'typewriter-effect';
import persona from './assets/persona.jpg'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

import Skills from "./Skills"
import Proyecto from "./Proyecto"


function App() {
  const [estado, setEstado] = useState("idle"); // "idle", "enviando", "enviado", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado("enviando");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnnodpbb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setEstado("enviado");
        form.reset();
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  };

  return (
    <>
      <div className='container'>
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
            <img src={persona} alt="" className="persona" />
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
            <p className='parrafo'>Tengo 24 años, vivo en Mendoza,Argentina. </p>
            <p className='parrafo'>Estudie en alura latam </p>
            <p className='parrafo'>Mi deseo es seguir expandiendo mi conocimiento y experiencia en este mundo.</p>
          </article>
        </section>


        <section className='contacto' id='contacto'>

          <h2>Contacto</h2>
          <p className="texto-contacto">
            Si querés ponerte en contacto conmigo, completá el siguiente formulario 👇
          </p>

          {estado === "enviado" ? (
            <p className="mensaje-exito">
              ✅ ¡Gracias por tu mensaje! Te responderé pronto.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="formulario-contacto">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Tu correo"
                required
              />
              <textarea
                name="message"
                placeholder="Tu mensaje"
                rows="4"
                required
              ></textarea>

              <button
                type="submit"
                disabled={estado === "enviando"}
                className={estado === "enviando" ? "boton deshabilitado" : "boton"}
              >
                {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
              </button>

              {estado === "error" && (
                <p className="mensaje-error">
                  ❌ Ocurrió un error. Intentá nuevamente.
                </p>
              )}
            </form>
          )}
          <a className='icono' href="https://github.com/joaub" target="_blank"><FaGithub /></a>
          <a className='icono' href="#" target="_blank"><FaLinkedin /></a>
        </section>

        <Skills />
        <Proyecto />
      </div>

    </>
  )
}

export default App
