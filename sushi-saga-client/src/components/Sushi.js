import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
    {/* IF this sushi is in the 'eatenSushi' array... */}
    {props.eatenSushi.includes(props.sushi) ?
      // ...THEN return an empty <div> (empty plate)
      <div className="plate">
      </div>
    :
      // ...IF NOT, return a <div> with sushi image
      // The onClick would trigger the 'eatSushi' function in App.js
      <div className="plate" onClick={() => props.eatSushi(props.sushi)}>
        <img src={props.sushi.img_url} alt={props.sushi.name} width="100%" />
      </div>
    }
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
