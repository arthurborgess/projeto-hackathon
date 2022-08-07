import { format, fromUnixTime } from "date-fns";
import { pt } from "date-fns/locale";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { ProductContext } from "../../contexts/Products/ProdcutsProvider";
import { createColumnsData } from "../../helpers/callendar";
import { useApi } from "../../hooks/useApi";
import { ListPerDayTypes, ProductRecord } from "../../types/Record";
import { User } from "../../types/User";
import { Container, Product, Title } from "./styles";

type ListParam = {
    timestamp: string
}

export const ListaCompleta = () => {

    const params = useParams<ListParam>()
    const context = useContext(AuthContext);
    const { allProducts} = useContext(ProductContext)
    const timestamp = Number(params.timestamp)

    const currentUser: User | null = context.user;
    const [products, setProducts] = useState<ListPerDayTypes>();
    const [isDone, setIsDone] = React.useState<boolean>(false);

    useEffect(() => {
        if(allProducts !== null && timestamp !== undefined){
            const listOfProducts = createColumnsData(allProducts, fromUnixTime(timestamp), 1)
            setProducts(listOfProducts[0])
        }
    }, [])


    return (
        <>
            <Header />
            <Container>
                <Title>Lista completa do dia {format(fromUnixTime(timestamp), "dd MMM yyyy",{locale: pt})}</Title>
                {products?.Data === null ? (
                    <div>nao há compras para essa data</div>
                ) :
                (
                    products?.Data.map(record => (
    
                        <Product key={record.id} done={isDone}>
                            <span>{record.product.nome}</span>
                            <input
                                type="checkbox"
                                onChange={() => setIsDone(current => !current)}
                            />
                        </Product>
                    ))
                )
                }
            </Container>

        </>
    );

}