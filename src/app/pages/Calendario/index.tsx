import { addDays } from "date-fns"
import { useContext, useEffect } from "react"
import { CalendarWrapper } from "../../components/CalendarWrapper"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { ProductContext } from "../../contexts/Products/ProdcutsProvider"
import { Buttons, Container } from "./styles"

export const Calendar = () => {

  const { user } = useContext(AuthContext)
  const { startDate, setStartDate, numberOfColumns, setNumberOfColumns, loadProducts, loading} = useContext(ProductContext)
  
  function handleNextPeriod(){
    setStartDate(addDays(startDate, 1))
  }
  function handlePrevPeriod(){
    setStartDate(addDays(startDate, -1))
  }
  function handleNow(){
    setStartDate(new Date())
  }

  useEffect(() => {
    loadProducts(user, 365 + numberOfColumns)
  },[])
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <Container>
          <CalendarWrapper/>
          <Buttons>
            <button onClick={() => handlePrevPeriod()}>Anterior</button>
            <button onClick={() => handleNow()}>Hoje</button>
            <button onClick={() => handleNextPeriod()}>Próximo</button>
            <button onClick={() => setNumberOfColumns(1)}>Diário</button>
            <button onClick={() => setNumberOfColumns(7)}>Semanal</button>
            <button onClick={() =>  setNumberOfColumns(30)}>mensal</button>
            <button onClick={() =>  setNumberOfColumns(365)}>anual</button>
          </Buttons>
        </Container>
      )}
    </>

  )
}