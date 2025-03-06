import { createRoutesFromElements, Route } from 'react-router-dom'
import DisneyCharacter from './components/DisneyCharacter'
export default createRoutesFromElements(
  // <Route path="/">
  //   <Route index />
  //   <Route path="game/:_id" element={<DisneyCharacter />} />
  // </Route>,
  <Route path="/" element={<DisneyCharacter />} />,
)
