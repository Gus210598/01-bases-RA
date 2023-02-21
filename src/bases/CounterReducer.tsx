import { useReducer } from "react";

interface  CounterState {
  counter  : number;
  previous : number;
  changes  : number;
}

const INITIAL_STATE = {
  counter: 10,
  changes: 20,
  previous: 15,
}

type CounterAction = 
  | { type: 'increaseBy', payload: { value: number }}
  | { type: 'reset' };

const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

  const { counter, changes } = state;

  switch ( action.type ) {
    case 'reset':
      return {
        counter: 0,
        changes: 0,
        previous: 0,
      }
    case 'increaseBy':
      return {
        counter: counter + action.payload.value,
        changes: changes +1,
        previous: counter,
      }
  
    default:
      return state;
  }
}

export const CounterReducerComponent = () => {

    const [ counterState , dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {
        dispatch({ type: 'reset' })
      }
      
      const increaseBy = ( value: number ) => {
      dispatch({ type: 'increaseBy', payload: { value } })
    }


  return (
    <>
        <h1>Counter Reducer</h1>
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
