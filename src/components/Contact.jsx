import { useState } from "react";

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && correo && mensaje) {
      setEnviado(true);
      setNombre("");
      setCorreo("");
      setMensaje("");
    } else {
      alert("Por favor completa todos los campos antes de enviar.");
    }
  };

  return (
    <section id="contacto">
      <h2>Contacto</h2>

      {enviado ? (
        <p style={{ color: "green" }}>✅ ¡Mensaje enviado correctamente!</p>
      ) : (
        <form onSubmit={handleSubmit} className="form-contacto">
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
            />
          </label>

          <label>
            Correo:
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="tu@email.com"
            />
          </label>

          <label>
            Mensaje:
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Escribe tu mensaje..."
            />
          </label>

          <button type="submit">Enviar</button>
        </form>
      )}
    </section>
  );
}
