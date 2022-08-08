import { DashboardWrapper, Box, Title, MiniBox, Wrapper, MiniTitle, Buttons, Button } from './styled'
import { useNavigate } from 'react-router-dom';
import { createColumnsData } from "../../helpers/callendar";
import {useState, useEffect, useContext } from 'react'
import { ProductContext } from "../../contexts/Products/ProdcutsProvider";
import { ListPerDayTypes } from "../../types/Record";
import { getUnixTime } from 'date-fns';
import { Cart } from '@styled-icons/bootstrap/Cart'
import {PlusCircleFill} from "@styled-icons/bootstrap/PlusCircleFill"
import { CreateProductModal } from '../CreateProduct';
import { Loader } from '../Loader';


export function Dashboard(){

  const navigate = useNavigate()
  const { allProducts, loading } = useContext(ProductContext)
  const [ numberOfProducts , setNumberOfProducts ] = useState<number | null>(null)
  const [ todayProducts, setTodayProducts ] = useState<ListPerDayTypes>()
  const [ modalIsOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if(allProducts !== null){
      const listOfProducts = createColumnsData(allProducts, new Date(), 1)
      allProducts.length !== 0 && allProducts && setNumberOfProducts(allProducts.length)
      setTodayProducts(listOfProducts[0])
    }
  }, [allProducts])
  
  function handleGoToCompleteList(){
    navigate("/lista-completa/" +  getUnixTime(new Date).toString())
  }
  
  function handleGoToProductsList(){
    navigate("/")
  } 
  
  function closeModal() {
    setIsOpen(false);
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

            {loading && numberOfProducts === null ? (
                <Loader size={60}/>
            ) : (
              numberOfProducts === null || numberOfProducts === 0 ? 
              (
                <div>nao há produtos cadastrados</div>
              ) : (
                <span>{numberOfProducts?.toString()}</span>
              )
            )}
          </MiniBox>
          <Buttons>
          {loading && numberOfProducts === null? (
                <Loader size={60}/>
            ) : (
            <>
              <Button 
              className="add"
              onClick={() => setIsOpen(true)}
              >
                Cadastrar
                <PlusCircleFill/>
              </Button >
              {numberOfProducts === null ? (
                <Button
                  disabled
                  onClick={() => handleGoToProductsList()}
                >Gerenciar meus produstos 
                </Button>
              ) : (
                <Button
                  onClick={() => handleGoToProductsList()}
                >Gerenciar meus produstos 
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
            {loading? (          
              <Loader size={60}/>
            ) : (
            <span>{todayProducts?.Data?.length}</span>)
            }
          </MiniBox>
          <Buttons>
          {loading? (
                <Loader size={60}/>
            ) : (
              todayProducts === undefined ? (
                <Button
                  disabled
                  onClick={() => handleGoToCompleteList()}
                  >Inicar minhas compras
                  <Cart/>
                  </Button>  
              ) : (
              <Button
                onClick={() => handleGoToCompleteList()}
              >Inicar minhas compras
              <Cart/>
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