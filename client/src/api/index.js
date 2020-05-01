import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000/api"
})

export const postLogin = payload => api.post("/login", payload).then((response)=>{return response});

export const postRegister = payload => api.post("/register", payload).then((response)=>{return response});

export const postAdminLogin = payload => api.post("/adminLogin", payload).then((response)=>{return response});

export const postGetData = payload => api.post("/getData", payload).then((response)=>{return response});

export const postUserData = payload => api.post("/getUser", payload).then((response)=>{return response});

export const postSearch = payload => api.post("/search", payload).then((response)=>{return response});