import Card from "./Card";
function Cards({ productos }) {
  return (
    <div className="cards">
      {productos.map((producto) => (
        <Card
          key={producto.id}
          titulo={producto.titulo}
          imagen={producto.imagen}
          descripcion={producto.descripcion}
        />
      ))}
    </div>
  );
}
export default Cards;