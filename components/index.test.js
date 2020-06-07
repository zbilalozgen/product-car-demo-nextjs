import {setShippingInfoText} from "./ProductCard";

describe("Shipping info", () => {
  it("should return correct string when free shipping and same day shipping passed", () => {
    expect(setShippingInfoText(true,true)).toEqual("Ücretsiz - Aynı Gün Kargo")
    expect(setShippingInfoText(false,true)).toEqual("Aynı Gün Kargo")
    expect(setShippingInfoText(true,false)).toEqual("Ücretsiz Kargo")
  } )
})