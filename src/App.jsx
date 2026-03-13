import React from "react";
import Dashboard from "./components/Dashboard";
import StudentManager from "./components/StudentManager";

function App() {
  return (
    <div>
      <StudentManager />
      <hr />
      <Dashboard />
    </div>
  );
}

export default App;