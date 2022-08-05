import { useContext, useEffect, useState} from "react"
import { CreateProductContext } from "../../../contexts/Products/CreateProductProvider ";

import { InputIn } from './InputIn';
import { InputAfter } from "./InputAfter";
import { WrapperInputLabel } from "./styled";

export type SelectPatternTypes = "never" | "in" | "after"

export const SetEndDate = () => {

  const { setTypeEnd } = useContext(CreateProductContext)

  return (
    <div>
      <p>Termina em:</p>

      <WrapperInputLabel>
        <input 
          id="input-never"
          defaultChecked
          type={"radio"}
          name="selectPattern"
          onClick={() => setTypeEnd('never')}
        />
        <label htmlFor="input-never">Nunca</label>
      </WrapperInputLabel>

      <InputIn 
        onClick={() => setTypeEnd('in')}
      />
      <InputAfter
        onClick={() => setTypeEnd('after')}
      />
    </div>
  )
}