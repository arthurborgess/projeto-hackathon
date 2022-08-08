import { format, fromUnixTime, getUnixTime, isToday } from 'date-fns';
import { pt } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import { ListPerDayTypes } from "../../../types/Record";
import { Item } from "../Item";
import { Button, Container, DateField, ListWrapper, ItensWrapper, NoProducts } from './styles';
import { Cart } from '@styled-icons/bootstrap/Cart'
import { ExclamationOctagon } from '@styled-icons/bootstrap/ExclamationOctagon'
import { Loader } from '../../Loader';

interface ColumnProps{
  productsPerDay: ListPerDayTypes; 
}


export function Column({productsPerDay}:ColumnProps) {

  const navigate = useNavigate()

  function handleGoToCompleteList(){
    navigate("/lista-completa/" +  getUnixTime(productsPerDay.date).toString())
  }

  return (
    <Container>
      <DateField>
        {format(productsPerDay.date, "dd MMM yyy", { locale: pt })}
      </DateField>
      <ListWrapper>
      {!productsPerDay? (
          <Loader size={20}/>
      ) :(
        <ItensWrapper>{
        productsPerDay.Data && productsPerDay.Data?.length > 0 ?  (
          
            productsPerDay.Data?.map( (products, index) => (
              (products.product.nome && index < 4 && (
                <Item name={products.product.nome} key={products.id + "ITEM" + index}></Item>
              ))
            ))  
  
        ) : (
          <NoProducts>
            Nao há produtos
            <ExclamationOctagon/>
          </NoProducts>
        )}
        </ItensWrapper>
      )}
      {productsPerDay.Data && productsPerDay.Data.length > 0 && isToday(productsPerDay.date) && (
        <Button className="today" onClick={() => handleGoToCompleteList()}><Cart/></Button>
      )}
      {productsPerDay.Data && productsPerDay.Data.length > 0 && !isToday(productsPerDay.date) &&(
        <Button onClick={() => handleGoToCompleteList()}>Ver mais</Button>
      )}
      </ListWrapper> 
    </Container>
  )
}