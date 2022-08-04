import { useContext} from "react"
import { CreateProductContext } from "../../../contexts/CreateProductProvider ";

import { InputIn } from './InputIn';
import { InputAfter } from "./InputAfter";

export type SelectPatternTypes = "never" | "in" | "after"

export const SetEndDate = () => {

  const { setTypeEnd } = useContext(CreateProductContext)

  return (
    <div>
      <p>Termina em</p>

      <div>
        <input 
          id="input-never"
          type={"radio"}
          defaultChecked 
          name="selectPattern"
          onClick={() => setTypeEnd('never')}
        />
        <label htmlFor="input-never">Nunca</label>
      </div>

      <InputIn 
        onClick={() => setTypeEnd('in')}
      />
      <InputAfter
        onClick={() => setTypeEnd('after')}
      />
    </div>
  )
}