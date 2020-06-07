import React from "react"
//Custom component
import {ProductContainer} from "../container"
//Styled components
import {MainContainer, GlobalStyle} from "./styled-components";
//Util
import {firebase} from "../firebase";

export default function Index({productList}) {
  return (
    <MainContainer>
      <GlobalStyle/>
      <ProductContainer productList={productList}/>
    </MainContainer>
  )
}
//Ignored firebase test
/* istanbul ignore next */
export async function getStaticProps() {
  const db = firebase.firestore()
  let productList = await new Promise((resolve => {
    db.collection('products')
      .get()
      .then((querySnapshot) => {
      const tempDoc = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      resolve(tempDoc)
    })
  }))
  return {
    props: {productList}
  }
}