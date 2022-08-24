import axios from 'axios';

const API_URL = "http://localhost:7899/";
let axiosConfig = {
    header: {
        'Content-Type': 'application/json'
    }
}
export const userlogin = async (email, password) => {
    return axios.post(
        API_URL + "login/userlogin",
        {
            email,
            password,
        },
        axiosConfig
    )
}
export const showlist = async () => {
    return axios.get(
        API_URL + "book/booklist", axiosConfig
    )
}

export const bookdata = async (titel, author, genre, price) => {


    return axios.post(API_URL + "book/addbook", {
        titel,
        author,
        genre,
        price,
    },
        axiosConfig

    )

}
export const getBookDetail = async (_id) => {

    return axios.get(API_URL + `book/getDetailById?_id=${_id}`, axiosConfig)
}

export const updateBook = async (data, _id) => {
    console.log(data);
    console.log(_id)
    return await axios.put(API_URL + "book/UpdateBook", {
        _id,
        titel: data.titel,
        author: data.author,
        genre: data.genre,
        price: data.price
    }, axiosConfig)
}

export const deleteBook = async (_id) => {
    console.log(_id)
    return await axios.delete(API_URL + "book/deleteBook/"+id,
     {_id }, axiosConfig)
}
