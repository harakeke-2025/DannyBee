import React from 'react'
import DannyBeeImage from './assets/DannyBee.png' // Import the image

export default function Main() {
  function handleClick(e) {
    if (e.target.id === 'btn') {
      console.log('you clicked')
    }
  }

  return (
    <div className="main" style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={DannyBeeImage}
        alt="Danny Bee"
        style={{ marginRight: '10px' }}
      />{' '}
      {/* Use the imported image */}
      <button id="btn" onClick={handleClick}>
        Play Now
      </button>
    </div>
  )
}

// //css
// .main {
//   display: flex;
//   align-items: center;
// }

// .main img {
//   margin-right: 10px;
// }
