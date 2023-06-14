import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import { useAuth } from "./security/AuthContext"


function LoginComponent() {

    const [username, setUsername] = useState('yousuf28')
    const [password, setPassword] = useState('')
    
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const naviagte = useNavigate();

    const authContext = useAuth()

    function handleUserNameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if(authContext.login(username,password)) {
            naviagte(`/welcome/${username}`)

        } else {
            setShowErrorMessage(true)
        }
    }

    // function SuccessMessageComponent() {
    //     if(showSuccessMessage) {
    //         return (
    //             <div className="successMessage">Authenticated successfully</div>
    //         )
    //     }
    // }

    // function ErrorMessageComponent() {
    //     if(showErrorMessage) {
    //         return (
    //             <div className="errorMessage">Authentication failed Please check your credentials</div>
    //         )
    //     }
    // }

    return (
        <div className="Login">
            <div className="LoginForm">
            <h1>Login</h1>
                {showErrorMessage && <div className="errorMessage">Authentication failed Please check your credentials</div>}
                {/* <SuccessMessageComponent/>
                <ErrorMessageComponent/> */}
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUserNameChange}/>
                </div>
                <div>
                    <label>Passsword</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent