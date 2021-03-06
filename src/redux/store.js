import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './saga/rootSaga';
import {composeWithDevTools} from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]
const composeEnhancer = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
// console.log('ENVIRONTMENT ON STORE', process.env.NODE_ENV);

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export default store;
