import { ADDITION, SUBSTRATION, MULTIPLICATION, DIVISION, RESET_RESULT } from "./action";

const initialState = {
    result: 0,
    mathOperation: '+',
};

const mathReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION: 
      return { ...state, result: action.firstNumber + action.secondNumber, mathOperation: '+'};
      case SUBSTRATION: 
      return { ...state,  result: action.firstNumber - action.secondNumber, mathOperation: '-'};
      case MULTIPLICATION: 
      return { ...state,  result: action.firstNumber * action.secondNumber, mathOperation: 'X'};
      case DIVISION: 
      return { ...state,  result: action.firstNumber / action.secondNumber, mathOperation: '/'};
      case RESET_RESULT: 
      return { ...state,  result: 0};
    default:
      return state;
  }
};

export default mathReducer;

export const addition = (firstNumber, secondNumber) => {
  return { type: ADDITION, firstNumber, secondNumber };
};

export const substration = (firstNumber, secondNumber) => {
  return { type: SUBSTRATION, firstNumber, secondNumber };
};

export const multiplication = (firstNumber, secondNumber) => {
  return { type: MULTIPLICATION, firstNumber, secondNumber };
};

export const division = (firstNumber, secondNumber) => {
  return { type: DIVISION, firstNumber, secondNumber };
};

export const resetResult = () => {
  return { type: RESET_RESULT };
};
