import './App.css';
import TodoComponent from './components/todo/TodoApp'

function App() {
  return (
    <div className="App">
      <TodoComponent/>
    </div>
  );
}

// {property1: 'value1', property2: 'value2'}
// function PlayWithProps(properties) {
//   console.log(properties)
//   console.log(properties.property1)
//   console.log(properties.property2)

//   return (
//     <div>Props</div>
//   )
// }

// modern way, deconstruct the object.
// function PlayWithProps({property1, property2}) {
//   console.log(property1)
//   console.log(property2)

//   return (
//     <div>Props</div>
//   )
// }
export default App;
