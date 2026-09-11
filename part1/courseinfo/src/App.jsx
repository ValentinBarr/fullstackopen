import { useState } from 'react'
import './App.css'

const App = () => {
  // const friends = [
  //   { name: 'Peter', age: 4 },
  //   { name: 'Maya', age: 10 },
  // ]

  const friends = [ 'Peter', 'Maya']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}


export default App