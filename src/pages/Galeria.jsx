import Gallery from "../components/Gallery";
function Galeria() {
  const imagenes = [
    {
      id: 1,
      src: "/assets/foto1.jpg",
      alt: "Frutas frescas"
    },
    {
      id: 2,
      src: "/assets/foto2.jpg",
      alt: "Jugos naturales"
    },
    {
      id: 3,
      src: "/assets/foto3.jpg",
      alt: "Mermeladas caseras"
    },
    {
      id: 4,
      src: "/assets/foto4.jpg",
      alt: "Productos naturales"
    },
    {
      id: 5,
      src: "/assets/foto5.jpg",
      alt: "Frutas cítricas"
    },
    {
      id: 6,
      src: "/assets/foto6.jpg",
      alt: "Productos Citrus Garden"
    },
    {
      id: 7,
      src: "/assets/foto7.jpg",
      alt: "Frutas frescas"
    },
    {
      id: 8,
      src: "/assets/foto8.jpg",
      alt: "Citrus Garden"
    }
  ];
  return (
    <section>
      <h2>Nuestra Galería</h2>
      <p>
        Conoce un poco más de nuestros productos.
      </p>
      <Gallery imagenes={imagenes} />
    </section>
  );
}
export default Galeria;