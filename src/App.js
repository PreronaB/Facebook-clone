import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed'
import Widget from './components/Widget/Widget'
import Login from './components/Login/Login'
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    //BEM naming convention
    <div className="app">
      { !user ? (
          <Login />
        ) : (
      <>
        <Header />
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widget />
        </div>
      </>
        ) } 
    </div>
  );
}

export default App;
