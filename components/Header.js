import React from "react";
//Styled componenets
import {HeaderContainer, HeadingText, SearchInput} from "./styled-components";
//Utils
import PropTypes from "prop-types"

const Header = ({searchTerm, setSearchTerm, length}) => {
  return ( 
    <HeaderContainer>
    <HeadingText data-testid="heading-text">Cep Telefonu kategorisinde {length} ürün bulundu</HeadingText>
    <SearchInput data-testid="search-input" placeholder="Ürün ara" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
  </HeaderContainer>)
}

export default Header


Header.PropsTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  length: PropTypes.number
}