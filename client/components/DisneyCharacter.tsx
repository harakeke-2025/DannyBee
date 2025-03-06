import { useDisneyCharacter } from '../apiClient'
import LoadingPage from './LoadingPage'

export default function DisneyCharacter() {
  const disneyCharacters = useDisneyCharacter(112)

  if (disneyCharacters.isError) return <p>ppending</p>
  if (disneyCharacters.isPending) return <LoadingPage />
//could't get the data.name. will solve tomorrow
if(disneyCharacters.data) {
  console.log(disneyCharacters.data.name)


    const name = disneyCharacters.data.data.name
    console.log(name)
    const imageUrl = disneyCharacters.data.data.imageUrl
    console.log(imageUrl)
    return (
      <>
        <div>
          {name && <h1>{name}</h1>}
          {imageUrl && (
            <img
              src="{imageUrl}"
              alt={name || 'Image'}
              // style={{ maxwidth: '300px' }}
            />
          )}
        </div>
      </>
    )
  }
}
