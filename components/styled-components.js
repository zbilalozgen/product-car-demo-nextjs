import styled from "styled-components";
import React from "react";

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

export const LikedIconContainer = styled.div`
  width: 30px;
  height: 30px;
  background: #EEE;
  border-radius: 50%;
  position: absolute;
  top: 1rem;
  right: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ProductImage = styled.img`
  max-width: 95%;
  padding: 1.5rem;
`

export const ProductTitle = styled.h3`
  color: #195ea5;
  font-weight: normal;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  height: 12px;
  text-overflow: ellipsis;
  text-transform: uppercase;
  padding: 20px;
`

export const ProductPrice = styled.span`
  color: #333;
  font-size: 20px;
  font-weight: 700;
  font-family: Roboto,Arial, sans-serif;
  padding: 20px;
`

export const Divider = styled.hr`
  border: 1px dashed #eee;
  margin: 5px 0;
  width: 100%;
`


export const ProductShippingInfo = styled.div`
  padding: 20px;
  width: 100%;
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
      d="M432.958 222.262c-1.452-.305-2.823-.592-4.042-.909-13.821-3.594-20.129-5.564-24.793-14.569l-17.667-35.768c-5.678-10.961-20.339-19.879-32.682-19.879h-31.453v-41.303c0-7.416-6.034-13.45-13.452-13.45l-219.07.22c-7.218 0-12.661 5.736-12.661 13.343v12.208h-56.12C9.429 122.156 0 131.584 0 143.174s9.429 21.018 21.018 21.018h56.119v20.145H40.394c-11.589 0-21.018 9.429-21.018 21.018s9.429 21.018 21.018 21.018h36.743v20.145H59.77c-11.589 0-21.018 9.429-21.018 21.018s9.429 21.018 21.018 21.018h17.367v21.07c0 7.416 6.034 13.45 13.45 13.45h22.788c3.549 24.323 24.542 43.064 49.837 43.064 25.297 0 46.291-18.741 49.841-43.064h92.224c.479 0 .97-.032 1.46-.064 3.522 24.354 24.528 43.128 49.845 43.128 25.297 0 46.291-18.741 49.841-43.064h32.732c12.885 0 23.368-10.482 23.368-23.366V260.06c-.001-31.595-17.793-35.328-29.565-37.798zm-76.376 75.198c10.1 0 18.317 8.214 18.317 18.311s-8.217 18.311-18.317 18.311c-10.096 0-18.31-8.214-18.31-18.311s8.214-18.311 18.31-18.311zm-34.261-78.046v-48.77h24.036c9.238 0 20.634 6.932 24.864 15.094l15.721 31.829a29.84 29.84 0 001.038 1.846h-65.659zM181.529 315.77c0 10.096-8.217 18.311-18.317 18.311-10.096 0-18.309-8.214-18.309-18.311s8.213-18.311 18.309-18.311c10.1.001 18.317 8.215 18.317 18.311z"
      data-original="#000000" className="active-path" data-old_color="#000000" fill="#74AA48"/>
  </ShippingSvg>
  )

export const ShippingText = styled.span`
  color: ${props => props.cargo === "Ücretli Kargo" ? "#AAA" : '#83b932'};;
  font-size: 14px;
  margin-left: ${props => props.cargo === "Ücretli Kargo" ? 0 : '12px'};
`

//Header components
export const HeaderContainer = styled.div`
  background: #fff;
  width: 100%;
  margin: 15px 15px;
  border-radius: 4px;
  display:flex;
  
  @media screen and (max-width: 560px) {
    flex-direction: column;
  }

`

export const HeadingText = styled.h2`
  color: #333;
  font-size: 1rem;
  font-weight: normal;
  margin-top: 0;
  padding-top: 1.5rem;
  padding-left: 20px;
  width: 100%; 
`

export const SearchInput = styled.input`
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 30%;
  margin: 10px 20px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  color: #333;
  
  @media screen and (max-width: 560px) {
  width: 80%;
  }
`

export const EmptyPageContainer = styled.div`
  width: 100%;
  height: 560px;
  border-radius: 4px;
  display: flex;
  background-image: url("https://cdn.dribbble.com/users/283708/screenshots/7084440/artboard___14_2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  justify-content: center;
  align-items: flex-start;
  margin: 15px;
`


export const EmptyPageText = styled.h2`
  color: #333;
  padding: 1.5rem;
  font-weight: normal;
`

