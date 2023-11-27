import axios from "axios"
export const Commonstructure=async(method,url,body)=>{
    let config={
        method,
        url,
        data:body
    }
    return axios(config).then(response=>{
        return response

    }).catch(response=>{
        return response
    })
}