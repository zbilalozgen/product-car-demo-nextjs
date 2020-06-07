import { render } from "@testing-library/react"
import Index,{getStaticProps} from "./index"
import firebase from 'firebase/app'
import 'firebase/firestore'



describe("Render page", () => {

  it("should render product page", () => {
    const products = [{
      id:1,
      title:"Apple",
      image:"url",
      formattedPrice:"1",
      freeShipping: false,
      sameDayShipping: false
    },
      {
        id:2,
        title:"Apple",
        image:"url",
        formattedPrice:"1",
        freeShipping: false,
        sameDayShipping: false
      }]

    const { getByTestId } = render(<Index result={products}/>)
    expect(getByTestId('heading-text').textContent).toBe("İlginizi Çekebilecek Ürünler")
  })
})

