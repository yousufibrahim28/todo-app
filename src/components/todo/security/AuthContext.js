import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService, executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

// Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

// Put Some Some state in the context

// Share the created context with other components

function AuthProvider({children}) {


    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)

    // async function login(username, password) {
    //     const baToken = 'Basic ' + window.btoa(username+ ":" +password)

    //     try {
    //         const response = await executeBasicAuthenticationService(baToken)

    //         setAuthenticated(false)
    
    //         if(response.status==200) {
    //             setAuthenticated(true)
    //             setUsername(username)
    //             setToken(baToken)

    //             apiClient.interceptors.request.use(
    //                 (config) => {
    //                     config.headers.Authorization = baToken
    //                     return config
    //                 }
    //             )

    //             return true
    
    //         } else {
    //             logout()
    //             return false;
    
    //         }
    //     } catch(error) {
    //         logout()
    //         return false;
    //     }
    // }


    async function login(username, password) {

        try {
            const response = await executeJwtAuthenticationService(username,password)

            const jwtToken = 'Bearer ' + response.data.token
    
            if(response.status==200) {
                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )

                return true
    
            } else {
                logout()
                return false;
    
            }
        } catch(error) {
            logout()
            return false;
        }
    }

    function logout() {
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout, username, token} }>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider