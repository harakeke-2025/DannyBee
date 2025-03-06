import { useDisneyCharacter } from '../apiClient'

export default function DisneyCharacter() {
  const disneyCharacters = useDisneyCharacter(112)
  if (disneyCharacters.isError) return <p>ppending</p>
  if (disneyCharacters.isPending) return <p>ppending</p>
//could't get the data.name. will solve tomorrow
if(disneyCharacters.data) {
  console.log(disneyCharacters.data.data)

  

  return (
    <>
    </>
  )}
}
