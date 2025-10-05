import React from "react";

function Gallery() {
  return (
    <section id="galeria">
      <h2>Galería de Naturaleza</h2>
      <div className="galeria">
        <img src="/Imágenes/Bosques.jpg" alt="Bosque verde" />
        <img src="/Imágenes/flores.jpg" alt="Flores naturales" />
        <img src="/Imágenes/vacas.jpg" alt="Animales en su hábitat" />
      </div>
    </section>
  );
}

export default Gallery;