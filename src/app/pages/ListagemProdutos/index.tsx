
// hooks 
import { useContext, useEffect, useState } from 'react'
import { useApi } from '../../hooks/useApi'

// componentes
import { Link } from 'react-router-dom'
import Product from '../../components/Product'

// funções e estilo
import { utcDateFormat } from '../../helpers/dateHandler'
import { Container, Top, Content, ListHeaders} from './styles'

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

                let productsArray = records.map((record) => {

                    let customProduct: CustomProductRecord = {
                        id: record.id,
                        name: record.product.nome,
                        creationDate: utcDateFormat(record.product.data_criacao)
                    }
                    return customProduct
                })
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
                    <h3>Lista de Produtos</h3>

                    <button className='registerBtn actionBtn'>
                        <Link to='/new'>Cadastrar</Link>
                    </button>

                </Top>
                {
                    products.length === 0 && 
                    <div className='noProductsMsg'>
                        Nenhum produto cadastrado
                    </div>
                }

                {
                    products.length > 0 &&

                <>
                    <ListHeaders>
                    <div className='header-creation-date'>Data de Criação</div>
                    <div className='header-product-name'>Nome do Produto</div>
                    <div className='header-actions'>Ações</div>
                    </ListHeaders>

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
                                />)
                            })
                        }
                    </Content>
                </>
                }
            </Container>
        </>
    )

}