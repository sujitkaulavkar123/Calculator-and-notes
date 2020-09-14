
import React from 'react';
import store from './source/redux/store';
import { Provider } from 'react-redux';
import Dashboard from './source/containers/Dashboard';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </>
  );
};

export default App;