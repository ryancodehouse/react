import { useSelector } from 'react-redux';
import Navigation from './Components/Navigation/Navigation';
import TabsPage from './Components/Tabs/TabsPage';
import Login from './Foundation/Components/Login/Login';
import Logout from './Foundation/Components/Logout/Logout';
import { selectUser } from "./redux/loginSlice";

function App() {
  const password = useSelector(selectUser);

  return (
    <div className="App">
      {password?.password === "1" ?
        <>
          <Logout /> <Navigation />
        </>
        :
        <Login />}
    </div>
  );
}

export default App;
