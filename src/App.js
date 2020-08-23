import React from 'react';
import { store } from "./Redux/Store";
import user from './components/User.css';
import { Provider } from "react-redux"
import User from './components/User';
function App() {
  return (
    <div className="main" >
      <Provider store={store}>
        <h1>USING REDUX</h1>
        <User />
      </Provider>
    </div>
  );
}

export default App;
