import { GlobalStyle } from "./App.styles";
import { CreateProductModal } from "./components/CreateProduct";
import { CreateProdcutProvider } from "./contexts/CreateProductProvider ";

export const App = () => {
  return (
    <>
    <CreateProdcutProvider>
      <GlobalStyle />
      <CreateProductModal/>
    </CreateProdcutProvider>
    </>
  );
}