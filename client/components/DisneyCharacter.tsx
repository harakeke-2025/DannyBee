import { useDisneyCharacter } from '../apiClient'
import LoadingPage from './LoadingPage'

export default function DisneyCharacter() {
  const disneyCharacters = useDisneyCharacter(112)
  if (disneyCharacters.isError) return <p>ppending</p>
  if (disneyCharacters.isPending) return <LoadingPage />
//could't get the data.name. will solve tomorrow
if(disneyCharacters.data) {
  console.log(disneyCharacters.data.name)

  

  return (
    <>
    </>
  )}
}
