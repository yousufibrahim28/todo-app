import {useParams, Link} from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldBeanPathVariable } from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'

function WelcomeComponent() {
    const {username} = useParams()

    const [message, setMessage] = useState(null)

    const authContext = useAuth()

    function callHelloWorldRestApi() {

        // Use Axios framework to call REST API.
        retrieveHelloWorldBeanPathVariable(username,authContext.token)
        .then((response) => successfullResponse(response))
        .catch((error) => errorResponse(error))
        .finally(() => console.log("cleanup"))

    }

    function successfullResponse(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }


    return (
        <div className="Welcome">
           <h1>Welcome {username}</h1>
           <div>
            <Link to="/todos">Manage your Todos</Link>
           </div>
           <div>
                <button className="btn btn-success" onClick={callHelloWorldRestApi}>
                    Call Hello world
                </button>
           </div>
           <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent