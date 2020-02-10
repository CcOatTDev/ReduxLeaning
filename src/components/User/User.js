import React, { Component } from 'react';

class User extends Component{
  render(){
    return(
        <div>
            <h1> HelloWorld : {this.props.username}</h1>
            <h1> This Age : {this.props.age}</h1>
        </div>
    );
  }
}

export default User;
