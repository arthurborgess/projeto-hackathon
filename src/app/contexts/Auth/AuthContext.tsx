import { createContext } from "react";
import { User } from "../../types/User";

export type AuthContextType = {
    user: User | null;
    login: (email: string, cpf: string, saveLogin: boolean) => Promise<boolean>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);