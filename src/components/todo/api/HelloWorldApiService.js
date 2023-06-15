import { apiClient } from './ApiClient'

export default function retrieveHelloWorldBean() {
    return apiClient.get('http://localhost:8080/hello-world-bean')
}

// another way to write the above method
// export const retrieveHelloWorldBean = () => axios.get('http://localhost:8080/hello-world-bean')

export const retrieveHelloWorldBeanPathVariable 
= (username,token) => apiClient.get(`/hello-world/path-variable/${username}`)