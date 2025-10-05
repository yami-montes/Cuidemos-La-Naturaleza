import React from "react";

function Actions() {
  return (
    <main>
      {/* Sección de Inicio */}
      <section id="inicio">
        <h2>Bienvenido a Naturaleza Viva</h2>
        <p>Un espacio para aprender a cuidar ríos, bosques y animales.</p>
      </section>

      {/* Sección: ¿Por qué cuidar la naturaleza? */}
      <section>
        <h2>¿Por qué cuidar la naturaleza?</h2>
        <p>
          Los bosques y los ríos son el hogar de miles de especies y una fuente vital de agua, oxígeno y vida.
          Cuidar la naturaleza es cuidar nuestro propio futuro. Cada acción cuenta, desde reciclar hasta plantar un árbol.
        </p>
      </section>

      {/* Sección: Acciones */}
      <section>
        <h2>Acciones que podemos tomar</h2>
        <ul>
          <li>Reducir el uso de plásticos.</li>
          <li>Ahorrar agua y energía.</li>
          <li>Reciclar y reutilizar materiales.</li>
          <li>Plantar árboles en tu comunidad.</li>
          <li>Evitar la contaminación de ríos y bosques.</li>
        </ul>
      </section>
    </main>
  );
}

export default Actions;