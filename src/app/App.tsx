import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./App.styles";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { LoginCadastro } from "./pages/LoginCadastro";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginCadastro />} />
        <Route path="/new" element={<RequireAuth><h1>Aqui ficará o componente de cadastro</h1></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><h1>Aqui ficará o componente de listagem</h1></RequireAuth>} />
      </Routes>
    </>

  );
}