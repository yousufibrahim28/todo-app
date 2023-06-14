



export default function({resetMethod}) {
    return (
        <div className="reset">
        <div>
            <button className="resetButton" 
            onClick={resetMethod}           
            >Reset</button>
        </div>
        </div>
    )
}