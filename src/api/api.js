import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    headers: {
        'content-type':'application/json',
    }
});

const Api = {
    getAllCharacters: () =>
    instance({
        'method':'GET',
        'url':'/character',
    }),
    getSingleCharacter: (id) =>
    instance({
        'method':'GET',
        'url':`/character/${id}`,
    }),
    getCharactersByPage: (params) =>
    instance({
        'method': 'GET',
        'url':'/character',
        'params':params
    })
}
export default Api;