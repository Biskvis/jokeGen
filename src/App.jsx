import React, { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [joke, setJoke] = useState({})
  const [click, setClick] = useState(false)
  
  function handleClick() {
    setClick(prevClick => !prevClick)
  }

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=1')
    .then(res => res.json())
    .then(data => setJoke(data))
  }, [click])
  
  

  return (
    <>
      <h1>Joke Generator Using React and Joke API</h1>
      <div className='center'>
        <button onClick={handleClick}>Click to generate a joke.</button>
        <h3>{joke.joke}</h3>
      </div>
    </>
  )
}

export default App
