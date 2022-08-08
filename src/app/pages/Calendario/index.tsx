import { addDays } from "date-fns"
import { useContext, useEffect } from "react"
import { CalendarWrapper } from "../../components/CalendarWrapper"
import { Dashboard } from "../../components/Dashboard"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { ProductContext } from "../../contexts/Products/ProdcutsProvider"
import { Buttons, Wrapper, Box } from "./styles"
import { NavigateNext } from '@styled-icons/material-outlined/NavigateNext'
import { NavigateBefore } from '@styled-icons/material-outlined/NavigateBefore'
import { CreateProductContext } from "../../contexts/Products/CreateProductProvider "
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader"

export const Calendar = () => {

  const { handleCreateProduct } = useContext(CreateProductContext)
  const { user } = useContext(AuthContext)
  const { startDate, setStartDate, numberOfColumns, setNumberOfColumns, loadProducts, loading } = useContext(ProductContext)

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
    loadProducts(user, 365 + numberOfColumns)
  }, [handleCreateProduct])

  return (
    <>
      <Header />
      <Wrapper>
        <Dashboard />
        <Box>
          <CalendarWrapper />
          <Buttons>
            <button onClick={() => handlePrevPeriod()} className="next-prev"><NavigateBefore /></button>
            <button onClick={() => handleNow()} className="today">Hoje</button>
            <button onClick={() => handleNextPeriod()} className="next-prev"><NavigateNext /></button>
          </Buttons>
        </Box>
      </Wrapper>
    </>
  )
}