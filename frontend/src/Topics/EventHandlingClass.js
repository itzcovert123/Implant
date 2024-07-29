import React, { Component } from 'react'

export default class  EventHandlingClass extends Component {
        constructor(){
            super();
            this.State= {name: "john"}
        }
      test(){
                alert("This is your Notification")
    }
  
  render(){
    return (

        <> 
                  <h1> Event Handling in component</h1>
                  <h3> {this.State.name}</h3>
                <button onClick={() => this.test()} > Click this one </button>
            
        </>
              
            
           )
          }
}
