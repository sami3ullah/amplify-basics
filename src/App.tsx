import {Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import {HOME, SIGNUP, LOGIN} from "./utils/routes"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={HOME} element={<Homepage />} />
        <Route path={SIGNUP} element={<Signup />} />
        <Route path={LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
