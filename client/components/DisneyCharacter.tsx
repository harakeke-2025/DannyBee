import { useParams } from 'react-router-dom'
import { useDisneyCharacter } from '../apiClient'
import LoadingPage from './LoadingPage'
import { useState } from 'react'

export default function DisneyCharacter() {
  const { id } = useParams()

  const disneyCharacters = useDisneyCharacter(Number(id))
  const name = disneyCharacters.data?.data.name

  const [disneyCharacter, setDisneyCharacter] = useState(name || '')
  //This is where the users input will be displayed
  const [guessingArr, setGuessingArr] = useState([])
  // set the initial state to empty
  const [input, setInput] = useState()

  if (disneyCharacters.isError) return <p>pending</p>
  if (disneyCharacters.isPending) return <LoadingPage />

  // get current character image/name and place in  Disneycharacter

  //could't get the data.name. will solve tomorrow
  // if (disneyCharacters.data) {

  const imageUrl = disneyCharacters?.data.data.imageUrl

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

  //handle user input, add character to guessing Array
  const handleInputChange = (letter: string) => {
    setGuessingArr((prevGuessedLetter) => [...prevGuessedLetter, letter])
    console.log(guessingArr)
    // setGuessingArr(...letter.target.value)
  }

  const checkForWin = () => {
    if (name.toLowerCase() === input.toLocaleLowerCase()) {
      alert('YOU GOT THE SPELLING BEEEEE')
    } else {
      alert('try again'!)
    }
  }

  return (
    <>
      <div>
        <h1>{name}</h1>

        <img src={imageUrl} alt={name || 'Image'} />
      </div>
      <div className="flex flex-row">
        {guessingArr.map((item, index) => (
          <p
            className="lg:text-xx1 sm:text-md px-2 md:text-xl"
            key={index}
          >{`${item}  `}</p>
        ))}
      </div>
      <div>
        {alphabet.map((letter) => (
          <button
            key={letter}
            className="rbg-blue-500 text-blue rounded border border-blue-700 px-4 py-2 font-bold hover:bg-blue-700"
            onClick={() => handleInputChange(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </>
  )
}

// function buildWord(letters, targetLength) {
//   for (const letter of letters) {
//     currentWord += letter;
//     if (currentWord.length === targetLength) {
//       return currentWord; //Return the word when it reaches the target length
//     }
//   }
//   return currentWord; //Return the word even if it doesn't reach the target length
// }
