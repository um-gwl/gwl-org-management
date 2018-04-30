import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loginSagas from './routes/login/LoginPage.saga';

// import newCampaignSagas from '../Routes/Home/NewCampaign/NewCampaign.saga';
import rootReducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

const configStore = (initialState,history) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [sagaMiddleware,routerMiddleware(history)];
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(loginSagas);
  return store;
}
// create the saga middleware


export default configStore;
