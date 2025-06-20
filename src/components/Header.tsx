import React from "react";
import { Button } from "./Button";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <h1 className="text-xl font-bold">DEVLOP.ME</h1>
      <nav className="hidden md:flex space-x-6 text-sm">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Portfolio
        </a>
        <a href="#" className="hover:underline">
          Blog
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Button variant="outline">Start Project</Button>
      </div>
    </header>
  );
};

export default Header;
