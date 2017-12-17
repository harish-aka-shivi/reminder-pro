import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addReminder, deleteReminder} from '../actions';

class App extends Component {
  constructor(props) {
    console.log('props in constructor ',props);
    super(props);
    this.state = {
      text:'',
      dueDate:''
    }
  }

  addReminder() {
    console.log('this in addReminder',this);
    console.log('props in addReminder are ', this.props);
    this.props.addReminder(this.state.text,this.state.dueDate);
  }

  deleteReminder(id) {
    console.log("deleting the reminder, value is ", id);
    console.log('props in delete reminder are ', this.props);
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    console.log('reminders in renderReminders is ', reminders);
    return (

      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className = "list-item">{reminder.text}</div>
                <div
                  className = "list-item delete-button"
                  onClick = {() => this.deleteReminder(reminder.id)}>&#x2715;</div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className = "App">
        <div className = "title">
          Reminder Pro
        </div>
        <div className= "form-inline reminder-form">
          <div className= "form-group">
            <input
              className= "form-control"
              placeholder="What you have to do?"
              onChange = {event => this.setState({text:event.target.value})}
            />
            <input
              className ="form-control"
              type = "datetime-local"
              onChange= {event => this.setState({dueDate:event.target.value})}/>
          </div>
          <button
            type="button"
            className = "btn btn-success"
            onClick = {() => this.addReminder()}
            >
            Add Reminder
          </button>
        </div>
        {this.renderReminders()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps , state is ->", state);
  return {
    reminders:state
  }
}

function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps, dispatch is " , dispatch);
  console.log("add reminder is ", addReminder);
  console.log("deleteReminder is ", deleteReminder);
  return bindActionCreators({addReminder, deleteReminder}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
// or in es6 we can also write
//export default connect(mapStateToProps,{addReminder, deleteReminder})(App);
