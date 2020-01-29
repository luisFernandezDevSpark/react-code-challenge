import React from 'react'
import TransformButton from './TransformButton'

const ListItem = ({string}) => (
  <li>
    <span>
      {string}
    </span>
    <TransformButton
      onClick={(event) => {
        event.preventDefault()
        console.log(string)
      }}
    />
  </li>
)

export default ListItem