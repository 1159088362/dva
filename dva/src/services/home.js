import { get, post } from '../utils/request';
import api from './api'

export const findUser = () => get(api.findUser)
export const deleteUser = (obj) => post(api.delete,obj)
export const addUser = (obj) => post(api.add,obj)
export const updateUser = (obj) => post(api.update,obj)