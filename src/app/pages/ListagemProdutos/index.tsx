
// hooks 
import { useContext, useEffect, useState } from 'react'
import { useApi } from '../../hooks/useApi'

// componentes
import { Link } from 'react-router-dom'
import ProductItem from '../../components/ProductItem'
import ConfirmationModal from '../../components/ConfirmationModal'
import EditProductModal from '../../components/EditProduct'

// funções e estilo
import { Container, Top, Content } from './styles'

// tipos
import { ProductRecord } from '../../types/Record'
import { CustomProductObj } from '../../types/Product'

// contexto
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Header } from '../../components/Header'
import { User } from '../../types/User'
import { CreateProductModal } from '../../components/CreateProduct'



export function Listagem() {

    let [products, setProducts] = useState<ProductRecord[]>([])
    let [showConfirmationModal, setConfirmationModal] = useState(false)
    const [ modalIsOpen, setIsOpen] = useState<boolean>(false);
    let [currentProduct, setCurrentProduct] = useState<CustomProductObj>()
    const currentUser = useContext(AuthContext).user
    const api = useApi()

    const loadProducts = (user: User) => {
        api.getProducts(user).then(setProducts)
    }

    useEffect(() => {
        if (currentUser && modalIsOpen) { loadProducts(currentUser) }
        
        
    }, [modalIsOpen])

    // ao clicar no botão de remover do componente ProductItem
    const removeHandler = (productObj: CustomProductObj) => {
        setCurrentProduct(productObj)
        setConfirmationModal(true)
    }

    // caso clique em algum dos botões do modal de confirmação
    const confirmationHandler = (confirmation: boolean) => {

        if (confirmation && currentProduct && currentUser) {
            api.removeProduct(currentProduct.id)
                .then(resp => loadProducts(currentUser))
        }
        setConfirmationModal(false)
    }

    return (
        <>
            <Header />

            <Container>

                <Top>
                    <h3>Lista de Produtos</h3>

                    <button onClick={() => setIsOpen(true)} className='registerBtn actionBtn'>
                     Cadastrar
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
                        <Content>

                            <thead>
                                <tr>
                                    <th>Data de Criação</th>
                                    <th>Nome do Produto</th>
                                    <th>Ações</th>
                                </tr>


                            </thead>

                            <tbody>
                                {
                                    products.map((record, index) => {
                                        return (
                                            <ProductItem
                                                key={index}
                                                record={record}
                                                onRemove={removeHandler}
                                            />)
                                    })
                                }
                            </tbody>

                        </Content>
                    </>
                }
                {
                    showConfirmationModal &&
                    <ConfirmationModal
                        show
                        title='Confirmar'
                        msg={`Deseja excluir o item ${currentProduct?.name}?`}
                        onConfirmation={confirmationHandler}
                    />
                }
                 <CreateProductModal
                    isOpen={modalIsOpen}
                    setModalOpen={setIsOpen}
                    />
            </Container>

        </>
    )

}
