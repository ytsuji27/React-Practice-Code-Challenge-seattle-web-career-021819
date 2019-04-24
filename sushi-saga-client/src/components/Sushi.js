import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {sushi,eatSushi, purchasedSushi} = props

  return (
    <div className="sushi">
      {purchasedSushi.includes(sushi) ?
          <div className="plate"></div>
          :
            <div className="plate"
             onClick={()=>eatSushi(sushi)}>
            <img src={sushi.img_url} width="100%" />
            </div>
        }

      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
