import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { utcDateFormat } from "../../helpers/dateHandler";
import { useApi } from "../../hooks/useApi";
import { CustomProductRecord } from "../../types/Record";
import { User } from "../../types/User";
import { Container, Product, Title } from "./styles";

export const ListaCompleta = () => {

    const context = useContext(AuthContext);
    const api = useApi();

    const currentUser: User | null = context.user;
    const [products, setProducts] = useState<CustomProductRecord[]>([]);
    const [isDone, setIsDone] = React.useState<boolean>(false);

    const getList = async (user: User | null) => {

        await api.getProductsByData(user).then(records => {

            let productArray = [];

            for (let record of records) {

                let p: CustomProductRecord = {
                    id: record.id,
                    name: record.product.nome,
                    creationDate: utcDateFormat(record.product.data_criacao)
                }
                productArray.push(p);
            }

            setProducts(productArray);
        })
    }
    useEffect(() => {
        getList(currentUser);
    }, [])

    return (
        <>
            <Header />
            <Container>
                <Title>Lista completa</Title>
                {products.map(product => (
                    <Product key={product.id} done={isDone}>
                        <span>{product.name}</span>
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