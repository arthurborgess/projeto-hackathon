import { format, fromUnixTime, getUnixTime } from "date-fns";
import { pt } from "date-fns/locale";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { ProductContext } from "../../contexts/Products/ProdcutsProvider";
import { createColumnsData } from "../../helpers/callendar";
import { useApi } from "../../hooks/useApi";
import { BoughtProduct } from "../../types/Product";
import { ListPerDayTypes, ProductRecord } from "../../types/Record";
import { User } from "../../types/User";
import { Container, Product, Title } from "./styles";

type ListParam = {
    timestamp: string
}


export const ListaCompleta = () => {

    const params = useParams<ListParam>();
    const context = useContext(AuthContext);
    const { allProducts } = useContext(ProductContext);
    const timestamp = Number(params.timestamp);

    const currentUser: User | null = context.user;
    const [products, setProducts] = useState<ListPerDayTypes>();
    const [boughtProducts, setBoughtProducts] = useState<BoughtProduct[]>();

    const api = useApi();

    useEffect(() => {
        if (allProducts !== null && timestamp !== undefined) {
            const listOfProducts = createColumnsData(allProducts, fromUnixTime(timestamp), 1)
            setProducts(listOfProducts[0])
        }
    }, []);

    useEffect(() => {
        getBoughtProducts(currentUser);
    }, [boughtProducts]);

    const getBoughtProducts = async (currentUser: User | null) => {
        const data = await api.getBoughtProducts(currentUser);
        setBoughtProducts(data);
    }

    const setBought = async (record: ProductRecord, user: User | null) => {
        api.boughtProduct(record, user);
    }

    const isDone = (user: User | null, product: string, date: number) => {
        const currentProduct = user + '-' + product + '-' + date;
        for (let i in boughtProducts) {
            if (boughtProducts[i as any].product.id.includes(currentProduct)) {
                return true;
            }
        }
        return false;
    }

    return (
        <>
            <Header />
            <Container>
                <Title>Lista completa do dia {format(fromUnixTime(timestamp), "dd MMM yyyy", { locale: pt })}</Title>
                {products?.Data === null ? (
                    <div>nao há compras para essa data</div>
                ) :
                    (
                        products?.Data.map(record => (
                            <Product key={record.id} done={isDone(currentUser, record.product.nome, getUnixTime(new Date()))}>
                                <span>{record.product.nome}</span>
                                {!isDone(currentUser, record.product.nome, getUnixTime(new Date())) &&
                                    <input
                                        id="isBought"
                                        type="checkbox"
                                        onChange={() => setBought(record, currentUser)}
                                    />
                                }
                            </Product>
                        ))
                    )
                }
            </Container>
        </>
    );

}