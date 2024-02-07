import { useState } from "react";
import "./App.css";
import SearchHeader from "./SearchHeader";

function App() {
  const handleSubmit = (term) => {
    console.log(term);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
    </div>
  );
}

export default App;
