import { useState } from "react";
function Contact() {
  const formularioInicial = {
    nombre: "",
    email: "",
    telefono: "",
    motivo: "Consulta",
    cliente: "Persona",
    comentarios: ""
  };
  const [formulario, setFormulario] = useState(formularioInicial);
  function manejarCambio(event) {
    const { name, value } = event.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  }
  function manejarEnvio(event) {
    event.preventDefault();
    alert("Formulario enviado correctamente.");
    console.log(formulario);
  }
  function limpiarFormulario() {
    setFormulario(formularioInicial);
  }
  return (
    <section className="contacto">
      <h2>Formulario de Contacto</h2>
      <form onSubmit={manejarEnvio}>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formulario.nombre}
          onChange={manejarCambio}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formulario.email}
          onChange={manejarCambio}
        />
        <label>Teléfono:</label>
        <input
          type="tel"
          name="telefono"
          value={formulario.telefono}
          onChange={manejarCambio}
        />
        <label>Motivo:</label>
        <select
          name="motivo"
          value={formulario.motivo}
          onChange={manejarCambio}
        >
          <option value="Consulta">Consulta</option>
          <option value="Compra">Compra</option>
          <option value="Información">Información</option>
        </select>
        <label>Tipo de cliente:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="cliente"
              value="Persona"
              checked={formulario.cliente === "Persona"}
              onChange={manejarCambio}
            />
            Persona
          </label>
          <label>
            <input
              type="radio"
              name="cliente"
              value="Empresa"
              checked={formulario.cliente === "Empresa"}
              onChange={manejarCambio}
            />
            Empresa
          </label>
        </div>
        <label>Comentarios:</label>
        <textarea
          name="comentarios"
          value={formulario.comentarios}
          onChange={manejarCambio}
        ></textarea>
        <div className="form-buttons">
          <input type="submit" value="Enviar" />
          <button
            type="button"
            onClick={limpiarFormulario}
          >
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
}
export default Contact;