import { format, getUnixTime } from 'date-fns';
import { pt } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import { ListPerDayTypes } from "../../../types/Record";
import { Item } from "../Item";
import { Container, DateField } from './styles';



interface ColumnProps{
  productsPerDay: ListPerDayTypes; 
}


export function Column({productsPerDay}:ColumnProps) {

  const navigate = useNavigate()

  function handleGoToCompleteList(){
    navigate("/lista-completa/" +  getUnixTime(productsPerDay.date).toString())
  }

  return (
    <>
      {!productsPerDay ? (
        <div>loading</div>
      ) : (
        <Container>
          <DateField>
            {format(productsPerDay.date, "dd MMM yyy", { locale: pt })}
          </DateField>
          {productsPerDay ? (
            productsPerDay.Data?.map(date => (
              <Item name={date.product.nome} />
            ))
          ) : (
            <div>nao existe</div>
          )}
          <button onClick={() => handleGoToCompleteList()}>Ver listagem completa</button>
        </Container> 
      )}
    </>
  )
}