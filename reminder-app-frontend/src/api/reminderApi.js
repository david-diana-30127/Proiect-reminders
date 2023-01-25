import axios from "axios"
import { getAuthorizedRequestHeaders, serverUrl } from "./apiUtils";



export const getReminders = async () => {
    return await axios.get(serverUrl + "/reminders", getAuthorizedRequestHeaders());
}

export const addReminder = async (title, descriere, date) => {
    return await axios.post(serverUrl + "/reminder", {title, descriere, date}, getAuthorizedRequestHeaders());
}

export const updateReminder = async (id, title, descriere, date) => {
    return await axios.put(serverUrl + "/reminder", {id, title, descriere, date}, getAuthorizedRequestHeaders());
}

export const deleteReminders = async (ids) => {
    return await axios.delete(serverUrl + "/reminders", {data: ids, ...getAuthorizedRequestHeaders()});
}

