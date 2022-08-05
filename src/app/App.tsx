import { GlobalStyle } from "./App.styles";
import { CreateProductModal } from "./components/CreateProduct";
import { CreateProdcutProvider } from "./contexts/Products/CreateProductProvider ";

export const App = () => {
  return (
    <>
    <CreateProdcutProvider>
      <GlobalStyle />
      <CreateProductModal
        isOpen={true}
      />
    </CreateProdcutProvider>
    </>
  );
}