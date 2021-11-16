import axios from 'axios';

export async function get(url){
    const { list } = await axios.get(url)
    const data = list
    return data;
}