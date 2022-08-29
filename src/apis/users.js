import axios from 'axios'
export const getUsers = () => {
   return axios.get('https://62fce4c3b9e38585cd4852c8.mockapi.io/users')    
}

export const getUser = (id) => {
    return axios.get(`https://62fce4c3b9e38585cd4852c8.mockapi.io/users/${id}`)    
 }

 export const creatUser = (formData) => {
    return axios.post('https://62fce4c3b9e38585cd4852c8.mockapi.io/users', formData)    
 }

 export const editUser = (id,formData) => {
   return axios.put(`https://62fce4c3b9e38585cd4852c8.mockapi.io/users/${id}`, formData)    
}

export const deletetUser = (id) => {
   return axios.delete(`https://62fce4c3b9e38585cd4852c8.mockapi.io/users/${id}`)    
}


























 // AJAX
  // .then()
  // .catch
  // .finally
