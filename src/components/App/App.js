import React, { Component } from 'react';
import './App.css';
import User from '../User/User';
import { connect } from 'react-redux';

class AppOld extends Component{
  render(){
    return(
      <div>
        <User username={this.props.user.name} age={this.props.user.age}/>
        <button onClick={()=>this.props.SetName("OatTChange")}> Change Your Name</button>
        <button onClick={()=>this.props.SetAge(25)}> Change Your Age</button>
        <button onClick={()=>this.props.SetNameAndAge("OatTChangeing","18")}> Change Your Name And Age</button>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    user:state.user,
    slr:state.slr
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    SetName:(name)=>{
      dispatch({
        type:"SetName",
        payload:name
      });
    },
    SetAge:(age)=>{
      dispatch({
        type:"SetAge",
        payload:age
      });
    },
    SetNameAndAge:(name,age)=>{
      dispatch({
        type:"SetName",
        payload:name
      });
      dispatch({
        type:"SetAge",
        payload:age
      });
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AppOld);
