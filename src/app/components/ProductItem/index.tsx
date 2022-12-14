
import { Container } from './styles'
import RemoveButton from '../RemoveButton'
import { ProductRecord } from '../../types/Record';
import { utcDateFormat } from '../../helpers/dateHandler';
import { CustomProductObj } from '../../types/Product'

interface ProductItemProps {
    record: ProductRecord,
    onRemove: (productObj: CustomProductObj) => void
}

// define cada produto da lista de produtos
export default function ProductItem({ record, onRemove }: ProductItemProps) {

    const { id, product } = record
    const { day, date, month, year } = utcDateFormat(product.data_criacao)

    return (

        <>
            <Container>

                <td className='product-creation-date'>
                    {`${date} ${month} ${year} (${day})`}
                </td>
            
                <td className='product-name'>{product.nome}</td>
            
                <td>
                    <RemoveButton clickHandler={
                        () => onRemove({id, name: product.nome})
                    }/>
                </td>

            </Container>
    
        </>
    )
}