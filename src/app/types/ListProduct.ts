import { Dispatch, SetStateAction } from "react";
import { CustomProductRecord } from '../types/Record'

export interface IListProduct {
    product: CustomProductRecord;
    isDone: boolean;
    setIsDone: Dispatch<SetStateAction<boolean>>;
}