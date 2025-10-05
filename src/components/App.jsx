import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", padding: "40px", fontFamily: "Arial" }}>
        <h1 style={{ color: "green" }}>🌿 Cuidemos la Naturaleza 🌿</h1>
        <p>Bienvenido a nuestro proyecto React sobre el cuidado del medio ambiente.</p>
      </div>
    </>
  );
}

export default App;