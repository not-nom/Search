import axios from "axios";

axios.defaults.baseURL='https://hn.algolia.com/api/v1/'

export const gABQ = async (querry) => {
    const response = await axios.get(`search?query=${querry}`)
    return response.data.hits
}

export const gABN = async (article) => {
    const response = await axios.get(`items/${article}`)
    return response.data
}