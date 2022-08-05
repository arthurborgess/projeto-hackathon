
import { CustomDateObject } from "./Date"

export interface ProductRecord {
    id: string,
    product: {
        id_usuario: string,
        nome: string,
        tipo_de_repeticao: string | number,
        frequencia_de_repeticao: number,
        repete_nos_dias: string | number,
        data_criacao: EpochTimeStamp,
        data_primeira_ocorrencia: EpochTimeStamp,
        encerramento: EpochTimeStamp
    }
}

export interface CustomProductRecord {
    id: string, 
    name: string, 
    creationDate: CustomDateObject
}


