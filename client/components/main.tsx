import { Link } from 'react-router-dom'
import DannyBeeImage from '../image/DannyBee.png' // Import the image

export default function Main() {
  function handleClick(e) {
    if (e.target.id === 'btn') {
      console.log('you clicked')
    }
  }
  const id = randomNumberGenerator(100, 150)

  return (
    <div className="main" style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={DannyBeeImage}
        alt="Danny Bee"
        style={{ marginRight: '10px' }}
      />{' '}
      {/* Use the imported image */}
      <button id="btn" onClick={handleClick}>
        <Link to={`/game/${id}`}>Play Now</Link>
      </button>
    </div>
  )
}

//utilities
function randomNumberGenerator(min: number, max: number) {
  return Math.floor(Math.random() * max - min + 1) + min
}

// //css
// .main {
//   display: flex;
//   align-items: center;
// }

// .main img {
//   margin-right: 10px;
// }
