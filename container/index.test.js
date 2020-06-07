import React from "react"
import { render, fireEvent } from "@testing-library/react"
import {ProductContainer} from "./index"
import Header from "../components/Header";

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

describe("Empty result page", () => {
  it("should render empty result when products.length = 0", () => {
    const emptyProductList = []
    const { getByTestId } = render(<ProductContainer productList={emptyProductList}/>)
    expect(getByTestId("empty-page").textContent).toBe("Aradığınız ürünü bulamadık, lütfen başka bir ürün arayın.")
  })
})

describe("Search results", () => {
  it("should render 'Apple iPhone' when search for apple", () => {


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

  it('should add search term to heading', () => {
    const searchTerm = "apple"
    const length = 1
    const setSearchTerm = jest.fn()
    const { getByTestId } = render(<Header length={length} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> )
    expect(getByTestId('heading-text').textContent).toBe( `Cep Telefonu kategorisinde "${searchTerm}" ile eşleşen ${length} ürün bulundu` )
  })
})