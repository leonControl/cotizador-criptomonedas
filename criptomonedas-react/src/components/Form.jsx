import {useEffect} from 'react'
import styled from '@emotion/styled'
import useSelectCoins from '../hooks/useSelectCoins'
import {coins} from '../data/coins'

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

    const [coin , SelectCoins] = useSelectCoins(`Elige tu moneda`, coins)

    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

            const answer = await fetch(url)
            const result = await answer.json()
            console.log(answer)
            console.log(result.Data)
        }

        consultAPI()
    }, [])

    return (
        <form>
            <SelectCoins/>

            {coin}
        
            <InputSubmit 
                type="submit" 
                value='Cotizar'
            />
        </form>
    )
}

export default Form
