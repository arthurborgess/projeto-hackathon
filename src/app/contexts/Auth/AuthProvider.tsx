import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('u');
            if (storageData) {
                const data = await api.validateToken(storageData);
                if (data.id_usuario) {
                    setUser(data.id_usuario);
                }
            }
        }
        validateToken();
    }, [api]);

    const login = async (email: string, cpf: string) => {
        const data = await api.login(email, cpf);

        if (data.id_usuario) {
            setUser(data.id_usuario);
            setToken(data.id_usuario);
            return true;
        }

        return false;
    }

    const setToken = (token: string) => {
        localStorage.setItem('u', token);
    }

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
}