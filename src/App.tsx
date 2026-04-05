import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="oc-shell">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(255,92,92,0.17),transparent_38%),radial-gradient(circle_at_82%_24%,rgba(20,184,166,0.15),transparent_34%),radial-gradient(circle_at_50%_80%,rgba(104,124,255,0.12),transparent_42%)]" />
          <div className="pointer-events-none fixed inset-0 -z-10 opacity-50 bg-[radial-gradient(circle,rgba(241,245,249,0.85)_1px,transparent_1.2px)] [background-size:42px_42px]" />

          <Navbar />
          <main className="pt-20 space-y-14 pb-12">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
