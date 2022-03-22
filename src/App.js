import "./App.css";

import { Route, Routes } from "react-router";

import Character from "./Pages/Character";
import CharactersList from "./Pages/CharactersList";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/:id" element={<Character/>}/>
        {/* <CharactersList /> */}
      </Routes>
    </div>
  );
}

export default App;
