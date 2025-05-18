import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <RevealOnScroll>
        <div className="text-center z-10 w-full max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight sm:leading-tight md:leading-snug lg:leading-tight">
            Hi, I'm Tushar Sahni
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-prose mx-auto px-1 sm:px-4">
            I'm a pre-final year B.Tech CSE student, passionate about solving real-world problems through code. With a strong foundation in Data Structures & Algorithms and full stack web development, I'm actively seeking opportunities for 2025 placements to build impactful and scalable tech solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="https://drive.google.com/file/d/1YOLt6q-A_o2CvDNfavRL5Mrvub4loygm/view?usp=sharing"
              className="bg-blue-500 text-white py-2.5 px-5 sm:py-3 sm:px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-sm sm:text-base text-center"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-2.5 px-5 sm:py-3 sm:px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 text-sm sm:text-base text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};