import { useState , useEffect} from "react";
import Typewriter from 'typewriter-effect';
import persona from './assets/persona.jpg'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import Skills from "./Skills"
import Proyecto from "./Proyecto"

function useDarkMode(defaultValue = false) {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : defaultValue;
  });
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return [darkMode, setDarkMode];
}


function App() {
  const [estado, setEstado] = useState("idle"); // "idle", "enviando", "enviado", "error"
  const [darkMode, setDarkMode] = useDarkMode(false);


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
      <div className={` min-h-screen flex justify-center items-center  ${
        darkMode ? "text-white bg-gray-900" : "bg-gray-300 text-black"
      }`}>
        <div className={` rounded-xl p-5 md:p-8 max-w-[1000px] text-center shadow-[0_4px_10px_rgba(0,0,0,0.2)] w-full m-3 ${
        darkMode ? "text-white bg-gray-800" : "bg-gray-200 text-black"
      }`}>
          {/* NAV */}
          <nav className="my-4 flex justify-center gap-4 flex-wrap ">
            <a
              href="#contacto"
              className="text-lg px-4 py-2 hover:bg-[#3320dd] hover:outline hover:outline-[#f0faff] hover:outline-1 transition-all rounded-md"
            >
              contacto
            </a>
            <a
              href="#skills"
              className=" text-lg px-4 py-2  hover:bg-[#3320dd] hover:outline hover:outline-[#f0faff] hover:outline-1 transition-all rounded-md"
            >
              skills
            </a>
            <a
              href="#proyectos"
              className=" text-lg px-4 py-2  hover:bg-[#3320dd] hover:outline hover:outline-[#f0faff] hover:outline-1 transition-all rounded-md"
            >
              proyectos
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`absolute top-4 right-4 px-3 py-1 rounded-md text-sm font-semibold bg-gray-200 hover:bg-gray-300 transition ${darkMode ? "bg-gray-700 text-white " : "bg-gray-400 text-black "}`}
            >
              {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
            </button>
          </nav>

          {/* ACERCA DE MÍ */}
          <section>
            <article>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Acerca de mí</h1>
              <img
                src={persona}
                alt="Foto de Joaquin"
                className="mx-auto rounded-full w-4/12 md:w-2/5 shadow-lg"
              />
              <h2 className="text-3xl mt-4 font-semibold">
                <Typewriter
                  options={{
                    strings: ["Joaquin Ugarte"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <h2 className="text-2xl mt-2 mb-4 font-light">
                <Typewriter
                  options={{
                    strings: ["Desarrollador Full Stack"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>

              <p className="text-lg md:text-xl">Tengo 24 años, vivo en Mendoza, Argentina.</p>
              <p className="text-lg md:text-xl">Estudié en Alura Latam.</p>
              <p className="text-lg md:text-xl">
                Mi deseo es seguir expandiendo mi conocimiento y experiencia en este mundo.
              </p>
              <p className="text-lg md:text-xl mt-2 italic">
                “Actualmente abierto a oportunidades como Frontend Developer. 
              </p>
              <p className="text-lg md:text-xl mt-2 italic">Me especializo en
                React, Tailwind y CSS.”</p>
            </article>
          </section>

          {/* CONTACTO */}
          <section id="contacto" className="text-center py-8 px-4 mt-10">
            <h2 className="text-3xl font-semibold mb-3">Contacto</h2>
            <p className="text-base md:text-lg mb-4">
              Si querés ponerte en contacto conmigo, completá el siguiente formulario 👇
            </p>

            {estado === "enviado" ? (
              <p className="text-green-400 font-bold mt-4">
                ✅ ¡Gracias por tu mensaje! Te responderé pronto.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 max-w-md mx-auto"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required
                  className="p-2 rounded-md border border-gray-400 "
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu correo"
                  required
                  className="p-2 rounded-md border border-gray-400 "
                />
                <textarea
                  name="message"
                  placeholder="Tu mensaje"
                  rows="4"
                  required
                  className="p-2 rounded-md border border-gray-400 "
                ></textarea>

                <button
                  type="submit"
                  disabled={estado === "enviando"}
                  className={`${estado === "enviando"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-800 cursor-pointer"
                    } text-white py-2 rounded-md font-semibold transition-colors`}
                >
                  {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
                </button>

                {estado === "error" && (
                  <p className="text-red-400 font-bold mt-3">
                    ❌ Ocurrió un error. Intentá nuevamente.
                  </p>
                )}
              </form>
            )}

            {/* ICONOS */}
            <div className="flex justify-center items-center gap-6 mt-6">
              <a
                href="https://github.com/joaub"
                target="_blank"
                className="text-[#11f041] text-5xl hover:scale-110 hover:outline hover:outline-[2px] hover:outline-[#20c74a] transition-all rounded-full p-1"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/joaquin-ugarte/"
                target="_blank"
                className="text-[#11f041] text-5xl hover:scale-110 hover:outline hover:outline-[2px] hover:outline-[#20c74a] transition-all rounded-full p-1"
              >
                <FaLinkedin />
              </a>
            </div>
          </section>

          <Skills />
          <Proyecto />
        </div>
      </div>

    </>
  )
}

export default App
