import styled from "@emotion/styled"

const Container = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;    
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Image = styled.img`
    display: block;
    width: 120px;

`

const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Result = ({result}) => {

    console.log(result)
    const {PRICE, LOWDAY, HIGHDAY, CHANGE24HOUR, IMAGEURL, LASTUPDATE} = result

  return (
    <Container>
        <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Crypto Image"/>
        <div>
            <Price>Precio: <span>{PRICE}</span></Price>
            <Text>Precio más bajo del día: <span>{LOWDAY}</span></Text>
            <Text>Precio más alto del día : <span>{HIGHDAY}</span></Text>
            <Text>Variación últimas 24h: <span>{CHANGE24HOUR}</span></Text>
            <Text>Última actualización: <span>{LASTUPDATE}</span></Text>
        </div>
      
    </Container>
  )
}

export default Result
