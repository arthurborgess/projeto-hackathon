
// react
import { Route, Routes } from "react-router-dom";

// estilos
import { GlobalStyle } from "./App.styles";

// componentes
import { LoginCadastro } from "./pages/LoginCadastro";
import { Listagem } from './pages/ListagemProdutos'
import { CreateProductModal } from "./components/CreateProduct";
import Calendario from "./pages/Calendario";

// contextos
import { CreateProdcutProvider } from "./contexts/Products/CreateProductProvider ";
import { RequireAuth } from "./contexts/Auth/RequireAuth";

export const App = () => {
  return (
    <>
      <CreateProdcutProvider>
        <GlobalStyle />

        <Routes>
          <Route path="/login" element={<LoginCadastro />} />
          <Route path="/" element={<RequireAuth><Listagem /></RequireAuth>} />
          <Route path="/new" element={<RequireAuth><CreateProductModal isOpen={true} /></RequireAuth>} />
        </Routes>
        
      </CreateProdcutProvider>
    </>
  );
}