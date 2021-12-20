import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import loginReducer from './login';

import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'menu', 'menuCursor']
};

const reducer = combineReducers({
  customization: customizationReducer,
  login: loginReducer
});

export default persistReducer(persistConfig, reducer);
