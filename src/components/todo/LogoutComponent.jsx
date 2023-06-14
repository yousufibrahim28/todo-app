//import { useAuth } from "./security/AuthContext"

function LogoutComponent() {

    // this is another way to set is authenticated to false
    // const authContext = useAuth()
    // authContext.setAuthenticated(false)

    return (
        <div className="logoutComponent">
            <h1>You are logged out</h1>
            <div>
                Thank you for using our app comeback soon.
            </div>
        </div>
    )
}

export default LogoutComponent