import React from 'react';
import './App.css';
import MainContent from "./components/MainContent";
import SearchInput from "./components/SearchInput";
import Modal from "./components/Modal";

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
