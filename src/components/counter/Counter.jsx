import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'
import ResetButton from './ResetButton'



export default function Counter() {

    // returns[0,f] returns initial value and function
    // deconstructing the return value of useSatte
    const [count, setcount] = useState(0)

    function incrementCounterParentFunction(by) {
        setcount(count + by)
    }

    function decrementCounterParentFunction(by) {
        setcount(count - by)
    }

    function resetConterParentFunction() {
        setcount(0)
    }

    return (
        <div className="App">
            <span className="totalCount">{count}</span>
            <CounterButton by={1} 
            incrementMethod={incrementCounterParentFunction} 
            decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={2} 
            incrementMethod={incrementCounterParentFunction} 
            decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={5} 
            incrementMethod={incrementCounterParentFunction} 
            decrementMethod={decrementCounterParentFunction}/>
            <ResetButton resetMethod={resetConterParentFunction}/>
      </div>
    )
}