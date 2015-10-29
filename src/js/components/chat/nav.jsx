import React from 'react'
// import Reflux from 'reflux'
import {IconButton} from 'react-mdl'

let ChatNav = React.createClass({
  render: function() {
    return (
      <nav className="mdl-navigation">
        <IconButton name="search"></IconButton>
        <IconButton name="message"></IconButton>
        <IconButton name="more_vert"></IconButton>
      </nav>
    )
  }
})

export default ChatNav
