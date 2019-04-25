import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {/* Mapping over sushis array (4) and
          creating Sushi component for each, passing
          in a sushi object.
          Each Sushi component needs a 'key' or else
          React will complain */}
        {props.sushis.map(sushi => {
            return <Sushi
              key={sushi.id}
              sushi={sushi}
              eatSushi={props.eatSushi}
              eatenSushi={props.eatenSushi}
            />
        })}
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
