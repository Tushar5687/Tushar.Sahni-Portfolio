import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const Footer = () => {
  return (
    <footer className="bg-black/90 border-t border-white/10 py-6 mt-12 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-400">
          Made with 💙 by{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text font-semibold">
            Tushar Sahni
          </span>
        </p>

        <div className="mt-4 flex justify-center gap-6 text-xl">
          <a
            href="https://github.com/Tushar5687"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-sahni-510685259/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/TusharS13581334"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            <FaXTwitter />
          </a>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Tushar Sahni. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
