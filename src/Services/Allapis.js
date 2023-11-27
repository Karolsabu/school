import { Commonstructure } from "./Commonstructure";
import BASE_URL from "./base_url";
//admin signup
export const adminsignupApi=async(body)=>{
    return await Commonstructure('POST',`${BASE_URL}/admin/admin-signup`,body)
}
//admin login
export const adminloginApi=async(body)=>{
    return await Commonstructure('POST',`${BASE_URL}/admin/admin-login`,body)
}
//student post
export const studentdataApi=async(body)=>{
    return await Commonstructure('POST',`${BASE_URL}/admin/studentdetails`,body)
}
//student 
export const studentgetdata=async()=>{
    return await Commonstructure('GET',`${BASE_URL}/admin/getstudent`)
}