import { RevealOnScroll } from "../RevealOnScroll";
export const About = ()=>{
    const frontendTech = [

  "JavaScript",
  "React",
  
  "Tailwind CSS",
  "Redux",
  
];
const backendTech = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Firebase",
  "JWT",
  "REST APIs"
];
const programmingLanguages = [
  "JavaScript",
  "Java",
  "Python",
];
const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Computer Networks",
  "Database Management Systems",
  "Object-Oriented Programming",
  "Software Engineering",
];
    return <section id="about" className="min-h-screen flex items-center justify-center py-20 ">
      <RevealOnScroll>
         <div className="max-w-3xl mx-auto-px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
         {" "}
         About Me
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-399 mb-6">
               Turning complex problems into simple and also providing intuitive web experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
               {programmingLanguages.map((tech,key)=>(
                <span key ={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full tect-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,140,2246,0.2)] transition">{tech}</span>
               ))}
                </div>
                </div>
                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  CourseWork
                </h3>
                <div className="flex flex-wrap gap-2">
               {coursework.map((tech,key)=>(
                <span key ={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full tect-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,140,2246,0.2)] transition">{tech}</span>
               ))}
                </div>
                </div> 
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
               {frontendTech.map((tech,key)=>(
                <span key ={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full tect-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,140,2246,0.2)] transition">{tech}</span>
               ))}
                </div>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
               {backendTech.map((tech,key)=>(
                <span key ={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full tect-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,140,2246,0.2)] transition">{tech}</span>
               ))}
                </div>
                </div>
              
                
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1  gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-">
                <li>
                    <strong>Bachelor of Technology in Computer Science and Engineering</strong> - GL Bajaj Institute of Technology and Management (2022-2026) - 8.1 GPA(Current)
                </li>
                 <li>
                    <strong>Class 12</strong> - Holy Public School(2021) - 86.8% 
                </li>
                 <li>
                    <strong>Class 10</strong> - Gayatri Public School(2019) - 93.6%
                </li>
              </ul>
            </div>
          </div>
         </div>
        </RevealOnScroll>
    </section>
}