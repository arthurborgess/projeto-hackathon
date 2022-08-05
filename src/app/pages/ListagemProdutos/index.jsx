import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from '../../styles/list.module.css'
import globalStyle from '../../styles/global.module.css'
import Product from '../../components/Product'
import { utcDateFormat } from '../../helpers/dateHandler'
import { useApi } from '../../hooks/useApi'

export function Listagem() {

    let [products, setProducts] = useState([])
    let api = useApi()
    let userIdTest = '0277a69cf889d21e9614966db20e858a'

    const loadProducts = () => {

        api.getProducts(userIdTest).then(records => {

            let productArray = []

            for (let record of records) {

                let id = record.id
                let name = record.product.nome
                let creationDate = utcDateFormat(record.product.data_criacao)

                productArray.push({ id, name, creationDate })
            }
            setProducts(productArray)
        })
    }

    useEffect(() => {
        loadProducts()

    }, [products])

    const remove = (recordID) => {
        api.removeProduct(recordID)
        loadProducts()
    }

    return (

        <div className={style.container}>

            <div className={style.top}>
                <h1>Listagem</h1>

                <button
                    className={`${style.registerBtn} ${globalStyle.actionBtn}`}>
                    <Link to='/new'>Cadastrar</Link>
                </button>

            </div>

            <div className={style.content}>
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
            </div>

        </div>
    )

}