import React from "react";
import AuthContext from "./context/AuthContext";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <div className="App">
      <AuthContext>
        <MainRoute />
      </AuthContext>
    </div>
  );
}

export default App;
