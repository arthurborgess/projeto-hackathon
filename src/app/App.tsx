import { GlobalStyle } from "./App.styles";
import { LoginCadastro } from "./pages/LoginCadastro";
import { Listagem } from './pages/ListagemProdutos'
import { CreateProductModal } from "./components/CreateProduct";
import { CreateProdcutProvider } from "./contexts/Products/CreateProductProvider ";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <CreateProdcutProvider>
      <GlobalStyle />
        <Routes>

          <Route path="/login" element={<LoginCadastro />} />

          <Route path="/new" element={<CreateProductModal isOpen={true}/>} />

          <Route path="/listagem" element={<Listagem />} />

        </Routes>
    </CreateProdcutProvider>
  );
}