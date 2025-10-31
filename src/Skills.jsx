function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Java", level: 50 },
    { name: "JavaScript", level: 70 },
    { name: "MySQL", level: 45 },
    { name: "Node JS", level: 35 },
    { name: "Bootstrap", level: 40 },
    { name: "React", level: 45 },
    { name: "Tailwind", level: 60 },
  ];

  return (
    <article className="py-10 text-center" id="skills">
      <h1 className="text-4xl font-bold mb-6 ">Skills</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <p className="text-lg font-semibold mb-2 text-sky-700">{skill.name}</p>

            <div className="w-full bg-gray-700 rounded-full h-4 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <p className="text-sm  mt-2">{skill.level}%</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Skills;