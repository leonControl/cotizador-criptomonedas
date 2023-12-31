import React, { useState, useEffect } from "react"
import styled from '@emotion/styled'

import CriptoImage from './img/imagen-criptos.png'
import Form from './components/Form'
import Result from "./components/Result"
import Spinner from "./components/Spinner"

const Container = styled.div`
  max-width: 900px;
  margin : 0 auto;
  width : 90%;
  @media (min-width: 992px) {
    display : grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Heading = styled.h1`
  font-family : 'Lato' , sans-serif;
  color : #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 5px;
  font-size: 34px;
`

const Developer = styled.h3`
  font-family : 'Lato' , sans-serif;
  color : #FFF;
  text-align: center;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 50px;
  font-size: 18px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto auto;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

function App() {

  const [coins, setCoins] = useState({})
  const [result, setResult] = useState({})
  
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    if(Object.keys(coins).length > 0) {
      const quoteCrypto = async () => {

        setLoading(true)
        setResult({})

        const {coin, cryptoCoin} = coins
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`

        const answer = await fetch(url)
        const result = await answer.json()

        setResult(result.DISPLAY[cryptoCoin][coin])
        setLoading(false)
      }

      quoteCrypto()
    }
  }, [coins])

  return (
    <Container>
    <Image
      src={CriptoImage}
      alt='Imagenes criptomonedas'
    />
      <div>
        <Heading>Cotizador de criptomonedas</Heading>

        <Developer>Ing. Jesús Aquileo León Campos</Developer>

        <Form
          setCoins = {setCoins}
        />

        {loading && <Spinner/>}
        { result.PRICE && < Result result = {result} /> }

      </div>
      
    </Container>
    
  )
}

export default App
