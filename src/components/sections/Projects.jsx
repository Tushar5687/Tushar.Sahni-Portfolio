import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const mediMapTechStack = ["React.js", "Node.js", "OpenStreetMap API", "Tailwind CSS"];
  const quickAITechStack = [
    "React.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "OpenAI API",
    "Gemini API",
    "Clerk Auth",
    "Tailwind CSS",
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 - Quick AI */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Quick AI</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4">
                Quick AI aims to provide a single platform where users can leverage multiple AI services — without switching between different tools. It brings together content creation, image design, document evaluation, and a creator community, making the AI experience fast, intelligent, and accessible to everyone.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {quickAITechStack.map((tech, key) => (
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
                  href="https://quick-ai-kappa.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base mt-3 inline-block"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 2 - Medi Map */}
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
                  href="https://tushar5687.github.io/Nearby-Hospital-Locator/"
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
