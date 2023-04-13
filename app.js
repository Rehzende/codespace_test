import React, { useState } from "react";
import "./style.css";

const StatusPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className={isDarkMode ? "dark:bg-dark" : ""}>
      <header className="py-8 md:py-12 mb-8">
        <div className="container flex flex-col items-center md:flex-row justify-between">
          <div className="logo mb-8 md:mb-0 text-gray-800 dark:text-gray-100">
            {/* Your logo component */}
          </div>
          <div className="links flex space-x-2 items-center leading-none font-medium">
            <button
              onClick={toggleDarkMode}
              type="button"
              className="inline-flex items-center p-2 border border-gray-300 dark:border-dark rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2"
            >
              {isDarkMode ? (
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              )}
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-dark rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M11 15h2v2h-2v-2m0-8h2v6h-2V7m-9 9h2v2H2v-2m0-8h2v6H2V7M20 2v2h-2V2h2zm0 8h-2v6h2v-6zm0 8h-2v2h2v-2zm0-4h-2v2h2v-2z"
                ></path>
              </svg>
              <span className="hidden md:inline">Toggle Menu</span>
            </button>
          </div>
        </div>
      </header>
      <main className="container mx-auto">
        {/* Your page content */}
      </main>
    </div>
  );
};

export default StatusPage;
