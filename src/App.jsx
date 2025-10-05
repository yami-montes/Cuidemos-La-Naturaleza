import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function Home() {
  return (
    <main>
      {/* Encabezado con imagen de fondo */}
      <section style={{
        background: 'linear-gradient(rgba(46,139,87,0.7), rgba(46,139,87,0.5)), url(/Imágenes/Bosques.jpg) center/cover',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
        borderRadius: '0 0 30px 30px',
        boxShadow: '0 4px 16px rgba(46,139,87,0.15)'
      }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '10px', textShadow: '2px 2px 8px #256d45' }}>🌿 Cuidemos la Naturaleza</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '600px', margin: 'auto' }}>
          Descubre cómo puedes ayudar a proteger nuestro planeta y ser parte del cambio.
        </p>
      </section>

      {/* ¿Por qué cuidar la naturaleza? */}
      <section style={{ padding: '40px 20px', textAlign: 'center', background: '#e8f5e9' }}>
        <h2 style={{ color: '#2e8b57' }}>¿Por qué cuidar la naturaleza?</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
          <div style={{ maxWidth: '220px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px #c6f7d0', padding: '20px' }}>
            <span style={{ fontSize: '2.5rem' }}>🌱</span>
            <h3>Vida saludable</h3>
            <p>Un ambiente limpio mejora nuestra salud y bienestar.</p>
          </div>
          <div style={{ maxWidth: '220px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px #c6f7d0', padding: '20px' }}>
            <span style={{ fontSize: '2.5rem' }}>🌎</span>
            <h3>Futuro sostenible</h3>
            <p>Protegiendo la naturaleza aseguramos recursos para las próximas generaciones.</p>
          </div>
          <div style={{ maxWidth: '220px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px #c6f7d0', padding: '20px' }}>
            <span style={{ fontSize: '2.5rem' }}>🐝</span>
            <h3>Biodiversidad</h3>
            <p>La diversidad de especies es clave para el equilibrio del planeta.</p>
          </div>
        </div>
      </section>

      {/* Acciones que puedes tomar */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#2e8b57' }}>Acciones que puedes tomar</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
          <div style={{ background: '#a8e6cf', borderRadius: '12px', padding: '20px', maxWidth: '200px' }}>
            <span style={{ fontSize: '2rem' }}>♻️</span>
            <p>Recicla y reduce residuos</p>
          </div>
          <div style={{ background: '#dcedc1', borderRadius: '12px', padding: '20px', maxWidth: '200px' }}>
            <span style={{ fontSize: '2rem' }}>🚲</span>
            <p>Usa transporte sostenible</p>
          </div>
          <div style={{ background: '#ffd3b6', borderRadius: '12px', padding: '20px', maxWidth: '200px' }}>
            <span style={{ fontSize: '2rem' }}>🌳</span>
            <p>Planta árboles</p>
          </div>
          <div style={{ background: '#ffaaa5', borderRadius: '12px', padding: '20px', maxWidth: '200px' }}>
            <span style={{ fontSize: '2rem' }}>💧</span>
            <p>Ahorra agua</p>
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section style={{ padding: '40px 20px', textAlign: 'center', background: '#c6f7d0', borderRadius: '20px', margin: '40px 20px' }}>
        <h2 style={{ color: '#256d45' }}>¡Súmate al cambio!</h2>
        <p>Participa en actividades ecológicas, comparte tus ideas y ayuda a crear conciencia.</p>
        <a href="/contacto" style={{ background: '#2e8b57', color: 'white', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 2px 8px #256d45', transition: 'background 0.3s' }}>Contáctanos</a>
      </section>
    </main>
  );
}

function SobreNaturaleza() {
  return (
    <main style={{ padding: "2rem", maxWidth: "700px", margin: "auto", textAlign: "center" }}>
      <h2>Sobre el Cuidado de la Naturaleza</h2>
      <img src="/Imágenes/Bosques.jpg" alt="Bosque" style={{ width: "100%", maxWidth: "400px", borderRadius: "12px", marginBottom: "1rem" }} />
      <p>
        Cuidar la naturaleza es responsabilidad de todos. Podemos contribuir con acciones simples como reciclar, ahorrar agua, plantar árboles y respetar la fauna y flora local. Cada pequeño gesto suma para proteger nuestro planeta y asegurar un futuro sostenible.
      </p>
      <ul style={{ textAlign: "left", margin: "2rem auto", maxWidth: "400px" }}>
        <li>Reduce, reutiliza y recicla.</li>
        <li>Evita el uso de plásticos de un solo uso.</li>
        <li>Participa en actividades ecológicas.</li>
        <li>Cuida los espacios verdes y naturales.</li>
      </ul>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<SobreNaturaleza />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;