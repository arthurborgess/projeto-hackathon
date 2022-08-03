import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    const login = async (email: string, cpf: string) => {
        const data = await api.login(email, cpf);
        console.log(data);
        if (data.id_usuario) {
            setUser(data.id_usuario);
            return true;
        }
        return false;
    }

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
}