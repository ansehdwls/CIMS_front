import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';
import reduxThunk from 'redux-thunk';
import persistStore from 'redux-persist/es/persistStore';

import { composeWithDevTools } from 'redux-devtools-extension';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxThunk)));
const persistor = persistStore(store);

export { store, persistor };
