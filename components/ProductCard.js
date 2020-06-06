import React, {useState, useEffect} from 'react';
import { IconContext } from "react-icons/lib";
import {loadFirebase} from "../firebase";

//Styled component
import {
  CardContainer,
  ProductTitle,
  ProductImage,
  ProductPrice,
  Divider,
  ShippingIcon,
  ProductShippingInfo,
  ShippingText,
  LikedIconContainer
} from "./styled-components";

import {FiHeart} from "react-icons/fi";
import {FaHeart} from "react-icons/fa"

const likedIcon = () => (
  <IconContext.Provider value={{ color: "#e0245e"}}>
    <FaHeart/>
  </IconContext.Provider>
)

const unlikedIcon = () => (
  <IconContext.Provider value={{ color: "#7b7b7b"}}>
    <FiHeart/>
  </IconContext.Provider>
)

const shippingInfo = (freeShipping, sameDayShipping) => {
  let cargoInfo
  if(!!freeShipping && !!sameDayShipping)  {
    cargoInfo = "Ücretsiz - Aynı Gün Kargo"
  } else if(!!freeShipping && !sameDayShipping) {
    cargoInfo = "Ücretsiz Kargo"
    // Added new category for shipping
  } else if(!freeShipping && !!sameDayShipping) {
    cargoInfo = "Aynı Gün Kargo"
  } else {
    cargoInfo = "Ücretli Kargo"
  }

  return (

    <React.Fragment>
      {cargoInfo !== "Ücretli Kargo" && <ShippingIcon/>}
      <ShippingText cargo={cargoInfo}>
        {cargoInfo}
      </ShippingText>
    </React.Fragment>
  )


}

const ProductCard = ({data}) => {
  const [productList] = useState((data))
  const [isLiked, setIsLiked] = useState(false)
  const {title, image, formattedPrice, freeShipping, sameDayShipping} = productList


  const handleLikeClick = (e) => {
    e.preventDefault()
    setIsLiked(!isLiked)
  }


  return (
    <CardContainer href="https://www.gittigidiyor.com" target="_blank">
      <LikedIconContainer onClick={(e) => handleLikeClick(e)}>
        {isLiked ?  likedIcon() : unlikedIcon() }
      </LikedIconContainer>
      <ProductImage src={image}/>
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>{formattedPrice} TL</ProductPrice>
      <Divider/>
      <ProductShippingInfo>
        {shippingInfo(freeShipping,sameDayShipping)}
      </ProductShippingInfo>
    </CardContainer>
  )
};

export default ProductCard;