import axios from "axios"
import { getAuthorizedRequestHeaders, serverUrl } from "./apiUtils";


export const userLogin = async (email, password) => {
    const response = await axios.post(serverUrl + "/login", {email, password})
    const token = response.headers["authorization"];
    localStorage.setItem("jwt", token);
}

export const userRegister = async (firstName, lastName, email, password) => {
    return await axios.post(serverUrl + "/register", {firstName, lastName, email, password});
}

export const getCurrentUser = async () => {
    return await axios.get(serverUrl + "/user", getAuthorizedRequestHeaders());
}

export const userLogout = () => {
    localStorage.removeItem("jwt")
}

export const updateUser = async (email, firstName, lastName) => {
    return await axios.put(serverUrl + "/user/update", {email, firstName, lastName}, getAuthorizedRequestHeaders());
}
