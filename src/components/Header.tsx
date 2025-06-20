import React from "react";
import { Button } from "./Button";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <h1 className="text-xl font-bold">DEVLOP.ME</h1>
      <div className="flex items-center gap-10">
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" onClick={() => navigate("/")} className="hover:underline">
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
      </div>
    </header>
  );
};

export default Header;
