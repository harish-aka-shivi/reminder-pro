import {ADD_REMINDER,DELETE_REMINDER} from '../constants';


export const addReminder = (text) => {
  const action ={
    type:ADD_REMINDER,
    text// es syntact for text:text
  }
  console.log('action in add Reminder is ', action);
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type:DELETE_REMINDER,
    id // key and value
  }
  console.log("deleting in actions", action);
  return action;
}
