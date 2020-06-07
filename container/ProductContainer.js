import React, {useState,useEffect} from "react";
//Custom component
import {Header, ProductCard} from "../components";
//Styled component
import {ProductListWrapper} from "./styled-components"
import {EmptyPageContainer, EmptyPageText} from "../components/styled-components";

//Empty result page renderer
const renderEmptyResult = () => (
  <>
    <EmptyPageContainer>
      <EmptyPageText data-testid="empty-page">
        Aradığınız ürünü bulamadık, lütfen başka bir ürün arayın.
      </EmptyPageText>
    </EmptyPageContainer>
  </>
)

const ProductContainer = ({productList}) => {
  const [filteredProductList, setFilteredProductList] = useState(productList)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if(searchTerm.length >= 2) {
      const filteredProducts = productList.filter(product => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase())
      })
      setFilteredProductList(filteredProducts)
    } else {
      setFilteredProductList(productList)
    }
  }, [searchTerm])

  return (
    <ProductListWrapper>
      <Header length={filteredProductList.length} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      {filteredProductList.length === 0 && renderEmptyResult()}
      {
        filteredProductList.map(product => {
          return (
            <ProductCard data={product} key={product.id}/>
          )
        })
      }
    </ProductListWrapper>
  )
}

export default ProductContainer

