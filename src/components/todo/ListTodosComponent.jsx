import { useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { retrieveAllTodosForUsernameApi, deleteTodoApi} from './api/TodoApiService'
import { useAuth } from './security/AuthContext'


function ListTodosComponent() {

    const today = new Date()

    const authContext = useAuth()

    const username = authContext.username

    const [todos,setTodos] = useState([])

    const [message,setMessage] = useState(null)

    const naviagte = useNavigate();

    useEffect(
        () => refreshTodos(), []
    )

    function refreshTodos() {
        retrieveAllTodosForUsernameApi(username)
        .then((response) => successfullResponse(response))
        .catch((error) => errorResponse(error))
        .finally(() => console.log("cleanup"))
    }


    function successfullResponse(response) {
        console.log(response)
        setTodos(response.data)
    }

    function errorResponse(error) {
        console.log(error)
    }

    function deleteTodo(id) {
        deleteTodoApi(username,id)
        .then(() => {
            setMessage(`Delete of todo with id = ${id} successful`)
            refreshTodos()
        })
        .catch((error) => errorResponse(error))
        .finally(() => console.log("cleanup"))
    }

    function updateTodo(id) {
        naviagte(`/todo/${id}`)
    }

    function addNewTodo() {
        naviagte(`/todo/-1`)
    }

    return (
        <div className="container">
            <h1>Things You want to Do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Targte Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(
                            todo =>(
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-danger" onClick={(id)=>deleteTodo(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-warning" onClick={(id)=>updateTodo(todo.id)}>Update</button></td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
                <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>
                
            </div>
        </div>
    )
}

export default ListTodosComponent