import { MD5 } from "crypto-js";
import { createProductType } from "../types/Product";

const Airtable = require('airtable');

const base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY 
}).base('app9wnjqsxjLcI8yq');

const table = base('Usuarios');

export const useApi = () => ({

    validateToken: async (token: string) => {

        var response = await table.select({
            filterByFormula: `id_usuario = "${token}"`

        }).firstPage();

        if(response.length === 0) { return null }

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

    createProduct: (getLoading: (status: boolean) => void, getErr:(err: any) => void, user: string , product: createProductType) => {
        
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

          function(err: any, records:any) {
            if (err) { 
                getLoading(false)
                getErr(err)
                return err
            }
            records.forEach(function (record:any) {
                getLoading(false)  
            return records 
            });
          }); 
    },

    getProducts: async (userId: string) => {

        const response = await base('Produtos')
            .select({filterByFormula: `id_usuario = "${userId}"`})
            .all()

        // se não tiver produtos
        if(response.length === 0) {
            return []
        }
        else {
            let products = []

            for(let record of response) {
                products.push({id: record.id, product: record.fields})
            }

            return products
        }
    },
    removeProduct: async (recordID: string) => {

        const response = await base('Produtos').destroy([recordID])
    
        console.log(response);
    }
});