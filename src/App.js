import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widget from "./components/widgets/Widget";

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />
      {/* feed */}
      <Feed />

      {/* widget */}
      <Widget />
    </div>
  );
}

export default App;
