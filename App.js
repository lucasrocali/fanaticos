import React from 'react';
import { Root } from "native-base";
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from "react-navigation";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import RootNavigation from './app/navigation/RootNavigation';
import reducer from './app/reducers/index';
import { root } from './app/sagas/sagas';
import logger from 'redux-logger'
/*
TODO

-paginate/infinity list


*/

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,
  applyMiddleware(sagaMiddleware),
  applyMiddleware(logger)
);

sagaMiddleware.run(root);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigation />
       </Provider>
    );
  }
}