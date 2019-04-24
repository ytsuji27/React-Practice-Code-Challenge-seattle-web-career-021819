import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map((sushi, index)=>{
          return <Sushi key={index} sushi={sushi} purchasedSushi={props.purchasedSushi} eatSushi={props.eatSushi} />
        })
        }
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
