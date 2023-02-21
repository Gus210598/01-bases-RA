import { useReducer } from "react";
import { counterReducer } from "./state/counterReducer";
import { doReset, doIncreaseBy } from './actions/actions';

const INITIAL_STATE = {
  counter: 10,
  changes: 20,
  previous: 15,
}


export const CounterReducerComponent = () => {

    const [ counterState , dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {
        dispatch( doReset() )
      }
      
      const increaseBy = ( value: number ) => {
      dispatch( doIncreaseBy( value ) )
    }


  return (
    <>
        <h1>Counter Reducer Segmentado</h1>
        <pre>
          { JSON.stringify( counterState, null, 2 ) }
        </pre>

        <button className="btn btn-outline-success mx-1" onClick={ () => increaseBy(1) }>
             + 1 
        </button>

        <button className="btn btn-outline-success mx-1" onClick={ () => increaseBy(5) }>
             + 5 
        </button>

        <button className="btn btn-outline-success mx-1" onClick={ () => increaseBy(10) }>
             + 10 
        </button>

        <button className="btn btn-outline-success mx-1" onClick={ handleReset }>
             Reset 
        </button>

    </>
  )
}
