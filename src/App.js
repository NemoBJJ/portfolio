import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Release from "./Release"; // Importando o Release

function Portfolio() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo-container">
          <img src="/logo-neemindev.jpeg" alt="NeeminDev Logo" className="logo" />
        </div>
        <h1>NeeminDev</h1>
        <p>Full Stack | RESTful</p>
      </div>
      
      <div className="tech-stack">
        <p> JAVA Spring Boot / SQL / Hibernate </p>
        <p>React / Axios</p>
        <p>AWS (EC2, Load Balancer, SSL)</p>
        <p>GitHub / Netlify (CI/CD, DNS Manager)</p>
      </div>
      
      <div className="apis">
        <h2>APIs</h2>
        <ul>
          <li>
            <a href="https://empl.neemindev.com/" target="_blank" rel="noopener noreferrer">
              Employee Manager
            </a>
          </li>
          <li>
            <a href="https://stq.neemindev.com/" target="_blank" rel="noopener noreferrer">
              Sis-Estoque
            </a>
          </li>
          <li>
            <a href="https://neemindev.com/" target="_blank" rel="noopener noreferrer">
              API Financial
            </a>
          </li>
          <li>
            <a href="https://rh2.neemindev.com/" target="_blank" rel="noopener noreferrer">
              API Recursos Humanos
            </a>
          </li>
          <li>
            <a href="https://apistq.neemindev.com/swagger-ui/index.html" target="_blank" rel="noopener noreferrer">
              Swagger Sistema de Estoque
            </a>
          </li>
          <li>
            <a href="https://neminapifinanceiro.neemindev.com/" target="_blank" rel="noopener noreferrer">
              API Financeira
            </a>
          </li>
        </ul>
      </div>

      {/* Botão que leva para a página do Release */}
      <Link to="/release" className="release-button">
        📜  Release 
      </Link>

      {/* Botões do GitHub, YouTube e LinkedIn */}
      <div className="action-buttons">
        <a href="https://github.com/NemoBJJ" target="_blank" rel="noopener noreferrer" className="github-button">
          GitHub
        </a>
        <a href="https://www.youtube.com/channel/UCeYdXFvWglTu77A5mWvFEZg" target="_blank" rel="noopener noreferrer" className="youtube-button">
          inside the code
        </a>
        <a href="https://www.linkedin.com/in/nemuel-araujo/" target="_blank" rel="noopener noreferrer" className="linkedin-button">
          LinkedIn
        </a>
      </div>
      
      <footer className="footer">
        <p>&copy; Nemuel França De Araújo - DEV/JAVA Spring Boot Full Stack</p>
        <p>engnfaraujo@gmail.com - +55 91 98744 6061</p>
        <p className="subsidiary-skills">Mechanical Engineer / Logistics Specialist</p>
        <div className="language-flags">
          <img src="/flags/brasil-logo.jpg" alt="Brazil" className="flag" />
          <img src="/flags/britain-logo.jpg" alt="UK" className="flag" />
          <img src="/flags/frança-logo-B2.jpg" alt="France B2" className="flag" />
          <img src="/flags/deutch-logo-a1.jpg" alt="Germany A1" className="flag" />
          <img src="/flags/portugal-logo.jpg" alt="Portugal" className="flag" />
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/release" element={<Release />} />
      </Routes>
    </Router>
  );
}

export default App;