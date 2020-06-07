import React from "react";
import {HeaderContainer, HeadingText, SearchInput} from "./styled-components";
const Header = ({searchTerm, setSearchTerm}) => {
  return (
    <HeaderContainer>
    <HeadingText data-testid="heading-text">İlginizi Çekebilecek Ürünler</HeadingText>
    <SearchInput data-testid="search-input" placeholder="Ürün ara" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
  </HeaderContainer>)
}

export default Header