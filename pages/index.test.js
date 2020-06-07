import { render } from "@testing-library/react"
import Index from "./index"

describe("Render page", () => {

  it("should render product page and check heading text", () => {
    const productList = []
    const { getByTestId } = render(<Index productList={productList}/>)
    expect(getByTestId('heading-text').textContent).toBe("Cep Telefonu kategorisinde 0 ürün bulundu")
  })
})

