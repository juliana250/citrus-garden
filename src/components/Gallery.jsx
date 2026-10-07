function Gallery({ imagenes }) {
  return (
    <div className="galeria">
      {imagenes.map((imagen) => (
        <img
          key={imagen.id}
          src={imagen.src}
          alt={imagen.alt}
        />
      ))}
    </div>
  );
}
export default Gallery;