import React, {useState,useEffect} from "react";

//Custom component
import {Header, ProductCard} from "../components";

//Styled component
import {Wrapper} from "./styled-components"
import {EmptyPageContainer, EmptyPageText} from "../components/styled-components";

const ProductContainer = ({productList}) => {
  const [products, setProducts] = useState(productList)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if(searchTerm.length >= 2) {
      const filteredProducts = productList.filter(product => {
        const title = product.title.toLowerCase()
        return title.includes(searchTerm.toLowerCase())
      })
      setProducts(filteredProducts)
    } else {
      setProducts(productList)
    }
  }, [searchTerm])

  return (
    <Wrapper>
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      {products.length === 0 &&
      <EmptyPageContainer>
        <EmptyPageText>
          Aradığınız ürünü bulamadık, lütfen başka bir ürün arayın.
        </EmptyPageText>
      </EmptyPageContainer>}
      {
        products.map(product => {
            return(
              <ProductCard data={product} key={product.id}/>
            )
          })
        }
    </Wrapper>
  );
}

export default ProductContainer