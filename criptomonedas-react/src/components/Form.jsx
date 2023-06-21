import {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import useSelectCoins from '../hooks/useSelectCoins'
import {coins} from '../data/coins'
import Error from '../components/Error'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 7px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Form = () => {

    const [cryptos, setCryptos] = useState([])
    // Error Form
    const [error, setError] = useState(false)

    const [coin , SelectCoin] = useSelectCoins(`Elige tu moneda`, coins)
    const [cryptoCoin , SelectCryptoCoin] = useSelectCoins(`Elige tu criptomoneda`, cryptos)

    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

            const answer = await fetch(url)
            const result = await answer.json()
            
            const arrayCryptos = result.Data.map( crypto => {
                const coinObject = {
                    id: crypto.CoinInfo.Internal,
                    name : crypto.CoinInfo.FullName
                }

                return coinObject
            })

            setCryptos(arrayCryptos)
        }

        consultAPI()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        
        if([coin, cryptoCoin].includes('')){
            console.log('Error')
            setError(true)
            return
        }
        setError(false)
        
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form
                onSubmit = {handleSubmit}
            >
                <SelectCoin/>
                <SelectCryptoCoin/>
                <InputSubmit 
                    type="submit" 
                    value='Cotizar'
                />
            </form>
        </>    
    )
}

export default Form
