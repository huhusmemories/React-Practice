// For useState, we need to import { useState } from 'react
import React, { useState } from 'react'

export default function UnderstandUseState() {
  // state = the current state
  // setState = function to update the state
  // useState(4) = setting the default state to 4
  // This runs everytime we re render the application
  // const [state, setState] = useState(4)


  const [state, setState] = useState(() => {
    // It only runs this function once, just like initialize
    console.log('run function')
    return 4
  })

  const [theme, setTheme] = useState('blue')



  // onClick event to decrement count, technically this way it works but it is not a good practice
    // const decrementCount = () => {
    //   setState(state - 1)
    // }


    // TODO: Why we need the arrow function?
    const decrementCount = prevCount => {

      // if we use like this, it will return a NaN
      // setState(prevCount- 1)
      // Since setState needs a function as parameter, we need to pass a function, like this
      setState(prevCount => prevCount- 1)
    }

    const incrementCount = prevCount => {
      setState(prevCount => prevCount + 1)
    }



  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{state}{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}
