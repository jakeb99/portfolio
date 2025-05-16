import {Github, Linkedin, FileText} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex flex-col leading-tight">

            <h1 className="text-5xl font-bold">Jake Bunting</h1>

          <span className="text-sm md:text-base text-gray-300 font-medium tracking-wide text-teal-200">Game Programmer</span>
        </div>
        <nav className="flex items-center space-x-4">
          <a
            href="https://github.com/jakeb99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-200 transition"
            aria-label="GitHub"
          >
            <Github size={45} />
          </a>
          <a
            href="https://www.linkedin.com/in/jakebunting/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-200 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={45} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-200 transition"
            aria-label="Resume"
          >
            <FileText size={45} />
          </a>
        </nav>
      </div>
    </header>
    );
};

export default Navbar;