import PropTypes, { func } from "prop-types";
import { useState} from 'react'

export const SecondApp = () => {

    const [ counter, setCounter ] = useState(5);

    const handleAdd = () => {
        setCounter( counter + 1 );
    }

    const handleSubstract = () => {
        setCounter( counter + -1 );
    }

    const handleReset = () => {
        setCounter( 0 );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd } >
                +1
            </button>

            <button onClick={ handleSubstract } >
                -1
            </button>

            <button onClick={ handleReset } >
                Reset
            </button>
        </>
    );
}



SecondApp.propTypes = {
    value: PropTypes.number.isRequired 
}

// SecondApp.defaultProps = {
//     value: 0
// }