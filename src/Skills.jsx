import {
  HTML5, CSS, Java, JavaScript,
  MySQL, Nodejs, Bootstrap, React, TailwindCSS
} from "./svg/svg";


function Skills() {
  const skills = [
    { name: "HTML", icon: HTML5 },
    { name: "CSS", icon: CSS },
    { name: "Java", icon: Java },
    { name: "JavaScript", icon: JavaScript },
    { name: "MySQL", icon: MySQL },
    { name: "Node JS", icon: Nodejs },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "React", icon: React },
    { name: "Tailwind CSS", icon: TailwindCSS },
  ];

  return (
    <article className="py-10 text-center" id="skills">
      <h1 className="text-4xl font-bold mb-6 ">Skills</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="p-4 rounded-xl shadow-lg border border-blue-700 hover:scale-105 transition-transform duration-300 "
          >
            <p className="text-lg font-semibold mb-2 text-sky-700">{skill.name}</p>

            <div className="mt-4 flex justify-center">
              {skill.icon({ width: 50, height: 50 })}
            </div>

          </div>
        ))}
      </div>
    </article>
  );
}

export default Skills;