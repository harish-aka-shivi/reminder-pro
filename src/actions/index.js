import {ADD_REMINDER} from '../constants';


export const addReminder = (text) => {
  const action ={
    type:ADD_REMINDER,
    text// es syntact for text:text
  }
  console.log('action in add Reminder is ', action);
  return action;
}
