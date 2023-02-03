import React from 'react';
import MainContent from "./components/MainContent";
import SearchInput from "./components/SearchInput";
import Modal from "./components/Modal";
import './App.css';

function App() {

  return (
    <div className="app">
        <SearchInput />
        <MainContent />
        <Modal />
    </div>
  );
}

export default App;
