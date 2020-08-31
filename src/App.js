import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { store } from "./Redux/Store";
import user from './components/User.css';
import { Provider } from "react-redux"
import User from './components/User';
import Home from './components/Home';
function App() {

  const user = {
    id : "1",
    name : "usman"
  }
localStorage.setItem("user",JSON.stringify(user));
const getUser = localStorage.getItem("user");
console.log(JSON.parse(getUser));

  return (
    <div className="main" >
      <Provider store={store}>
        {/* <h1>Free Images and Free Stock</h1> */}
        <>
                <Router>
                  {/* <Switch> */}
                  <Route exact path="/" component={Home} />
                  <Route exact path="/images/:name" component={User} />
                  {/* <Route  component={()=><h1>Not Found</h1>} /> */}
                    {/* </Switch> */}
                </Router>
            </>
      </Provider>

    </div>
  );
}

export default App;
