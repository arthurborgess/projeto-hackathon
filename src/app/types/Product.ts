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
  setWeekDays: React.Dispatch<React.SetStateAction<weekDaysTypes>>
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