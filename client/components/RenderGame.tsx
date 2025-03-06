import { useState } from 'react'
import DisneyCharacter from './DisneyCharacter'

export default function RenderGame() {
  // get current character image/name and place in  Disneycharacter
  const [disneyCharacter, setDisneyCharacter] = useState(DisneyCharacter)

  // Keyboard inputs
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  //This is where the users input will be displayed
  const [guessingArr, setGuessingArr] = useState([])

  // set the initial state to empty
  const [input, setInput] = useState()

  //handle user input, add character to guessing Array
  const handleInputChange = (letter) => {
    setGuessingArr(letter.target.value)
  }

  const checkIfCorrect = () => {
    if (DisneyCharacter.name.toLowerCase() === input.toLocaleLowerCase()) {
      alert('YOU GOT THE SPELLING BEEEEE')
    } else {
      alert('try again'!)
    }
  }

  return (
    <>
      <div>
        <img
          src="DisneyCharacterURL"
          className="DisneyCharacter"
          alt="Disney Character"
        />
      </div>

      <>{/* {input character image here"} */}</>

      <div>
        {alphabet.map((letter) => (
          <button key={letter} className="button" onClick={handleInputChange}>
            {letter}
          </button>
        ))}
      </div>
    </>
  )
}
