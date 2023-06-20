import {useState} from "react"
import styled from "@emotion/styled"

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 7px;
    margin-bottom: 20px;
`

const useSelectCoins = (label, options) => {

    const [state, setState] = useState('')

    const SelectCoins = () => (
        <>
        <Label>{label}</Label>
        <Select
            value={state}
            onChange={ e => setState(e.target.value) }
        >
            <option value="">--- Seleccionar ---</option>

            {options.map( opt => (
            <option key={opt.id} value={opt.id}>
                {opt.name}
            </option>
            ))}
        </Select>
        </>
    )

    return [SelectCoins]
}

export default useSelectCoins
