import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendTech = ["JavaScript", "React", "Tailwind CSS", "Redux"];
  const backendTech = ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase", "JWT", "REST APIs"];
  const programmingLanguages = ["JavaScript", "Java", "Python"];
  const coursework = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Software Engineering",
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 bg-black text-white">
      <RevealOnScroll>
        <div className="max-w-4xl w-full mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="glass rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Turning complex problems into simple and intuitive web experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Programming Languages */}
              <SkillSection title="Programming Languages" items={programmingLanguages} />

              {/* CourseWork */}
              <SkillSection title="CourseWork" items={coursework} />

              {/* Frontend */}
              <SkillSection title="Frontend" items={frontendTech} />

              {/* Backend */}
              <SkillSection title="Backend" items={backendTech} />
            </div>
          </div>

          {/* Education */}
          <div className="grid grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in CSE</strong> – GL Bajaj Institute of Technology and Management (2022–2026) – 8.1 GPA (Current)
                </li>
                <li>
                  <strong>Class 12</strong> – Holy Public School (2021) – 86.8%
                </li>
                <li>
                  <strong>Class 10</strong> – Gayatri Public School (2019) – 93.6%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

// Reusable skill section component
const SkillSection = ({ title, items }) => (
  <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((tech, key) => (
        <span
          key={key}
          className="bg-blue-500/10 text-blue-400 text-sm py-1 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);
