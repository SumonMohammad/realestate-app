import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";




export const fetchApi = async(url)=>{

    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'feecc5c34emshc0bb1093a0ce7d6p1df615jsn3493a3c4f20a'
          }
    });
    return data;

}