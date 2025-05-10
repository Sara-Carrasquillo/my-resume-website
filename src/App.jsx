import React from 'react';
import Navigation from './components/navigation.jsx';
import Index from './components/index.jsx';
import Education from './components/education.jsx';
import Projects from "./components/projects.jsx";
import FloatingBalls from './components/FloatingBalls.jsx';
import './App.css'

function App() {

  return (
    <>
        <FloatingBalls />
        <Navigation />
        <main>
          <section id="index"><Index /> </section>
          <section id="education"><Education /></section>
          <section id="projects"><Projects /></section>
        </main>
        <footer>
            <p>
                &copy; 2025{" "}
                <a href="mailto:Saracarrasquillo007@gmail.com">
                    Saracarrasquillo007@gmail.com
                </a>
                . All rights reserved.
            </p>
        </footer>
    </>
  )
}

export default App
