
// hooks 
import { useContext, useEffect, useState } from 'react'
import { useApi } from '../../hooks/useApi'

// componentes
import { Link } from 'react-router-dom'
import Product from '../../components/Product'

// funções e estilo
import { utcDateFormat } from '../../helpers/dateHandler'
import { Container, Top, Content } from './styles'

// tipos
import { CustomProductRecord } from '../../types/Record'

// contexto
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Header } from '../../components/Header'

export function Listagem() {

    let [products, setProducts] = useState<CustomProductRecord[]>([])
    const currentUser = useContext(AuthContext).user
    const api = useApi()

    const loadProducts = () => {

        if (currentUser) {

            api.getProducts(currentUser).then(records => {

                let productsArray = []

                for (let record of records) {

                    let p: CustomProductRecord = {
                        id: record.id,
                        name: record.product.nome,
                        creationDate: utcDateFormat(record.product.data_criacao)
                    }
                    productsArray.push(p)
                }

                setProducts(productsArray)
            })
        }
    }

    useEffect(() => {
        loadProducts()

    }, [currentUser])

    const remove = (productRecordID: string) => {
        api.removeProduct(productRecordID).then(loadProducts)   
    }

    return (
        <>
            <Header />
            <Container>
                <Top>
                    <h1>Listagem</h1>

                    <button className='registerBtn actionBtn'>
                        <Link to='/new'>Cadastrar</Link>
                    </button>
                </Top>

                <Content>
                    {
                        products.map((product, index) => {
                            return (
                                <Product
                                    key={index}
                                    id={product.id}
                                    name={product.name}
                                    dateObj={product.creationDate}
                                    onRemove={remove}
                                />
                            )
                        })
                    }
                </Content>
            </Container>
        </>
    )

}