import React from "react";

function Gallery() {
  return (
    <section id="galeria">
      <h2>Galería de Naturaleza</h2>
      <div className="galeria">
        <img src="/Cuidemos-La-Naturaleza/imagenes/bosques.jpg" alt="Bosques" />
        <img src="/imagenes/flores.jpg" alt="Flores naturales" />
        <img src="/imagenes/vacas.jpg" alt="Animales en su hábitat" />
      </div>
    </section>
  );
}

export default Gallery;