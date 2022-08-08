import { DashboardWrapper, Box, Title, MiniBox, Wrapper, MiniTitle, Buttons, Button } from './styled'
import { useNavigate } from 'react-router-dom';
import { createColumnsData } from "../../helpers/callendar";
import { useState, useEffect, useContext } from 'react'
import { ProductContext } from "../../contexts/Products/ProdcutsProvider";
import { ListPerDayTypes } from "../../types/Record";
import { getUnixTime } from 'date-fns';
import { Cart } from '@styled-icons/bootstrap/Cart'
import { PlusCircleFill } from "@styled-icons/bootstrap/PlusCircleFill"
import { CreateProductModal } from '../CreateProduct';
import { Loader } from '../Loader';
import { NoProducts } from '../NoProducts';


export function Dashboard() {

  const navigate = useNavigate()
  const { allProducts, loading } = useContext(ProductContext)
  const [numberOfProducts, setNumberOfProducts] = useState<number | null>(null)
  const [todayProducts, setTodayProducts] = useState<ListPerDayTypes>()
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (allProducts !== null) {
      const listOfProducts = createColumnsData(allProducts, new Date(), 1)
      allProducts && setNumberOfProducts(allProducts.length)
      console.log(listOfProducts[0])
      setTodayProducts(listOfProducts[0])
    }
  }, [allProducts])

  function handleGoToCompleteList() {
    navigate("/lista-completa/" + getUnixTime(new Date).toString())
  }

  function handleGoToProductsList() {
    navigate("/lista")
  }

  return (
    <>
      <DashboardWrapper>
        <Box>
          <Title>
            Produtos
          </Title>
          <Wrapper>
            <MiniBox>
              <MiniTitle>
                Produtos
              </MiniTitle>

              {loading ? (
                <Loader size={60} />
              ) : (
                numberOfProducts === null || numberOfProducts === 0 ?
                  (
                    <NoProducts msg="Nao há produtos cadastrados" />
                  ) : (
                    <span>{numberOfProducts?.toString()}</span>
                  )
              )}
            </MiniBox>
            <Buttons>
              {loading && numberOfProducts === null ? (
                <Loader size={60} />
              ) : (
                <>
                  <Button
                    className="add"
                    onClick={() => setIsOpen(true)}
                  >
                    Cadastrar
                    <PlusCircleFill />
                  </Button >
                  {numberOfProducts === 0 ? (
                    <Button
                      disabled
                      onClick={() => handleGoToProductsList()}
                    >Gerenciar meus produtos
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleGoToProductsList()}
                    >Gerenciar meus produtos
                    </Button>
                  )}
                </>
              )}
            </Buttons>
          </Wrapper>
        </Box>
        <Box>
          <Title>
            Compras de hoje
          </Title>
          <Wrapper>
            <MiniBox>
              <MiniTitle>
                Produtos para hoje
              </MiniTitle>
              {loading ? (
                <Loader size={60} />
              ) : (
                <span>{todayProducts?.Data?.length}</span>)
              }
            </MiniBox>
            <Buttons>
              {loading ? (
                <Loader size={60} />
              ) : (
                todayProducts?.Data?.length === 0 ? (
                  <Button
                    disabled
                    onClick={() => handleGoToCompleteList()}
                  >Iniciar minhas compras
                    <Cart />
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleGoToCompleteList()}
                  >Iniciar minhas compras
                    <Cart />
                  </Button>
                )
              )}
            </Buttons>
          </Wrapper>
        </Box>
        <CreateProductModal
          isOpen={modalIsOpen}
          setModalOpen={setIsOpen}
        />
      </DashboardWrapper>
    </>


  )
}