import React from 'react'
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

    const [state , SelectCoins] = useSelectCoins(`Elige tu moneda`, coins)

    return (
        <form>
            <SelectCoins/>

            {state}
        
            <InputSubmit 
                type="submit" 
                value='Cotizar'
            />
        </form>
    )
}

export default Form
