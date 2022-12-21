import { useSelector } from 'react-redux';
import Navigation from './Components/Navigation/Navigation';
import Login from './Foundation/Components/Login/Login';
import Logout from './Foundation/Components/Logout/Logout';
import { selectUser } from "./redux/loginSlice";

function App() {
  const authenticated = useSelector(selectUser);

  return (
    <div className="App">
      {authenticated?.token ?
        <>
          <Logout /> <Navigation />
        </>
        :
        <Login />}
    </div>
  );
}

export default App;
