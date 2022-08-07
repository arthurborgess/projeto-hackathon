import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useApi } from "../../hooks/useApi";
import { ProductRecord } from "../../types/Record";
import { User } from "../../types/User";
import { Container, Product, Title } from "./styles";

export const ListaCompleta = () => {

    const context = useContext(AuthContext);
    const api = useApi();

    const currentUser: User | null = context.user;
    const [products, setProducts] = useState<ProductRecord[]>([]);
    const [isDone, setIsDone] = React.useState<boolean>(false);

    const getList = async (user: User | null) => {
        await api.getProductsByData(user).then(setProducts)
    }
    useEffect(() => {
        getList(currentUser);

    }, [])

    return (
        <>
            <Header />
            <Container>
                <Title>Lista completa</Title>
                {
                products.map(record => (

                    <Product key={record.id} done={isDone}>
                        <span>{record.product.nome}</span>
                        <input
                            type="checkbox"
                            onChange={() => setIsDone(current => !current)}
                        />
                    </Product>
                ))}
            </Container>
        </>
    );

}