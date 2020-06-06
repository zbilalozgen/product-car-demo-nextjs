import React from "react"
import styled, {createGlobalStyle} from "styled-components";
import {ProductContainer} from "../container"
import {loadFirebase} from "../firebase";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  min-width: 380px;
  background: #EEE;
  
`

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
`

export default function Index({result}) {

  return (
      <MainContainer>
        <GlobalStyle/>
        <ProductContainer productList={result}/>
      </MainContainer>
  )
}

export async function getServerSideProps() {
  const firebase = await loadFirebase()
  const db = firebase.firestore()

  let result = await new Promise((resolve => {
    db.collection('products')
      .get()
      .then(snapshot => {
        let data = []
        snapshot.forEach(doc => {
          data.push(Object.assign({
            id: doc.id
          }, doc.data()))
          resolve(data)
        })
      })
  }))
  return {
    props: {
      result
    }
  }
}
