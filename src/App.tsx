import './App.css';
import Main from './Pages/Main';
import NavigationBar from './Components/NavigationBar';
import React from 'react';

function App() {
  return (
    <div className="bg-blue-50 text-2xl">
      <NavigationBar />
      <Main />
    </div>
  );
}

export default App;
