import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const mediMapTechStack = ["React.js", "Node.js", "OpenStreetMap API", "Tailwind CSS"];
  const virtualAssistantTechStack = [
    "JavaScript",
    "HTML",
    "CSS",
    "Web Speech API",
    "Speech Synthesis API",
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Medi Map</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4">
                MediMap is a web-based platform designed to bridge the gap between patients and nearby healthcare facilities. It allows users to locate hospitals, clinics, and diagnostic centers based on location, specialization, and real-time availability.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {mediMapTechStack.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Tushar5687/Nearby-Hospital-Locator"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base mt-3 inline-block"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Task Buddy</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4">
                The Virtual Assistant is a voice-controlled web app that simplifies everyday tasks using natural language. It listens to commands and performs actions like telling the time, opening websites, and more.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {virtualAssistantTechStack.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Tushar5687/Virtual-Assistant"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base mt-3 inline-block"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
