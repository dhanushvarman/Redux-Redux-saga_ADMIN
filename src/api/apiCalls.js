import axios from 'axios';
import { config } from './config'

export async function getUsers() {
    const users = await axios.get(`${config.api}`);
    return users
}

export async function getSingleUser(id) {
    const users = await axios.get(`${config.api}/${id}`);
    return users
}

export async function createUser(values) {
    const users = await axios.post(`${config.api}`,values);
    return users
}

export async function editUser({id,values}) {
    const users = await axios.put(`${config.api}/${id}`,values);
    return users
}

export async function deleteUser(id) {
    await axios.delete(`${config.api}/${id}`);
    return id
}