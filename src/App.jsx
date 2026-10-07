import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="productos" element={<Productos />} />
        <Route path="galeria" element={<Galeria />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}
export default App;