import axios from 'axios'
const url = "http://localhost:3500/api"

export const registrarDoctor = (data) => {
    return axios.post(url + '/doctors', data)
}

export const getDoctorsApi = () => {
    return axios.get(url + '/doctors')
}

export const deleteDoctorApi = (id) =>{
    return axios.delete(url + '/doctors/'+id)
}