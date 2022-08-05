import { useContext } from "react";
import { LoginCadastro } from "../../pages/LoginCadastro";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    
    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <LoginCadastro />;
    }

    return children;
}