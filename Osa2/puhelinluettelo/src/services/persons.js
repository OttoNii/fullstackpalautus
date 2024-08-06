import axios from 'axios'
const baseURL = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}
const create = newPerson =>{
    const request = axios.post(baseURL, newPerson)
    return request.then(response => response.data)
}

const del = id => {
    const request = axios.delete(`${baseURL}/${id}`)
        .catch(error => {
        console.error(error);
      });
        console.log(`Deleted person with ID ${id} `)
      return request.then(response => response.data)
}

const updateNumber = (id, newNumber) =>{
    const request = axios.put(`${baseURL}/${id}`, newNumber)
      return request.then(response => response.data)
}

export default { getAll, create, del, updateNumber}
