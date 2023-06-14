import { createContext, useContext, useState } from "react";

// Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

// Put Some Some state in the context

// Share the created context with other components

function AuthProvider({children}) {


    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password) {

        if(username==='yousuf28' && password==='dummy') {
            setAuthenticated(true)
            return true

        } else {
            setAuthenticated(false)
            return false;

        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout} }>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider