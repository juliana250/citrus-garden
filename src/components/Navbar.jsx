import { NavLink } from "react-router-dom";
function Navbar() {
  const opciones = [
    { nombre: "Inicio", ruta: "/" },
    { nombre: "Productos", ruta: "/productos" },
    { nombre: "Galería", ruta: "/galeria" },
    { nombre: "Contacto", ruta: "/contacto" }
  ];
  return (
    <header>
      <h2>Citrus Garden</h2>
      <nav>
        <ul>
          {opciones.map((opcion) => (
            <li key={opcion.ruta}>
              <NavLink to={opcion.ruta}>
                {opcion.nombre}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;