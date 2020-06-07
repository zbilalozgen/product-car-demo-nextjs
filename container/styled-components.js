import styled from "styled-components";
//Main wrapper for listing cards
export const ProductListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 840px;
  box-sizing: border-box;
  
  @media screen and (max-width: 860px) {
    width: 560px;
  }
  
  @media screen and (max-width: 560px) {
    width: 310px;
  }
`


