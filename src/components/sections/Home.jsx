import { RevealOnScroll } from "../RevealOnScroll"
export const Home = () =>{
    return(
    <section id="home" className="min-h-screen flex items-center justify-center relative">
       <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent  leading-right">
                Hi, I'm Tushar Sahni
            </h1>
             <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I'm a pre final year B.Tech CSE student, passionate about solving real-world problems through code. With a strong foundation in Data Structures & Algorithms and full stack web development, I'm actively seeking opportunities for 2025 placements to build impactful and scalable tech solutions.
             </p>
             <div className="flex justify-center space-x-4">
              <a href="https://drive.google.com/file/d/1YOLt6q-A_o2CvDNfavRL5Mrvub4loygm/view?usp=sharing " className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Resume</a>
                  <a href="#contact " className=" border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">Contact Me</a>
             </div>
        </div>
    </RevealOnScroll>
    </section>
    ) 
}