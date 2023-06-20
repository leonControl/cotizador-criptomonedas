import React from 'react'
import styled from '@emotion/styled'
import useSelectCoins from '../hooks/useSelectCoins'

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

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Form = () => {

    const [SelectCoins] = useSelectCoins(`Elige tu moneda`)

    return (
        <form>
            <SelectCoins/>
        
            <InputSubmit 
                type="submit" 
                value='Cotizar'
            />
        </form>
    )
}

export default Form
