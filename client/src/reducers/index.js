import {combineReducers} from "redux";

function coins(state = [], action) { 
  if (action.type === "COINS_LOADED") {
    return action.value;
  }
  return state;
}

function coin(state = [], action) {
  if (action.type === "GET_COIN_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  coins, coin
});
export default rootReducer;