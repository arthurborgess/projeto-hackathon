import { GlobalStyle } from "./App.styles";
import { CreateProductModal } from "./components/CreateProduct";
import { CreateProdcutProvider } from "./contexts/Products/CreateProductProvider ";
import { LoginCadastro } from "./pages/LoginCadastro";
import { Listagem } from './pages/ListagemProdutos'
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
    <CreateProdcutProvider>
      <GlobalStyle />
      <CreateProductModal/>
    </CreateProdcutProvider>
      <Routes>

        <Route path="/login" element={<LoginCadastro />} />

        <Route path="/new" element={<h1>Aqui ficará o componente de cadastro</h1>} />

        <Route path="/listagem" element={<Listagem />} />

      </Routes>
    </>
  );
}