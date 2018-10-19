import React, { Component } from 'react'
import axios from 'axios'
import MeetupItem from './MeetupItem'

 class Meetups extends Component {
  constructor(){
    super()
    this.state = {
      meetups: []
    }
  }

  componentWillMount(){
    this.getMeetups()
  }

  getMeetups(){
    axios.get('http://localhost:3000/api/meetups')
      .then(response => {
        this.setState({
          meetups: response.data
        }, () => {
          // console.log(this.state)
        })
      }).catch(e => console.log(e))
  }
  
  render() {
    const meetUpItems = this.state.meetups.map((meetup,i) => {
      return (
        <MeetupItem item={meetup} key = {meetup.id} />
      )
    })
    return (
      <div>
        <h1>Meetups</h1>
        <ul className="collection">
          {meetUpItems}
        </ul>
      </div>
    )
  }
}

export default Meetups
