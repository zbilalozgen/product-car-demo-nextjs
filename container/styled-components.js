import styled from "styled-components";
//Main wrapper for listing cards
export const Wrapper = styled.div`
  display: flex;
  flex-flow:row wrap;
  width: 840px;
  margin: 0 auto;
  box-sizing: border-box;
  
  @media screen and (max-width: 840px) {
    width: 560px;
  }
  
  @media screen and (max-width: 560px) {
    width: 300px;
  }
`


