import React from "react"
import { render, fireEvent } from "@testing-library/react"
import {ProductContainer} from "./index"

describe("Empty result page", () => {
  it("should render empty result when products.length = 0", () => {
    const productLists = []
    const { getByTestId } = render(<ProductContainer productList={productLists}/>)
    expect(getByTestId("empty-page").textContent).toBe("Aradığınız ürünü bulamadık, lütfen başka bir ürün arayın.")
  })
})

describe("Search results", () => {
  it("should render 'Apple iPhone' when search for apple", () => {
    const productList = [{
      id:1,
      title:"Apple",
      image:"url",
      formattedPrice:"1",
      freeShipping: false,
      sameDayShipping: false
    },
      {
        id:2,
        title:"Samsung",
        image:"url",
        formattedPrice:"1",
        freeShipping: false,
        sameDayShipping: false
      }]

    const { getByTestId } = render(<ProductContainer productList={productList}/>)
    const input = getByTestId('search-input')
    const search = async () => {
      await fireEvent.change(input, {target: {value: "apple"}})
      expect(productList).toBe({
        id:1,
        title:"Apple",
        image:"url",
        formattedPrice:"1",
        freeShipping: false,
        sameDayShipping: false
      })
      search()
    }
  })
})