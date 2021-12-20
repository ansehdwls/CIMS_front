import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import loginReducer from './login';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  login: loginReducer
});

export default reducer;
