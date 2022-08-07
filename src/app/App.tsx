// react
import { Route, Routes } from "react-router-dom";

// estilos
import { GlobalStyle } from "./App.styles";

// componentes
import { LoginCadastro } from "./pages/LoginCadastro";
import { Listagem } from './pages/ListagemProdutos'
import { CreateProductModal } from "./components/CreateProduct";

// contextos
import { CreateProdcutProvider } from "./contexts/Products/CreateProductProvider ";
import { RequireAuth } from "./contexts/Auth/RequireAuth";

import { Calendar } from "./pages/Calendario";
import { ProdcutProvider } from "./contexts/Products/ProdcutsProvider";
import { ListaCompleta } from "./pages/ListaCompleta";
import EditProduct from "./components/EditProduct";


export const App = () => {
  return (
    <CreateProdcutProvider>
      <ProdcutProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<LoginCadastro />} />
          <Route path="/calendar" element={<RequireAuth><Calendar /></RequireAuth>} />
          <Route path="/" element={<RequireAuth><Listagem /></RequireAuth>} />
          <Route path="/new" element={<RequireAuth><CreateProductModal isOpen={true} /></RequireAuth>} />
          <Route path="/lista-completa" element={<RequireAuth><ListaCompleta /></RequireAuth>} />
        </Routes>
      </ProdcutProvider>
    </CreateProdcutProvider>
  );
}