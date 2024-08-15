import React from 'react'

function Player(props) {
  return (
     <div className='playerDiv2'>
      <img src={props.pic} alt=''></img>
      <h2>Name:{props.name}</h2>
      <h2>Team:{props.team}</h2>
      <h2>Role:{props.role}</h2>
  </div>
  )
}

export default Player
