import { GlobalStyle } from "./App.styles";
import { LoginCadastro } from "./pages/LoginCadastro";
import { ProductManager } from "./pages/ProdutcManager";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <h1>Teste</h1>
      <LoginCadastro /> */}
      <ProductManager/>
    </>
  );
}