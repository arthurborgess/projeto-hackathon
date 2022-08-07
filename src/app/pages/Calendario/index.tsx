import { addDays } from "date-fns"
import { useContext, useEffect, useState } from "react"
import { CalendarWrapper } from "../../components/CalendarWrapper"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { ProductContext } from "../../contexts/Products/ProdcutsProvider"
import { getCalendarDays } from "../../helpers/nextOcurrenceDay"
import { Buttons, Container } from "./styles"

export const Calendar = () => {

  const { user } = useContext(AuthContext)
  const { startDate, setStartDate, setNumberOFViews, numberOfViews, loadProducts, loading } = useContext(ProductContext)

  function handleNextPeriod() {
    setStartDate(addDays(startDate, 1))
  }
  function handlePrevPeriod() {
    setStartDate(addDays(startDate, -1))
  }
  function handleNow() {
    setStartDate(new Date())
  }

  useEffect(() => {
    loadProducts(user, 365 + numberOfViews)
  }, [])

  const dateArray = getCalendarDays(startDate, numberOfViews)

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <Container>
          <CalendarWrapper dateArray={dateArray} />
          <Buttons>
            <button onClick={() => handlePrevPeriod()}>Anterior</button>
            <button id="today-button" onClick={() => handleNow()}>Hoje</button>
            <button onClick={() => handleNextPeriod()}>Próximo</button>
          </Buttons>
        </Container>
      )}
    </>

  )
}