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
import PropTypes from 'prop-types'


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

export const setShippingInfoText = (freeShipping, sameDayShipping) => {
  let shippingInfo
  if(!!freeShipping && !!sameDayShipping)  {
    shippingInfo = "Ücretsiz - Aynı Gün Kargo"
  } else if(!!freeShipping && !sameDayShipping) {
    shippingInfo = "Ücretsiz Kargo"
    // Added new category for shipping
  } else if(!freeShipping && !!sameDayShipping) {
    shippingInfo = "Aynı Gün Kargo"
  } else {
    shippingInfo = "Ücretli Kargo"
  }
  return shippingInfo
}

const shippingInfo = (freeShipping,sameDayShipping) => {
  const shippingInfo = setShippingInfoText(freeShipping,sameDayShipping)

  return (

    <React.Fragment>
      {shippingInfo !== "Ücretli Kargo" && <ShippingIcon/>}
      <ShippingText data-testid="shipping-info" cargo={shippingInfo}>
        {shippingInfo}
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

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  formattedPrice: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  freeShipping: PropTypes.bool.isRequired,
  sameDayShipping: PropTypes.bool.isRequired
}

ProductCard.defaultProps = {
  title: "Ürün Girişi Yapılmamıştır",
  formattedPrice: "0",
  image: "",
  freeShipping: false,
  sameDayShipping: false
}