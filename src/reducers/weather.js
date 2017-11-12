// import fetch from 'node-fetch';

export default function weather(state = {}, action) {
  switch (action.type) {
    case 'LOAD_WEATHER':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
