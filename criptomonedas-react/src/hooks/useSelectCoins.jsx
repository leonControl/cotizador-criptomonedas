import React from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
`;

const useSelectCoins = (label, options) => {
  const SelectCoins = () => (
    <>
      <Label>{label}</Label>
      <select>
        <option value="">--- Seleccionar ---</option>

        {options.map( opt => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
    </>
  )

  return [SelectCoins]
}

export default useSelectCoins
