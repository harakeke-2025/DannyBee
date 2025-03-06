import { useDisneyCharacter } from '../apiClient'

export default function DisneyCharacter() {
  const disneyCharacters = useDisneyCharacter(112)
  if (disneyCharacters.isError) return <p>Error...!</p>
  if (disneyCharacters.isPending) return <p>Pending...</p>
  if (disneyCharacters.data) {
    console.log(disneyCharacters.data.data.name)

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
