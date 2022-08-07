import { MD5 } from "crypto-js";
import { getListOfDatesPerProduct } from "../helpers/nextOcurrenceDay";
import { createProductType } from "../types/Product";
import {ProductRecord, ResOfProductRecords} from '../types/Record'
import { User } from "../types/User";

const Airtable = require('airtable');
const base = new Airtable({
    apiKey: process.env.REACT_APP_API_KEY
}).base('app9wnjqsxjLcI8yq');

const table = base('Usuarios');


export const useApi = () => ({

    validateToken: async (token: string) => {

        var response = await table.select({
            filterByFormula: `id_usuario = "${token}"`

        }).firstPage();

        if (response.length === 0) return false;

        return response[0].fields;
    },

    login: async (email: string, cpf: string) => {

        const currentUser = MD5(email + '-' + cpf).toString();

        var response = await table.select({
            filterByFormula: `id_usuario = "${currentUser}"`

        }).firstPage();

        if (response.length === 0) {
            response = await table.create({
                id_usuario: currentUser
            })
            return response.fields;
        }

        return response[0].fields;
    },

    createProduct: (getLoading: (status: boolean) => void, getErr: (err: any) => void, user: User | null, product: createProductType) => {
        getLoading(true)
        base('Produtos').create([
            {
                "fields": {
                    "id_usuario": user,
                    "nome": product.nome,
                    "tipo_de_repeticao": product.tipo_de_repeticao,
                    "frequencia_da_repeticao": product.frequencia_da_repeticao,
                    "repete_nos_dias": product.repete_nos_dias,
                    "encerramento": product.encerramento,
                    "data_criacao": product.data_criacao,
                    "data_primeira_ocorrencia": product.data_primeira_ocorrencia
                }
            }
        ],
            function (err: any, records: any) {
                if (err) {
                    getLoading(false)
                    getErr(err)
                    return err
                }
                records.forEach(function (record: any) {
                    getLoading(false)
                    return records
                });
            });
    },

    getProducts: async (userID: any, numberOfViews?:number) => {

        const records:ResOfProductRecords[] = await base('Produtos')
            .select({
                filterByFormula: `id_usuario = "${userID}"`,
                sort: [{ field: 'data_criacao', direction: 'asc' }]
            })
            .all()

        // se não tiver produtos
        if (records.length === 0) {
            return []
        }
        else {
            let products: ProductRecord[] = []

            for(let record  of records) {
                let daysInlist = getListOfDatesPerProduct({id: record.id, product:record.fields}, numberOfViews? numberOfViews : 6)
                let p: ProductRecord = { id: record.id, product:{...record.fields, dias_em_listas: daysInlist}}
                
                products.push(p)
            }
            return products
        }
    },

    getProductsByData: async (userID: any) => {

        const records = await base('Produtos')
            .select({
                filterByFormula: `id_usuario = "${userID}"`,
                sort: [{ field: 'data_criacao', direction: 'asc' }]
            })
            .all()

        // se não tiver produtos
        if (records.length === 0) {
            return []
        }
        else {
            let products = []

            for (let record of records) {
                let p: ProductRecord = { id: record.id, product: record.fields }
                products.push(p)
            }

            return products;
        }
    },

    removeProduct: async (productRecordID: string) => {
        const response = await base('Produtos').destroy([productRecordID])
        return response
    },
    updateProduct: async (productRecord: ResOfProductRecords) => {

        base('Produtos').update([productRecord],

            function (err: any, records: any) {
                if(err) {console.log(err);}
            
            }
        )

    }
})