import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">PortfolioGen</h1>
          <nav>
          <Link
  to="/editor"
  className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg shadow hover:bg-indigo-700"
>
  Get Started
</Link>

          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <div className="text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Build Your Stunning Portfolio in Minutes
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Choose from beautiful templates, customize easily, and deploy with
            a single click to Vercel.
          </p>
          <Link
            to="/editor"
            className="bg-white text-indigo-600 py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-indigo-50"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-8">
            Why Choose PortfolioGen?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h4 className="text-xl font-bold mb-2">Stunning Templates</h4>
              <p className="text-gray-600">
                Choose from professionally designed templates tailored for
                developers, designers, and creatives.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h4 className="text-xl font-bold mb-2">Easy Customization</h4>
              <p className="text-gray-600">
                Personalize your portfolio with an intuitive editor – no coding
                skills required.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h4 className="text-xl font-bold mb-2">One-Click Deployment</h4>
              <p className="text-gray-600">
                Deploy your portfolio to Vercel with a single click. No hassle,
                just results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} PortfolioGen. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
