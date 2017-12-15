import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addReminder} from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:''
    }
  }

  addReminder() {
    console.log('this',this);
    this.props.addReminder(this.state.text);
  }

  render() {
    return (
      <div className = "App">
        <div className = "title">
          Reminder Pro
        </div>
        <div className= "form-inline">
          <div className= "form-group">
            <input
              className= "form-control"
              placeholder="What are you doing?"
              onChange = {event => this.setState({text:event.target.value})}
            />
          </div>
        </div>
        <button
          type="button"
          className = "btn btn-success"
          onClick = {() => this.addReminder()}
        >
          Add Reminder
        </button>

      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps , state is ->", state);
}

function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps, dispatch is " , dispatch);
  return bindActionCreators({addReminder}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
