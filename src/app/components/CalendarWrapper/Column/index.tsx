import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { ListPerDayTypes } from "../../../types/Record";
import { Item } from "../Item";
import { Container, DateField } from './styles';



interface ColumnProps{
  productsPerDay: ListPerDayTypes; 
}


export function Column({productsPerDay}:ColumnProps) {
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
        </Container>
      )}
    </>
  )
}