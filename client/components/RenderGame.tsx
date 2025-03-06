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

  const checkForWin = () => {
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

      <>{/* {input empty character _ _ _ _ _ _ _ _ slots"} */}</>

      <div>
        {alphabet.map((letter) => (
          <button
            key={letter}
            className="rbg-blue-500 rounded border border-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={handleInputChange}
          >
            {letter}
          </button>
        ))}
      </div>
    </>
  )
}
