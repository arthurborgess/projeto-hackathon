
import { CustomDateObject } from "./Date"
import { FrequencyTypes } from "./Product"
import { User } from "./User"

export interface ProductRecord {
    id: string,
    product: {
        id_usuario: string,
        nome: string,
        tipo_de_repeticao: FrequencyTypes,
        frequencia_da_repeticao: number,
        repete_nos_dias: string,
        data_criacao: EpochTimeStamp,
        data_primeira_ocorrencia: EpochTimeStamp,
        encerramento: EpochTimeStamp,
        dias_em_listas?: Date[] | "every" | null 
    } 
}

export interface CustomProductRecord {
    id: string, 
    name: string, 
    creationDate: CustomDateObject
}

export interface ResOfProductRecords {
    id: string,
    fields: {
        id_usuario: string,
        nome: string,
        tipo_de_repeticao: FrequencyTypes,
        frequencia_da_repeticao: number,
        repete_nos_dias: string,
        data_criacao: EpochTimeStamp,
        data_primeira_ocorrencia: EpochTimeStamp,
        encerramento: EpochTimeStamp
    }
}

export interface ProductProviderTypes {
    allProducts: ProductRecord[] | null,
    loading: boolean,
    loadProducts: (user: User| null, numberOfViews: number) => void,
    columnsData: ListPerDayTypes[] | undefined,
    setColumnsData: React.Dispatch<React.SetStateAction<ListPerDayTypes[] | undefined>>,
    numberOfColumns:number,  
    setNumberOfColumns: React.Dispatch<React.SetStateAction<number>>,
    startDate: Date,
    setStartDate: React.Dispatch<React.SetStateAction<Date>>
}

export interface ListPerDayTypes {
    date: Date,
    Data: ProductRecord[] | null, 
}



