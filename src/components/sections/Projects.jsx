import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () =>{
    const mediMapTechStack = [
  "React.js",
  "Node.js",
  "OpenStreetMap API",
  "Tailwind CSS"
];
const virtualAssistantTechStack = [
  "JavaScript",
  "HTML",
  "CSS",
  "Web Speech API",
  "Speech Synthesis API"
];

    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
   <RevealOnScroll>
     <div className="max-w-5xl mx-auto px-4">
     <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded xl border border-white/10 hover:-translate-y-1 hover: border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,140,2246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Medi Map</h3>
            <p className="text-gray-400 mb-4">
                MediMap is a web-based platform designed to bridge the gap between patients and nearby healthcare facilities. The platform allows users to locate hospitals, clinics, and diagnostic centers based on location, specialization, and availability in real-time.
            </p>
            <div className="">
                {mediMapTechStack.map((tech,key) =>(
                <span key ={key} className=" mr-1 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full tect-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,140,2246,0.1)] transition-all">{tech}</span>
               ))}
            </div>
            <div className="flex justiy-between items-center">
                <a href="https://github.com/Tushar5687/Nearby-Hospital-Locator" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project  → </a>
            </div>
        </div>
         <div className="p-6 rounded xl border border-white/10 hover:-translate-y-1 hover: border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,140,2246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Task Buddy</h3>
            <p className="text-gray-400 mb-4">
                The Virtual Assistant is a voice-controlled web application designed to simplify everyday tasks using natural language commands. It listens to user input, interprets it, and performs actions such as telling the time, opening websites, searching the web, and more.
            </p>
            <div className="">
                {virtualAssistantTechStack.map((tech,key) =>(
                <span key ={key} className=" mr-1 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full tect-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,140,2246,0.1)] transition-all">{tech}</span>
               ))}
            </div>
            <div className="flex justiy-between items-center">
                <a href="https://github.com/Tushar5687/Virtual-Assistant" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project  → </a>
            </div>
        </div>
     </div>
     </div>
     </RevealOnScroll>
    </section>
};