import { useEffect, useState } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container m-auto pt-10">
        <ItemListContainer description="Em construção"></ItemListContainer>
      </div>
    </div>
  );
}

export default App;
