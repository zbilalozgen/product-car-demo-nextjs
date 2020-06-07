import React from "react";
import styled from "styled-components";

//Card wrapper
export const CardContainer = styled.a`
  display: flex;
  box-sizing: border-box;
  flex: 0 0 250px;
  flex-flow: column nowrap;
  height: auto;
  background: #FFF;
  margin: 15px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(85,85,85,.5);
  position: relative;
  cursor: pointer;
  text-decoration: none;
    
    &:hover {
      border-radius: 0;
      box-shadow: 4px 2px 2px #7b7b7b;
    }
    
    @media screen and (max-width: 560px) {
    flex-basis: 280px;
    } 
`

//Like Icon wrapper
export const LikedIconContainer = styled.div`
  width: 35px;
  height: 35px;
  background: #EEE;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

//Product card components
export const ProductImage = styled.img`
  max-width: 95%;
  padding: 2rem;
`

export const ProductTitle = styled.h3`
  color: #195ea5;
  font-weight: normal;
  font-size: 0.85rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  text-transform: uppercase;
  padding: 0 20px;
`

export const ProductPrice = styled.span`
  color: #333;
  font-size: 1.4rem;
  font-weight: 700;
  font-family: Roboto,Arial, sans-serif;
  padding: 20px;
`

export const Divider = styled.hr`
  border: 1px dashed #eee;
  margin: 5px 0;
  width: 100%;
`

//Shipping section components
export const ProductShippingInfo = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`

export const ShippingSvg = styled.svg`
  width: 18px;
  height: auto;
`

export const ShippingIcon = () => (
  <ShippingSvg viewBox="0 0 462.522 462.522">
    <path
      d="M433 222l-4-1c-14-3-20-5-25-14l-18-36c-5-11-20-20-32-20h-32v-41c0-8-6-14-13-14L90 97c-7 0-13 5-13 13v12H21a21
      21 0 000 42h56v20H40a21 21 0 000 42h37v21H60a21 21 0 000 42h17v21c0 7 6 13 14 13h22a50 50 0 00100 0h94a50 50 0
      0099 0h33c13 0 24-10 24-23v-40c0-32-18-35-30-38zm-76 75a18 18 0 110 37 18 18 0 010-37zm-35-78v-48h24c10 0 21 7
      25 15l16 32 1 1h-66zm-140 97a18 18 0 11-37 0 18 18 0 0137 0z"
      data-original="#000000" data-old_color="#000000" fill="#74AA48"/>
  </ShippingSvg>
  )

export const ShippingText = styled.span`
  color: ${props => props.shipping === "Ücretli Kargo" ? "#AAA" : '#83b932'};;
  font-size: 14px;
  margin-left: ${props => props.shipping === "Ücretli Kargo" ? 0 : '12px'};
`

//Header components
export const HeaderContainer = styled.div`
  display: flex;
  background: #fff;
  width: 100%;
  margin: 15px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(85,85,85,.5);

  @media screen and (max-width: 860px) {
    flex-direction: column;
  }
`

export const HeadingText = styled.h2`
  color: #333;
  font-size: 1rem;
  margin-top: 0;
  padding: 20px 20px 0;
  width: 80%; 
`

export const SearchInput = styled.input`
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1;
  background-color: transparent;
  width: 30%;
  margin: 10px 20px;
  padding: 10px;
  border: 2px solid #eee;
  border-radius: 4px;
  color: #333;
  
  &:focus {
  outline: none;
  }
  
  @media screen and (max-width: 860px) {
  width: 60%;
  }
`

//Empty result page components
export const EmptyPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 560px;
  border-radius: 4px;
  background-image: url("https://cdn.dribbble.com/users/283708/screenshots/7084440/artboard___14_2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  margin: 15px;
`

export const EmptyPageText = styled.h2`
  color: #333;
  padding: 1.5rem;
  font-weight: normal;
`

