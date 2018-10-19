import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class MeetupItem extends Component {
    render() {
        
    return (
      
      <li  className="collection-item">
          <Link to={`/meetups/${this.props.item.id}`}>{this.props.item.name}</Link>
      </li>
    )
  }
}

export default MeetupItem
