const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base('app9wnjqsxjLcI8yq');
const table = base('Usuarios');

export const useApi = () => ({
    validateToken: async (token: string) => {
        var response = await table.select({
            filterByFormula: `id_usuario = "${token}"`
        }).firstPage();
        return response;
    },
    login: async (email: string, cpf: string) => {
        var response = await table.select({
            filterByFormula: `id_usuario = "${email + '-' + cpf}"`
        }).firstPage();
        if (response.length === 0) {
            response = await table.create({
                id_usuario: email + '-' + cpf,
                email_usuario: email,
                cpf_usuario: cpf
            })
        }
        return response[0].fields;
    }
});