import { Link } from "react-router-dom";
import Cards from "../components/Cards";
function Inicio() {
  const productosDestacados = [
    {
      id: 1,
      titulo: "Jugos Naturales",
      imagen: "/assets/producto1.jpg",
      descripcion: "Jugos de frutas frescas y saludables."
    },
    {
      id: 2,
      titulo: "Mermeladas",
      imagen: "/assets/producto2.jpg",
      descripcion: "Mermeladas caseras con frutas naturales."
    }
  ];
  return (
    <>
      <section className="inicio">
        <h1>Citrus Garden</h1>
        <p>
          Productos naturales hechos con frutas frescas.
        </p>
        <Link to="/productos">
          Ver productos
        </Link>
      </section>
      <section>
        <h2>Productos destacados</h2>
        <Cards productos={productosDestacados} />
      </section>
    </>
  );
}
export default Inicio;