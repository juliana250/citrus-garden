import Cards from "../components/Cards";
function Productos() {
  const productos = [
    {
      id: 1,
      titulo: "Jugos Naturales",
      imagen: "/assets/producto1.jpg",
      descripcion: "Jugos preparados con frutas frescas y naturales."
    },
    {
      id: 2,
      titulo: "Mermeladas Caseras",
      imagen: "/assets/producto2.jpg",
      descripcion: "Mermeladas caseras hechas con frutas naturales."
    },
    {
      id: 3,
      titulo: "Productos Cítricos",
      imagen: "/assets/producto1.jpg",
      descripcion: "Productos elaborados con frutas cítricas."
    }
  ];
  return (
    <section>
      <h2>Nuestros Productos</h2>
      <p>
        Conoce nuestros productos naturales y artesanales.
      </p>
      <Cards productos={productos} />
    </section>
  );
}
export default Productos;