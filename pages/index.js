import React from "react"
import Head from 'next/head'
//Custom component
import {ProductContainer} from "../container"
//Util
import {firebase} from "../firebase";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`	
  body {	
    font-family: Arial, Helvetica, sans-serif;	
    margin: 0;	
  }	
`

const MainContainer = styled.div`	
  display: flex;	
  justify-content: center;	
  align-items: flex-start;	
  height: 100%;	
  width: 100%;	
  min-height: 100vh;	
  min-width: 380px;	
  background: #EEE;	
  padding: 1rem 1rem 25%;	
`

export default function Index({productList}) {
  return (
    <MainContainer>
      <Head>
        <title>Product List Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle/>
      <ProductContainer productList={productList}/>
    </MainContainer>
  )
}
//Due to firestore mocking problem ignored
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