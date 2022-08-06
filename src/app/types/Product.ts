import { User } from "./User";

export type FrequencyTypes =  "dia" | "semana" | "mes" | "ano" ;
export type FrequencyValues = [FrequencyTypes]

export interface GetAndSeterProductData{
  itemName: string;
  setItemName: React.Dispatch<React.SetStateAction<string>>
  repeatPattern: RepeatPatternInterface;
  setRepeatPattern: React.Dispatch<React.SetStateAction<RepeatPatternInterface>>;
  typeEnd: typeEndOption;
  setTypeEnd: React.Dispatch<React.SetStateAction<typeEndOption>>;
  initialDate: Date;
  setInitialDate: React.Dispatch<React.SetStateAction<Date>>
  endDate: Date | null;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>
  weekDays: weekDaysTypes
  setWeekDays: React.Dispatch<React.SetStateAction<weekDaysTypes>>,
  handleCreateProduct: (user: User | null) => void,
  err: any,
  isLoading: boolean
}

export type typeEndOption = "never" | "in" | "after";

export interface RepeatPatternInterface {
  frequency: number,
  type: FrequencyTypes 
}

export interface weekDaysTypes {
  days: number[];
  realInitialDate: Date | null;
}

export interface createProductType {
  nome: string,
  tipo_de_repeticao: string,
  frequencia_da_repeticao: number,
  repete_nos_dias: string,
  encerramento: EpochTimeStamp,
  data_criacao: EpochTimeStamp,
  data_primeira_ocorrencia: EpochTimeStamp
}

export interface CustomProductObj {
  id: string,
  name: string
}
