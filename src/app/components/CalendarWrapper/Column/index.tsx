import { eachDayOfInterval, format, getUnixTime } from "date-fns"
import { pt } from "date-fns/locale"
import { ProductRecord } from "../../../types/Record";


interface ColumnProps{
  date: Date;
  allProducts: ProductRecord[] | null;
}

export function Column({allProducts, date}: ColumnProps) {
  



  return(
    <div>
      {format(date, 'dd MMM yyyy', {locale: pt})}
      <button>teste</button>
    </div>
  )
}