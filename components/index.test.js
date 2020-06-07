import {setShippingInfoText} from "./ProductCard";

describe("Shipping info", () => {
  it("should return 'Ücretsiz - Aynı Gün Kargo' when free shipping and same day shipping correct", () => {
    const shippingInfo = setShippingInfoText(true,true)
    expect(shippingInfo).toEqual("Ücretsiz - Aynı Gün Kargo")
  } )
})