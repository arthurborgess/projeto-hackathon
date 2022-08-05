import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {

            const localStorageData = localStorage.getItem('u');
            const sessionStorageData = sessionStorage.getItem('u');

            if (localStorageData) {
                const data = await api.validateToken(localStorageData);

                if (data.id_usuario) {
                    setUser(data.id_usuario);
                }
            }
            if (sessionStorageData) {
                const data = await api.validateToken(sessionStorageData);
                if (data.id_usuario) {
                    setUser(data.id_usuario);
                }
            }
        }
        validateToken();
    }, [api]);

    const login = async (email: string, cpf: string, saveLogin: boolean) => {
        const data = await api.login(email, cpf);

        if (data.id_usuario) {
            setUser(data.id_usuario);
            setToken(data.id_usuario, saveLogin);
            return true;
        }

        return false;
    }

    const setToken = (token: string, saveLogin: boolean) => {
        if (saveLogin === true) {
            localStorage.setItem('u', token);
        } else {
            sessionStorage.setItem('u', token);
        }
    }

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
}