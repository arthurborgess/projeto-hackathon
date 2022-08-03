
import { useEffect, useState } from 'react'
import style from '../../styles/list.module.css'
import Product from '../../components/Product'
import {utcDateFormat} from '../../helpers/dateHandler'

const apiKey = 'keyaVkftbYjaJeJnG'
const url = 'https://api.airtable.com/v0/app9wnjqsxjLcI8yq/Produtos'

export function Listagem() {

    let [products, setProducts] = useState([])

    const loadProducts = () => {

        fetch(url, {headers: { Authorization: `Bearer ${apiKey}` }})
        .then(resp => resp.json())
        .then(data => {

            let productsArray = []

            for(let record of data.records) {
                
                // criando um objeto com os dados que realmente vamos utilizar
                const id = record.id
                const name = record.fields.nome
                const creationDate = utcDateFormat(record.fields.data_criacao);
               
                const product = {id, name, creationDate}

                productsArray.push(product)
            }

            setProducts(productsArray)
        })

    }

    useEffect(() => {
        loadProducts()

    }, [])

    const remove = (id) => {
        console.log(id);
    }

    return (
    
        <div className={style.container}>

            <div className={style.top}>
                <h1>Listagem</h1>
                <button>Cadastrar</button>
            </div>

            <div className={style.content}>
                {
                    products.map((product, index) => {
                        return(
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