import NavBar from './components/NavBar'
import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
         path="/"
         element={<Home />} 
        />
        <Route
         path="/contacto"
         element={<Contacto />}
        />
        <Route
         path="*"
         element={<NotFound />}
        />
      </Routes>
    </div>
  );
};

export default App;
