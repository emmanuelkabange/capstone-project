import React from "react";

const Footer = () => {
  return (
    <footer className="bg-brandBrown text-brandYellow p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
        {/* Logo Section */}
        <div className="flex items-center justify-center space-x-2">
          <img src="/dishdashlogo.png" alt="Logo" className="h-8" />{" "}
          <span className="font-bold text-lg">DishDash</span>
        </div>

        {/* Copyright Text */}
        <div className="text-md text-center">&copy; Emmanuel Kabange, 2024</div>

        {/* Links Section */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a
            href="www.linkedin.com/in/emmanuel-kabange-15933b2a3"
            className="hover:underline"
          >
            About Me
          </a>
          <a href="mailto:emmanuelwelek@gmail.com" className="hover:underline">
            Contact Me
          </a>
          <a
            href="https://www.themealdb.com/api.php"
            className="hover:underline"
          >
            Visit the MealDB API
          </a>
          <a
            href="https://github.com/emmanuelkabange"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              className="h-6 w-6 hover:text-brandOrange"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.372.5 0 5.872 0 12.5c0 5.25 3.438 9.688 8.207 11.29.6.11.793-.26.793-.578 0-.285-.011-1.235-.017-2.24-3.338.726-4.042-1.603-4.042-1.603-.546-1.384-1.333-1.754-1.333-1.754-1.088-.743.083-.728.083-.728 1.205.084 1.837 1.238 1.837 1.238 1.067 1.829 2.8 1.297 3.487.992.108-.774.418-1.297.761-1.597-2.665-.304-5.467-1.334-5.467-5.935 0-1.311.468-2.385 1.237-3.22-.124-.303-.537-1.527.118-3.176 0 0 1.007-.322 3.301 1.227A11.529 11.529 0 0112 5.837a11.537 11.537 0 013.002.403c2.294-1.549 3.301-1.227 3.301-1.227.657 1.649.243 2.873.12 3.176.77.835 1.237 1.909 1.237 3.22 0 4.607-2.805 5.629-5.475 5.923.431.371.817 1.102.817 2.224 0 1.607-.015 2.898-.015 3.293 0 .322.188.692.797.577C20.563 22.188 24 17.75 24 12.5 24 5.872 18.628.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
