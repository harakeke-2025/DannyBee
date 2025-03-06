import { useDisneyCharacters } from '../apiClient'
import { DisneyCollection } from '../../models/DisneyCharacters'

export default function DisneyCharacter() {
  const disneyCharacters = useDisneyCharacters()
  if (disneyCharacters.isError) return <p>ppending</p>
  if (disneyCharacters.isPending) return <p>ppending</p>
  console.log(disneyCharacters.data.data)

  return (
    <>
      <p>hi</p>
    </>
  )
}
