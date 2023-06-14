import {PropTypes} from 'prop-types'


export default function CounterButton({by, incrementMethod, decrementMethod}) {
    return (
        <div className="Counter">
        <div>
            <button className="counterButton" 
            onClick={() => incrementMethod(by)}           
            >+ {by}</button>
            <button className="counterButton" 
            onClick={() => decrementMethod(by)}           
            >- {by}</button>
        </div>
        </div>
    )
}

// Define constraints
CounterButton.propTypes = {
    by : PropTypes.number
}

// Define a default value to the props
CounterButton.defaultProps = {
    by : 1
}