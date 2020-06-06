import React, {useState,useEffect} from "react";

//Custom component
import {ProductCard} from "../components";

//Styled component
import {Wrapper} from "./styled-components"
import {HeaderContainer, HeadingText, Input} from "../components/styled-components";

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
      <HeaderContainer>
        <HeadingText>İlginizi Çekebilecek Ürünler</HeadingText>
        <Input placeholder="Ürün ara" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      </HeaderContainer>
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