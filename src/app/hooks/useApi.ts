import { MD5 } from "crypto-js";

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
    getProducts: async (userId: string) => {

        const response = await base('Produtos')
            .select({ filterByFormula: `id_usuario = "${userId}"` })
            .all()

        // se não tiver produtos
        if (response.length === 0) {
            return []
        }
        else {
            let products = []

            for (let record of response) {
                products.push({ id: record.id, product: record.fields })
            }

            return products
        }
    },
    removeProduct: async (recordID: string) => {

        const response = await base('Produtos').destroy([recordID])

        console.log(response);
    }
});