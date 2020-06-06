import {HeaderContainer, HeadingText, SearchInput} from "./styled-components";
import React from "react";

const Header = (props) => {
  return (
    <HeaderContainer>
    <HeadingText>İlginizi Çekebilecek Ürünler</HeadingText>
    <SearchInput placeholder="Ürün ara" value={props.searchTerm} onChange={(e)=>props.setSearchTerm(e.target.value)}/>
  </HeaderContainer>)
}



export default Header