
// react
import { Route, Routes } from "react-router-dom";

// estilos
import { GlobalStyle } from "./App.styles";

// componentes
import { LoginCadastro } from "./pages/LoginCadastro";
import { Listagem } from './pages/ListagemProdutos'
import { CreateProductModal } from "./components/CreateProduct";

import Calendario from "./pages/Calendario";
import EditProduct from "./components/EditProduct"
// contextos
import { CreateProdcutProvider } from "./contexts/Products/CreateProductProvider ";
import { RequireAuth } from "./contexts/Auth/RequireAuth";

import { Calendar } from "./pages/Calendar";
import { ProdcutProvider } from "./contexts/Products/ProdcutsProvider";

import { ListaCompleta } from "./pages/ListaCompleta";


export const App = () => {
  return (
    <>
    <CreateProdcutProvider>

      <ProdcutProvider>
        <GlobalStyle/>
          <Routes>
            <Route path="/login" element={<LoginCadastro />} />
              <Route path="/calendar" element={<RequireAuth><Calendar/></RequireAuth>}/>
              <Route path="/" element={<RequireAuth><Listagem /></RequireAuth>} />
              <Route path="/new" element={<RequireAuth><CreateProductModal isOpen={true} /></RequireAuth>} />
          </Routes>
        </ProdcutProvider>
      </CreateProdcutProvider>

      <GlobalStyle />
      
      <Routes>
        <Route path="/login" element={<LoginCadastro />} />

        <Route path="/" element={<RequireAuth><Listagem /></RequireAuth>} />

        <Route path="/lista-completa" element={<RequireAuth><ListaCompleta /></RequireAuth>} />

        <Route path="/new" element={<RequireAuth><CreateProductModal isOpen/></RequireAuth>} />

        <Route path="/calendar" element={<RequireAuth><Calendario /></RequireAuth>} />

        <Route path="/edit" element={<RequireAuth><EditProduct /></RequireAuth>} />

      </Routes>
    </>
  );
}