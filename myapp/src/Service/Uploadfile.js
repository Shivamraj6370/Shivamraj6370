import axios from "axios";

export const Uploadfile = async (formData)  => {
    return axios.post("http://localhost:7998/user/filepost",
    formData,
    {}
    )
}
