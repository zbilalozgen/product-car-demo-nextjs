import React, {useState} from 'react';

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

//Icons
import {FiHeart} from "react-icons/fi";
import {FaHeart} from "react-icons/fa"

//Utils
import { IconContext } from "react-icons/lib";
import PropTypes from 'prop-types'

const renderLikedIcon = () => (
  <IconContext.Provider value={{ color: "#e0245e"}}>
    <FaHeart/>
  </IconContext.Provider>
)

const renderUnlikedIcon = () => (
  <IconContext.Provider value={{ color: "#7b7b7b"}}>
    <FiHeart/>
  </IconContext.Provider>
)

export const setShippingInfoText = (freeShipping, sameDayShipping) => {
  if(!!freeShipping && !!sameDayShipping)  {
    return "Ücretsiz - Aynı Gün Kargo"
  } else if(!!freeShipping && !sameDayShipping) {
    return "Ücretsiz Kargo"
    // Added new type for same day shipping
  } else if(!freeShipping && !!sameDayShipping) {
    return "Aynı Gün Kargo"
  } else {
    return "Ücretli Kargo"
  }
}

const renderShippingInfo = (freeShipping,sameDayShipping) => {
  const shippingInfo = setShippingInfoText(freeShipping,sameDayShipping)
  return (
    <React.Fragment>
      {shippingInfo !== "Ücretli Kargo" && <ShippingIcon/>}
      <ShippingText data-testid="shipping-info" shipping={shippingInfo}>
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
        {isLiked ?  renderLikedIcon() : renderUnlikedIcon() }
      </LikedIconContainer>
      <ProductImage src={image}/>
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>{formattedPrice} TL</ProductPrice>
      <Divider/>
      <ProductShippingInfo>
        {renderShippingInfo(freeShipping,sameDayShipping)}
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